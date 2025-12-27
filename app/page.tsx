import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { LucideMail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiKubernetes, SiRedhatopenshift } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="mx-auto py-5 px-4 pb-7 flex justify-between items-center">
        <a
          href="/"
          className="underline decoration-primary text-secondary-foreground"
        >
          kroknes<span className="text-primary">.</span>dev
        </a>
        <ThemeToggle />
      </nav>
      {/* hero */}
      <main className="mx-auto flex flex-col w-full justify-center items-center gap-9">
        <section className=" container text-center lg:w-1/2 xl:w-1/2 md:w-1/2">
          <h1 className="text-2xl mb-3">
            <span className="block text-muted-foreground mb-3">Hello! I'm</span>
            <span className="bg-linear-to-r from-emerald-700 to-emerald-500 text-transparent bg-clip-text font-extrabold">
              Tobias Kroknes Kristiansen
            </span>
          </h1>
          <p className="text-muted-foreground">
            I'm currently working as a Platform Engineer at Intility, mainly
            dealing with{" "}
            <span className="text-nowrap">
              <SiKubernetes className="inline -mt-1 text-blue-600 " />{" "}
              Kubernetes
            </span>{" "}
            and{" "}
            <span className="text-nowrap">
              <SiRedhatopenshift className="inline -mt-1 text-red-500" />{" "}
              Openshift.{" "}
            </span>
            I like making things, so on this page you'll find any projects I
            decide to make and write about.
          </p>
        </section>
        <section className="space-x-1 -mt-5">
          <Button aria-label="linkedin" variant={"link"}>
            <a href="https://www.linkedin.com/in/tobias-kroknes-kristiansen-727413140/">
              <FaLinkedinIn />
            </a>
          </Button>

          <Button aria-label="github" variant={"link"} className="text-2xl">
            <a href="https://www.github.com/tobiaskrok">
              <FaGithub />
            </a>
          </Button>
          <Button aria-label="linkedin" variant={"link"} className="text-2xl">
            <a href="mailto:tobiaskroknes@gmail.com">
              <LucideMail />
            </a>
          </Button>
        </section>
        <section>More coming soon...</section>
      </main>
    </div>
  );
}
