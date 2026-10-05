import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ surface = "ink" }: { surface?: "ink" | "paper" }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const inverted = surface === "paper";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-md",
        inverted
          ? "border-ink/8 bg-paper/90 text-ink"
          : "border-paper/8 bg-ink/85 text-paper",
      )}
    >
      <div className="page-wrap-wide flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]">
        <Logo inverted={inverted} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150",
                inverted ? "hover:bg-ink/6" : "hover:bg-paper/8",
              )}
              activeProps={{
                className: inverted ? "bg-ink/8" : "bg-paper/10",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant={inverted ? "ink" : "lime"}
            size="sm"
            className="px-3.5 text-[0.8125rem] sm:px-4 sm:text-sm"
          >
            <Link to="/demarrer">
              <span className="sm:hidden">Mon projet</span>
              <span className="hidden sm:inline">Parler de mon projet</span>
            </Link>
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-current/15 lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" strokeWidth={1.6} /> : <Menu className="size-5" strokeWidth={1.6} />}
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <div
          id={panelId}
          className={cn(
            "border-t lg:hidden",
            inverted ? "border-ink/8 bg-paper" : "border-paper/8 bg-ink",
          )}
        >
          <nav className="page-wrap-wide grid gap-1 py-4" aria-label="Menu mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-current/6"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/rendez-vous" className="rounded-md px-3 py-3 text-base font-medium hover:bg-current/6">
              Demander un rendez-vous
            </Link>
            <Button asChild variant={inverted ? "ink" : "lime"} className="mt-2">
              <Link to="/demarrer">Parler de mon projet</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
