import { getPayload } from 'payload'

import config from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ImageOff } from 'lucide-react'
import { format, formatDate } from 'date-fns/format'
import { Media } from '@/payload-types'
import RichText from '@/components/features/rich-text'
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
    const [blog] = blogs.docs // should always be one
    const thumbnail = blog.thumbnail as Media
    return (
        <main className="mx-auto max-w-3xl px-4">
            <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-lg"
            >
                <ArrowLeft className="h-5 w-5" />
                Back to blog
            </Link>
            <header className="mt-8">
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                <p className="text-primary/70 mt-2 font-mono text-sm">
                    {format(new Date(blog.createdAt), 'd MMM, yyyy')} &#8226;{' '}
                    {blog.minutesToRead} min read
                </p>
            </header>
            <div className="relative -mx-4 mt-8 aspect-video overflow-hidden sm:mx-0 sm:rounded-xl">
                {thumbnail.url ? (
                    <Image
                        src={(blog.thumbnail as Media).url || ''}
                        alt={(blog.thumbnail as Media).alt || 'Blog thumbnail'}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="bg-muted flex h-full w-full items-center justify-center">
                        <ImageOff className="text-muted-foreground h-12 w-12" />
                    </div>
                )}
            </div>
            <article>
                <RichText data={blog.content} enableProse />
            </article>
        </main>
    )
}
