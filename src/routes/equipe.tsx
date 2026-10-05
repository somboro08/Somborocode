import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand/logo";
import { StaffUser } from "@/components/equipe/staff-user";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: PAGE_META.equipe.title },
      { name: "description", content: PAGE_META.equipe.description },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: EquipeLayout,
});

function EquipeLayout() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return (
      <main className="grid min-h-dvh place-items-center bg-ink px-6 text-paper">
        <div className="grid justify-items-center gap-4 text-center">
          <BrandMark />
          <p className="text-sm text-mist">Vérification de la session…</p>
        </div>
      </main>
    );
  }
  if (!user) return <RedirectToSignIn />;

  return (
    <div className="min-h-dvh bg-ink text-paper">
      <header className="border-b border-paper/10">
        <div className="page-wrap-wide flex h-16 items-center justify-between gap-3">
          <Link to="/equipe" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="font-display text-sm font-semibold">Espace équipe</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-mist hover:text-paper">
              Voir le site
            </Link>
            <StaffUser />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
