import Blogs from '@/components/features/home/blogs'
import { NodeNetwork } from '@/components/features/home/net-animation'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { ArrowRight, LucideMail } from 'lucide-react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiKubernetes, SiRedhatopenshift } from 'react-icons/si'

export default function Home() {
    return (
        <main className="flex w-full flex-col items-center justify-center align-middle">
            {/* hero */}
            <section className="relative">
                <NodeNetwork />
                <div className="relative z-10 container mx-auto text-center md:w-2/3 lg:w-1/2">
                    <span className="text-muted-foreground mb-3 block text-xl">
                        Hello! I'm
                    </span>
                    <h1 className="mb-3 text-2xl">
                        <span className="bg-linear-to-r from-emerald-700 to-emerald-500 bg-clip-text font-extrabold text-transparent">
                            Tobias Kroknes Kristiansen
                        </span>
                    </h1>
                    <p className="text-muted-foreground">
                        I'm currently working as a Platform Engineer at
                        Intility, mainly dealing with{' '}
                        <span className="text-nowrap">
                            <SiKubernetes className="-mt-1 inline text-blue-600" />{' '}
                            Kubernetes
                        </span>{' '}
                        and{' '}
                        <span className="text-nowrap">
                            <SiRedhatopenshift className="-mt-1 inline text-red-500" />{' '}
                            Openshift.
                        </span>{' '}
                        I like making things, so on this page you'll find any
                        projects I decide to make and write about.
                    </p>
                </div>
                <div className="mt-5 space-x-1 text-center">
                    <Button aria-label="linkedin" variant={'link'}>
                        <a href="https://www.linkedin.com/in/tobias-kroknes-kristiansen-727413140/">
                            <FaLinkedinIn className="size-6!" />
                        </a>
                    </Button>
                    <Button
                        aria-label="github"
                        variant={'link'}
                        className="text-2xl"
                    >
                        <a href="https://www.github.com/tobiaskrok">
                            <FaGithub className="size-6!" />
                        </a>
                    </Button>
                    <Button aria-label="email" variant={'link'}>
                        <a href="mailto:tobiaskroknes@gmail.com">
                            <LucideMail className="size-6!" />
                        </a>
                    </Button>
                </div>
            </section>

            <section
                id="posts"
                className="mt-32 flex w-full flex-col items-center justify-center"
            >
                <div className="mb-10 text-center">
                    <h1 className="text-primary text-xl font-semibold">
                        Posts
                    </h1>
                    <p className="text-muted-foreground mt-3">
                        Recent posts that I've written, tech and everything else
                    </p>
                </div>
                <Blogs />
                <Link
                    href="/blog"
                    className="text-secondary-foreground mt-10 flex items-center gap-1 text-sm font-medium"
                >
                    See all posts{' '}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </section>
        </main>
    )
}

export const dynamic = 'force-dynamic'
