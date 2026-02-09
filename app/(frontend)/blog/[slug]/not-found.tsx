'use client'
import { Button } from '@/components/ui/button'
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from '@/components/ui/empty'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()
    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle>Hmmm, this blog post does not exist...</EmptyTitle>
                <EmptyDescription>
                    This post does not exist, check if the URL is correct!
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button
                    variant={'outline'}
                    onClick={() => router.push('/blog')}
                >
                    Back to posts
                </Button>
            </EmptyContent>
        </Empty>
    )
}
