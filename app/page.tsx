import Link from "next/link";
import { EMAIL } from "@/lib/site";
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
          AI and agents for revenue cycle
        </p>
        <h1 className="headline reveal reveal-2 mt-4 font-serif tracking-tight text-foreground">
          We help RCM companies modernize with AI and agents.
        </h1>
        <p className="reveal reveal-3 mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
          Your people already know the work. We build the systems that let them
          move faster—coding, claims, denials, and the rest of the cycle.
        </p>
        <a
          href={`mailto:${EMAIL}?subject=Akala%20Labs`}
          className="cta reveal reveal-4 mt-8 inline-flex min-h-11 items-center rounded-sm bg-accent px-5 text-sm text-[#f6f3ee]"
        >
          Get in touch
        </a>
      </main>

      <div className="reveal reveal-5">
        <SiteFooter />
      </div>
    </div>
  );
}
