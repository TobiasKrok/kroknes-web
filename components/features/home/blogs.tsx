import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import { Media } from '@/payload-types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from '@/components/ui/empty'
export default async function Blogs() {
    const payload = await getPayload({ config })
    const blogs = await payload.find({
        collection: 'blog',
        sort: '-createdAt',
        where: {
            status: {
                equals: 'published',
            },
            featured: {
                equals: true,
            },
        },
    })
    if (blogs.docs.length === 0) {
        return (
            <Empty>
                <EmptyHeader>
                    <EmptyTitle>No posts yet!</EmptyTitle>
                    <EmptyDescription>Check back later...</EmptyDescription>
                </EmptyHeader>
            </Empty>
        )
    }
    return (
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4">
            {blogs.docs.map((blog) => {
                const thumbnail = blog.thumbnail as Media

                return (
                    <Link
                        href={`/blog/${blog.slug}`}
                        className="group border-border bg-card hover:border-primary/50 relative flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:flex-row md:items-stretch"
                        key={blog.id}
                    >
                        <div className="bg-primary absolute top-0 left-0 h-full w-1 md:h-1 md:w-full" />

                        <div className="relative aspect-video w-full shrink-0 overflow-hidden md:aspect-4/3 md:w-72">
                            <Image
                                sizes="(max-width: 768px) 100vw, 288px"
                                src={
                                    thumbnail.sizes?.thumbnail?.url ||
                                    thumbnail.url ||
                                    ''
                                }
                                alt={thumbnail.alt || 'Blog thumbnail'}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col justify-center p-6">
                            <p className="text-primary font-mono text-xs font-medium">
                                {format(
                                    new Date(blog.createdAt),
                                    'd MMM, yyyy'
                                )}{' '}
                                &#8226; {blog.minutesToRead} min read
                            </p>
                            <h3 className="group-hover:text-primary mt-1 text-xl font-bold tracking-tight transition-colors">
                                {blog.title}{' '}
                                <Badge variant={'success'}>featured</Badge>
                            </h3>
                            <p className="text-muted-foreground mt-2 line-clamp-2">
                                {blog.shortDescription}
                            </p>
                            <span className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                                Read more{' '}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export const dynamic = 'force-dynamic'
