import { getPayload } from 'payload'

import config from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ImageOff } from 'lucide-react'
import { format } from 'date-fns/format'
import { Media } from '@/payload-types'
import RichText from '@/components/features/rich-text'
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
        <main className="bg-muted/40 border-muted mx-auto w-full max-w-5xl overflow-hidden rounded-xl border-2 p-4 lg:max-w-7xl lg:p-8">
            <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary md:text-md inline-flex items-center gap-1 lg:text-lg"
            >
                <ArrowLeft className="h-3 w-5" />
                Back to overview
            </Link>
            <header className="mt-8">
                <h1 className="text-3xl leading-2 font-bold tracking-wider lg:text-4xl">
                    {blog.title}
                </h1>
                <p className="text-primary/80 lg:text-md mt-5 font-mono text-sm">
                    {format(new Date(blog.createdAt), 'd MMM, yyyy')} &#8226;{' '}
                    {blog.minutesToRead} min read
                </p>
                <p className="text-muted-foreground border-primary/30 mt-4 border-l-2 pl-4 text-base italic lg:text-lg">
                    {blog.shortDescription}
                </p>
            </header>

            <div className="relative mt-8 sm:mx-0">
                {thumbnail?.url ? (
                    <div className="relative mt-8 aspect-video max-h-80 overflow-hidden rounded-xl lg:max-h-96">
                        <Image
                            src={thumbnail.url}
                            alt={thumbnail.alt || 'Blog thumbnail'}
                            className="object-contain"
                            fill
                        />
                    </div>
                ) : null}
            </div>
            <article className="mt-8">
                <RichText data={blog.content} enableProse />
            </article>
        </main>
    )
}
