import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="mx-auto py-5 px-4 pb-7 flex justify-between items-center">
        <a
          href="/"
          className="underline decoration-primary text-secondary-foreground"
        >
          kroknes<span className="text-primary">.</span>dev
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
