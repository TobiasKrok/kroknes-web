'use client'

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Blog, Media } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { PaginatedDocs } from 'payload'
import { useState } from 'react'
import { format } from 'date-fns'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group'
import { Search } from 'lucide-react'
type Props = {
    posts: PaginatedDocs<Blog>
}
export default function SearchableBlog(props: Props) {
    const [query, setQuery] = useState('')

    const filtered = props.posts.docs.filter(
        (blog) =>
            blog.title
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase()) ||
            blog.shortDescription
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase())
    )
    return (
        <div>
            <div className="mt-4 flex justify-center">
                <InputGroup className="max-w-xs">
                    <InputGroupInput
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    {query !== '' && (
                        <InputGroupAddon align="inline-end">
                            {filtered.length} posts
                        </InputGroupAddon>
                    )}
                </InputGroup>
            </div>
            <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((blog) => {
                    const thumbnail = blog.thumbnail as Media
                    return (
                        <Link
                            href={`/blog/${blog.slug}`}
                            key={blog.id}
                            className="block"
                        >
                            <Card className="border-muted group hover:border-primary/50 h-full overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-50/10">
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={thumbnail?.url || ''} //TODO: placeholder
                                        alt={thumbnail?.alt || 'Blog thumbnail'}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <p className="text-primary font-mono text-xs font-medium">
                                        {format(
                                            new Date(blog.createdAt),
                                            'd MMM, yyyy'
                                        )}{' '}
                                        &#8226; {blog.minutesToRead} min read
                                    </p>
                                    <CardTitle className="group-hover:text-primary line-clamp-2 transition duration-300">
                                        {blog.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {blog.shortDescription}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
