import { NodeNetwork } from "@/components/features/home/net-animation";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { LucideMail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiKubernetes, SiRedhatopenshift } from "react-icons/si";

/*
 *
      <nav className="mx-auto py-5 px-4 pb-7 flex justify-between items-center">
        <a
          href="/"
          className="underline decoration-primary text-secondary-foreground"
        >
          kroknes<span className="text-primary">.</span>dev
        </a>
        <ThemeToggle />
      </nav>
 *
 */
export default function Home() {
  return (
    <main className=" w-full">
      {/* hero */}
      <section className="relative ">
        <NodeNetwork />
        <div className="container mx-auto  relative z-10 px-4 text-center lg:w-1/2 md:w-2/3">
          <span className="block text-muted-foreground mb-3 text-xl">
            Hello! I'm
          </span>
          <h1 className="text-2xl mb-3">
            <span className="bg-linear-to-r from-emerald-700 to-emerald-500 text-transparent bg-clip-text font-extrabold">
              Tobias Kroknes Kristiansen
            </span>
          </h1>
          <p className="text-muted-foreground">
            I'm currently working as a Platform Engineer at Intility, mainly
            dealing with{" "}
            <span className="text-nowrap">
              <SiKubernetes className="inline -mt-1 text-blue-600" /> Kubernetes
            </span>{" "}
            and{" "}
            <span className="text-nowrap">
              <SiRedhatopenshift className="inline -mt-1 text-red-500" />{" "}
              Openshift.
            </span>{" "}
            I like making things, so on this page you'll find any projects I
            decide to make and write about.
          </p>
        </div>
        <div className="space-x-1 text-center mt-5">
          <Button aria-label="linkedin" variant={"link"}>
            <a href="https://www.linkedin.com/in/tobias-kroknes-kristiansen-727413140/">
              <FaLinkedinIn className="size-6!" />
            </a>
          </Button>
          <Button aria-label="github" variant={"link"} className="text-2xl">
            <a href="https://www.github.com/tobiaskrok">
              <FaGithub className="size-6!" />
            </a>
          </Button>
          <Button aria-label="email" variant={"link"}>
            <a href="mailto:tobiaskroknes@gmail.com">
              <LucideMail className="size-6!" />
            </a>
          </Button>
        </div>
      </section>

      <section className="text-center mt-5">
        <div className="loading ">More coming soon</div>
      </section>
    </main>
  );
}
