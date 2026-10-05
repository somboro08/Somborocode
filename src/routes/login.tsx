import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { BrandMark } from "@/components/brand/logo";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: PAGE_META.login.title },
      { name: "description", content: PAGE_META.login.description },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <main className="grid min-h-dvh place-items-center bg-ink px-5 text-paper">
      <div className="w-full max-w-md rounded-xl border border-paper/10 bg-ink-soft p-7">
        <BrandMark />
        <h1 className="mt-5 font-display text-3xl tracking-[-0.03em]">Espace équipe</h1>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          Connexion réservée aux personnes autorisées à consulter et traiter les
          demandes. Les visiteurs n’ont pas besoin de compte pour écrire à
          Somboro-code.
        </p>
        <div className="mt-6 grid gap-2">
          {authEnabled ? (
            GROK_PROVIDERS.map((provider) => (
              <button
                key={provider.providerId}
                type="button"
                onClick={() => signIn(provider.providerId, { callbackURL: "/equipe" })}
                className="h-12 rounded-full border border-paper/15 px-4 text-sm font-medium hover:border-lime/50 hover:bg-paper/5"
              >
                Continuer avec {provider.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-mist">La connexion n’est pas encore activée.</p>
          )}
        </div>
        <p className="mt-6 text-sm">
          <Link to="/" className="text-lime underline-offset-4 hover:underline">
            Retour au site
          </Link>
        </p>
      </div>
    </main>
  );
}
