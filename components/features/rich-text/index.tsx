import { cn } from '@/lib/utils'
import {
    DefaultNodeTypes,
    SerializedBlockNode,
    SerializedLinkNode,
    type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
    JSXConvertersFunction,
    LinkJSXConverter,
    RichText as ConvertRichText,
    JSXConverter,
} from '@payloadcms/richtext-lexical/react'
import CodeBlock, { CodeBlockProps } from './blocks/code/component.server'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CodeBlockProps>
// | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

// COPIED FROM https://github.com/payloadcms/payload/blob/main/templates/website/src/components/RichText/index.tsx
// payload guide: https://payloadcms.com/docs/rich-text/converting-jsx

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
    const { value, relationTo } = linkNode.fields.doc!
    if (typeof value !== 'object') {
        throw new Error('Expected value to be an object')
    }
    const slug = value.slug
    return relationTo === 'blog' ? `/blog/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
    defaultConverters,
}) => ({
    ...defaultConverters,
    ...LinkJSXConverter({ internalDocToHref }),
    blocks: {
        code: ({ node }: { node: SerializedBlockNode<CodeBlockProps> }) => {
            console.log(node)
            return <CodeBlock {...node.fields} />
        },
    },
})

type Props = {
    data: DefaultTypedEditorState
    enableGutter?: boolean
    enableProse?: boolean
    enhancedImages?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
    const {
        className,
        enableProse = true,
        enableGutter = true,
        enhancedImages = true, // this is so the images you put in the richtext itself looks a bit better. they dont come with rounded corners etc
        ...rest
    } = props
    console.log(JSON.stringify(props.data, null, 2))
    return (
        <ConvertRichText
            converters={jsxConverters}
            className={cn(
                'payload-richtext',
                {
                    '[&_img]:rounded-xl!': enhancedImages,
                    container: enableGutter,
                    'max-w-none': !enableGutter,
                    'prose-code:before:content-none prose-code:after:content-none prose lg:prose-lg md:prose-md dark:prose-invert max-w-none':
                        enableProse,
                },
                className
            )}
            {...rest}
        />
    )
}
