import type { Block } from 'payload'

export const Code: Block = {
    slug: 'code',
    interfaceName: 'CodeBlock',
    fields: [
        {
            name: 'filename',
            type: 'text',
        },
        {
            name: 'language',
            type: 'select',
            options: [
                { label: 'TypeScript', value: 'typescript' },
                { label: 'TSX', value: 'tsx' },
                { label: 'JavaScript', value: 'javascript' },
                { label: 'JSX', value: 'jsx' },
                { label: 'CSS', value: 'css' },
                { label: 'HTML', value: 'html' },
                { label: 'dotenv', value: 'dotenv' },
                { label: 'Go', value: 'go' },
                { label: 'Nginx', value: 'nginx' },
                { label: 'sh', value: 'sh' },
                { label: 'JSON', value: 'json' },
                { label: 'YAML', value: 'yaml' },
                { label: 'Text', value: 'text' },
                { label: 'TOML', value: 'toml' },
                { label: 'Java', value: 'java' },
            ],
            defaultValue: 'text',
        },
        {
            name: 'code',
            type: 'code',
            label: false,
            required: true,
        },
    ],
}
