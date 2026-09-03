import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-1 flex-col px-5 py-10 sm:px-8 sm:py-12 md:px-10">
      <div className="my-auto w-full">
        <header className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <Link
            href="/"
            className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
          >
            Akala Labs
          </Link>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line py-1 text-sm text-muted"
          >
            Book time
          </a>
        </header>

        <main className="reveal reveal-1 mt-9 sm:mt-10">
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            Akala Labs connects domain experts with the frontier labs that need
            their judgment. We start with medical imaging. We work with the
            practices that produce it, structure de-identified OCT, retinal, CT,
            MRI, X-ray, and ultrasound datasets, and capture the context that
            makes them useful: how the study was acquired, what the reader was
            looking for, and how they arrived at the read. That judgment is the
            signal a raw archive cannot provide. Labs use the result as
            datasets, evals, and research collaborations. The gap between
            today’s model and agent stacks and AGI is the real world insight of
            domain experts, and we facilitate that exchange.
          </p>
        </main>

        <div className="reveal reveal-2 mt-9 sm:mt-10">
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
