import Link from "next/link";
import { EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>Akala Labs</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <a href={`mailto:${EMAIL}`} className="link-line break-all">
          {EMAIL}
        </a>
        <Link href="/privacy" className="link-line">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
