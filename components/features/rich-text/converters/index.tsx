import {
    DefaultNodeTypes,
    SerializedBlockNode,
} from '@payloadcms/richtext-lexical'
import {
    JSXConvertersFunction,
    LinkJSXConverter,
} from '@payloadcms/richtext-lexical/react'
import { headingConverter } from './headings'
import { internalDocToHref } from './internal-linking'

type NodeTypes = DefaultNodeTypes
// | SerializedBlockNode<TableOfContentsProps | ContentWithMediaProps>

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({
    defaultConverters,
}) => ({
    ...defaultConverters,
    ...LinkJSXConverter({ internalDocToHref }),
    ...headingConverter,
})
