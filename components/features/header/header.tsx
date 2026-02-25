import { ThemeToggle } from '@/components/theme/theme-toggle'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full">
            <nav className="mx-auto flex items-center justify-between py-5 pb-7">
                <a
                    href="/"
                    className="decoration-primary text-secondary-foreground font-semibold underline"
                >
                    kroknes<span className="text-primary">.</span>dev
                </a>
                <div className="flex items-center gap-5">
                    <Link
                        className="hover:text-primary underline"
                        href={'/blog'}
                    >
                        blog
                    </Link>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
