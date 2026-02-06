import { ThemeToggle } from '@/components/theme/theme-toggle'

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
                <ThemeToggle />
            </nav>
        </header>
    )
}
