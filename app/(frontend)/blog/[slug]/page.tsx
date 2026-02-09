import { getPayload } from 'payload'

import config from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ImageOff } from 'lucide-react'
import { format, formatDate } from 'date-fns/format'
import { Media } from '@/payload-types'
import RichText from '@/components/features/rich-text'
import { Empty, EmptyTitle } from '@/components/ui/empty'
import { notFound } from 'next/navigation'
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const payload = await getPayload({ config })
    const blogs = await payload.find({
        collection: 'blog',
        where: {
            slug: { equals: slug },
        },
    })

    if (blogs.docs.length === 0) {
        return notFound()
    }
    const [blog] = blogs.docs // should always be one
    const thumbnail = blog.thumbnail as Media
    return (
        <main className="bg-muted/40 border-muted mx-auto max-w-6xl rounded-xl border-2 p-8">
            <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-lg"
            >
                <ArrowLeft className="h-5 w-5" />
                Back to blog
            </Link>
            <header className="prose dark:prose-invert mt-8">
                <h1 className="text-4xl leading-1 font-bold">{blog.title}</h1>
                <p className="text-primary/80 mt-2 font-mono text-sm">
                    {format(new Date(blog.createdAt), 'd MMM, yyyy')} &#8226;{' '}
                    {blog.minutesToRead} min read
                </p>
                <p className="text-muted-foreground border-primary/30 mt-4 border-l-2 pl-4 text-lg italic">
                    {blog.shortDescription}
                </p>
            </header>

            <div className="relative mt-8 aspect-video overflow-hidden sm:mx-0">
                {thumbnail.url ? (
                    <Image
                        src={(blog.thumbnail as Media).url || ''}
                        alt={(blog.thumbnail as Media).alt || 'Blog thumbnail'}
                        width={800}
                        height={450}
                        className="rounded-xl object-cover object-top"
                    />
                ) : (
                    <div className="bg-muted flex h-full w-full items-center justify-center">
                        <ImageOff className="text-muted-foreground h-12 w-12" />
                    </div>
                )}
            </div>
            <article className="mt-8">
                <RichText data={blog.content} enableProse />
            </article>
        </main>
    )
}
