import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({
  children,
  surface = "ink",
}: {
  children: ReactNode;
  surface?: "ink" | "paper";
}) {
  return (
    <div className="min-h-dvh bg-ink text-paper">
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <SiteHeader surface={surface} />
      <div id="contenu">{children}</div>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="code-veil pointer-events-none absolute inset-0 opacity-70" />
      <div className="page-wrap relative grid gap-6 py-16 sm:py-20 md:py-24">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-4xl font-display text-[clamp(2rem,1.2rem+4vw,3.6rem)] font-semibold tracking-[-0.035em]">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-mist">{description}</p>
        {children}
      </div>
    </section>
  );
}
