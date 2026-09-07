import { EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>Akala Labs</p>
      <a href={`mailto:${EMAIL}`} className="link-line break-all">
        {EMAIL}
      </a>
    </footer>
  );
}
