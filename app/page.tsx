import Link from "next/link";
import { EMAIL } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-10 sm:px-8 sm:py-16">
      <header className="flex items-baseline justify-between gap-6">
        <Link href="/" className="font-serif text-2xl tracking-tight text-foreground">
          Akala Labs
        </Link>
        <a href={`mailto:${EMAIL}`} className="text-sm text-muted hover:text-foreground">
          Contact
        </a>
      </header>

      <main className="mt-20 flex-1 sm:mt-28">
        <p className="text-sm tracking-wide text-muted uppercase">
          AI and agents for revenue cycle
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-[2.75rem]">
          We help RCM companies modernize with AI and agents.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Your people already know the work. We build the systems that let them
          move faster—coding, claims, denials, and the rest of the cycle.
        </p>
        <a
          href={`mailto:${EMAIL}?subject=Akala%20Labs`}
          className="mt-8 inline-flex rounded-sm bg-accent px-4 py-2.5 text-sm text-[#f6f3ee] hover:opacity-90"
        >
          Get in touch
        </a>
      </main>

      <footer className="mt-24 flex flex-col gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Akala Labs</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
            {EMAIL}
          </a>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
