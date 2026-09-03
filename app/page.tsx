import Link from "next/link";
import { CALENDLY_URL, EMAIL } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-1 flex-col px-5 pt-8 pb-5 sm:px-8 sm:pt-12 sm:pb-6 md:px-10 md:pt-16 md:pb-8">
      <header className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <Link href="/" className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
          Akala Labs
        </Link>
        <a href={`mailto:${EMAIL}`} className="link-line py-1 text-sm text-muted">
          Contact
        </a>
      </header>

      <main className="mt-16 flex-1 sm:mt-24">
        <p className="reveal reveal-1 text-xs tracking-wide text-muted uppercase sm:text-sm">
          Research collaborations
        </p>
        <h1 className="headline reveal reveal-2 mt-4 font-serif tracking-tight text-foreground">
          The real-world layer for AI.
        </h1>
        <p className="reveal reveal-3 mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
          What separates today’s model and agent stacks from AGI is the
          real-world insight of domain experts. We facilitate that exchange.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta reveal reveal-4 mt-8 inline-flex min-h-11 items-center rounded-sm bg-accent px-5 text-sm text-[#f6f3ee]"
        >
          Book time
        </a>
      </main>

      <div className="reveal reveal-5">
        <SiteFooter />
      </div>
    </div>
  );
}
