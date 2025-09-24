import type {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
    IExecuteFunctions
} from 'n8n-workflow';

export class Random implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'True Random Number Generator',
        name: 'random',
        icon: 'file:random.svg',
        group: ['transform'],
        version: 1,
        description: 'Gera um número aleatório verdadeiro usando RANDOM.ORG API',
        defaults: {
            name: 'True Random Number Generator',
        },
        inputs: ['main'],
        outputs: ['main'],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'True Random Number Generator',
                        value: 'gerar',
                        description: 'Gera um número aleatório verdadeiro usando RANDOM.ORG API',
                        action: 'Gerar um número aleatório verdadeiro',
                    },
                ],
                default: 'gerar',
            },
            {
                displayName: 'Min',
                name: 'min',
                type: 'number',
                default: 1,
                required: true,
                description: 'Minimum value (inclusive)',
            },
            {
                displayName: 'Max',
                name: 'max',
                type: 'number',
                default: 100,
                required: true,
                description: 'Maximum value (inclusive)',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: IDataObject[] = [];

        for (let i = 0; i < items.length; i++) {
            try {
                const min = this.getNodeParameter('min', i) as number;
                const max = this.getNodeParameter('max', i) as number;

                if (min >= max) {
                    throw new Error('Min must be less than Max');
                }

                const response = await this.helpers.httpRequest({
                    method: 'GET',
                    url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
                });

                const randomNumber = parseInt(response);
                const generatedAt = new Date().toUTCString();

                returnData.push({
									"Número Gerado pelos intervalos": min + " e " + max,
									"Data e Hora": generatedAt,
                  "Número aleatório gerado": randomNumber
                });

            } catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ error: error.message });
                } else {
                    throw error;
                }
            }
        }

        return [this.helpers.returnJsonArray(returnData)];
    }
}

