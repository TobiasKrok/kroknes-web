import { Button } from '@/components/ui/button'
import { LucideMail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer
            id="contact"
            className="border-border mt-8 border-t px-4 py-6 sm:px-6 lg:px-8"
        >
            <div className="mx-auto grid gap-8 text-center md:grid-cols-3">
                <div>
                    <span className="decoration-primary text-secondary-foreground font-semibold underline">
                        kroknes<span className="text-primary">.</span>dev
                    </span>
                    <p className="text-muted-foreground mt-4 text-sm text-wrap">
                        © {currentYear} Tobias Kroknes Kristiansen.
                    </p>
                </div>
                <div>
                    <h4 className="mb-4 font-semibold underline">
                        Quick links
                    </h4>
                    <div>
                        <Link href="/blog">Blog</Link>
                    </div>
                </div>

                <div>
                    <h4 className="mb-4 font-semibold underline">Connect</h4>
                    <div>
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
                    <p className="text-muted-foreground">
                        tobiaskroknes@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    )
}
