'use client'

import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

type CopyButtonProps = {
    code: string
}
export default function CopyButton({ code }: CopyButtonProps) {
    const [copied, setCopied] = useState(false)
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        toast.success('Copied')
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Tooltip>
            <TooltipContent>{copied ? 'Copied!' : 'Copy code'}</TooltipContent>
            <TooltipTrigger asChild>
                <Button
                    size={'icon-xs'}
                    variant={'ghost'}
                    aria-label="Copy code"
                    onClick={handleCopy}
                >
                    {copied ? <Check /> : <Copy />}
                </Button>
            </TooltipTrigger>
        </Tooltip>
    )
}
