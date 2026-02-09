import { getPayload } from 'payload'
import config from '@payload-config'
import SearchableBlog from '@/components/features/blog/searchable-blog'

export default async function BlogPage() {
    const payload = await getPayload({ config })
    const blogs = await payload.find({
        collection: 'blog',
        sort: '-createdAt',
        where: {
            status: { equals: 'published' },
        },
    })

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
            <header className="text-center">
                <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
                <p className="text-muted-foreground mt-2">
                    All my blog posts, read what you find interesting!
                </p>
            </header>

            {blogs.docs.length > 0 && <SearchableBlog posts={blogs} />}

            {blogs.docs.length === 0 && (
                <p className="text-muted-foreground mt-12 text-center">
                    No posts yet. Check back soon!
                </p>
            )}
        </div>
    )
}
