import { codeToHtml, type BundledLanguage } from 'shiki'
import { Hash } from 'lucide-react'
import CopyButton from './copy-button'

export type CodeBlockProps = {
    code: string
    language?: BundledLanguage
    filename?: string
}

export default async function CodeBlock(props: CodeBlockProps) {
    if (props.code === null) return null

    const out = await codeToHtml(props.code, {
        lang: props.language ?? 'text',
        themes: {
            light: 'catppuccin-latte',
            dark: 'dark-plus',
        },
    })
    return (
        <>
            <div className="text-mono flex items-center justify-between rounded-t-xl bg-zinc-200 p-2 align-middle text-sm dark:bg-zinc-800">
                <div className="flex items-center">
                    <span className="mr-2 inline rounded border border-zinc-400/25 bg-zinc-300 p-1 dark:bg-zinc-700">
                        <Hash size={14} />
                    </span>
                    <span>{props.filename}</span>
                </div>
                <CopyButton code={props.code} />
            </div>
            <div
                // seems like prose adds a margin top, so we remove it here so the filename header works better
                className="col-start-2 mt-0 mb-4 rounded-xl rounded-t-none [&>pre]:mt-0"
                dangerouslySetInnerHTML={{ __html: out }}
            />
        </>
    )
}
