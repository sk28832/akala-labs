import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";
import { Spark } from "@/components/spark";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-1 flex-col px-5 py-10 sm:px-8 sm:py-12 md:px-10">
      <div className="my-auto w-full">
        <header className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <Link
            href="/"
            className="flex items-baseline font-serif text-2xl tracking-tight text-foreground sm:text-3xl"
          >
            <Spark className="mr-[0.42em] size-[0.8em] shrink-0 overflow-visible" />
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

        <main className="reveal reveal-1 mt-9 space-y-4 text-base leading-relaxed text-foreground sm:mt-10 sm:text-lg">
          <p>
            Frontier models can process healthcare data. They can’t yet reason
            about it the way a specialist does. That gap between pattern
            recognition and expert judgment is what Akala Labs exists to close.
          </p>
          <p>
            We turn real-world clinical expertise into the signal models learn
            from. Not just the data, but the judgment behind it: what an expert
            saw, what they weighed, and how they reached their conclusion.
          </p>
        </main>

        <div className="reveal reveal-2 mt-9 sm:mt-10">
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
