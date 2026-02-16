import { codeToHtml, type BundledLanguage } from 'shiki'

export type CodeBlockProps = {
    code: string
    language?: BundledLanguage
}

export default async function CodeBlock(props: CodeBlockProps) {
    if (props.code === null) return null

    const out = await codeToHtml(props.code, {
        lang: props.language ?? 'text',
        themes: {
            light: 'catppuccin-latte',
            dark: 'catppuccin-mocha',
        },
    })
    return (
        <div
            className="col-start-2 mb-4 rounded-xl mask-conic-to-slate-800"
            dangerouslySetInnerHTML={{ __html: out }}
        />
    )
}
