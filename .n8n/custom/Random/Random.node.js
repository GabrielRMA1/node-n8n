"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.description = {
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
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            try {
                const min = this.getNodeParameter('min', i);
                const max = this.getNodeParameter('max', i);
                if (min >= max) {
                    throw new Error('O menor valor deve ser menor que o maior valor.');
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
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ error: error.message });
                }
                else {
                    throw error;
                }
            }
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.Random = Random;
//# sourceMappingURL=Random.node.js.map