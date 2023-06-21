
const bandsSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: ['name'],
        properties: {
            name: {
                type: 'string'
            },
            recordLabel: {
                type: 'string'
            }
        }
    }
}

export const festivalsSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: ['bands'],
        properties: {
            name: {
                type: 'string'
            },
            bands: bandsSchema
        }
    }
}
