import type { INodeCredentials, INodeProperties } from 'n8n-workflow';

export class FriendGridApi implements INodeCredentials {
    name = 'friendGridApi';
    displayName = 'FriendGrid API';
    documentationUrl = 'https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact';
    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string' as const,
            typeOptions: {
                password: true,
            },
            default: '',
            required: true,
        },
    ];

    [key: string]: any;
}
