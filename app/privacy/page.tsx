import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Akala Labs",
  description: "Privacy policy for the Akala Labs website.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-1 flex-col px-5 pt-8 pb-5 sm:px-8 sm:pt-12 sm:pb-6 md:px-10 md:pt-16 md:pb-8">
      <header>
        <Link href="/" className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
          Akala Labs
        </Link>
      </header>

      <main className="mt-12 flex-1 space-y-8 text-foreground sm:mt-16">
        <div>
          <h1 className="headline font-serif tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: August 27, 2026</p>
        </div>

        <p className="leading-relaxed text-muted">
          This policy describes how Akala Labs (“we,” “us”) handles information
          in connection with this website. It is written for a simple marketing
          site. If we later add accounts, analytics, or other products, we will
          update it.
        </p>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">Information we collect</h2>
          <p className="leading-relaxed text-muted">
            This site does not have accounts, newsletters, or contact forms that
            store submissions. We do not ask you to submit protected health
            information (PHI) here, and we do not intend to collect PHI through
            this website.
          </p>
          <p className="leading-relaxed text-muted">
            If you email us, we receive whatever you include in that message
            (typically your address, name, and the content of the email).
          </p>
          <p className="leading-relaxed text-muted">
            Our hosting provider may automatically collect standard technical
            data when you visit, such as IP address, browser type, device
            information, pages requested, and timestamps. This is used for
            security, uptime, and diagnosing errors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">Cookies</h2>
          <p className="leading-relaxed text-muted">
            We do not set advertising or analytics cookies. The host may use
            strictly necessary cookies or similar technology to operate and
            secure the site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">How we use information</h2>
          <p className="leading-relaxed text-muted">
            We use email correspondence to reply to you and, if we work
            together, to discuss and deliver that work. We use hosting logs to
            keep the site running and secure. We do not sell personal
            information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">Sharing</h2>
          <p className="leading-relaxed text-muted">
            We share information only with service providers that help us run
            the site (for example, hosting) or when required by law. Those
            providers process data on our behalf under their own terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">Retention</h2>
          <p className="leading-relaxed text-muted">
            Emails are kept as long as needed to respond and manage a
            relationship, then deleted or archived according to ordinary
            business practice. Hosting logs are retained according to the host’s
            defaults unless we configure a shorter period.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">Your choices</h2>
          <p className="leading-relaxed text-muted">
            You can email us to ask what personal information we hold from our
            correspondence, to request a correction, or to ask us to delete it,
            subject to any legal obligation to keep records. Depending on where
            you live, you may have additional rights under local law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">Children</h2>
          <p className="leading-relaxed text-muted">
            This site is not directed at children under 13, and we do not
            knowingly collect personal information from them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">Changes</h2>
          <p className="leading-relaxed text-muted">
            We may update this policy from time to time. The “Last updated”
            date at the top will change when we do.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-medium text-foreground">Contact</h2>
          <p className="leading-relaxed text-muted">
            Questions about this policy:{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="link-line text-accent"
            >
              {EMAIL}
            </a>
          </p>
        </section>

        <p>
          <Link href="/" className="link-line text-sm text-muted">
            ← Back
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
