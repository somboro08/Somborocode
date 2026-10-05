import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand/logo";
import { BRAND_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="page-wrap-wide grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <p className="font-display text-lg font-semibold tracking-[-0.03em]">{BRAND_NAME}</p>
          </div>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-mist">
            Agence de solutions numériques. Nous étudions votre besoin avant de
            proposer un site, une application ou un autre outil, sans promesse
            de résultat automatique.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist">Parcours</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li><Link to="/services" className="hover:text-lime">Services</Link></li>
              <li><Link to="/approche" className="hover:text-lime">Approche</Link></li>
              <li><Link to="/demarrer" className="hover:text-lime">Décrire mon projet</Link></li>
              <li><Link to="/rendez-vous" className="hover:text-lime">Demander un rendez-vous</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist">Informations</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li><Link to="/confidentialite" className="hover:text-lime">Confidentialité</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-lime">Mentions légales</Link></li>
              <li><Link to="/conditions" className="hover:text-lime">Conditions d’utilisation</Link></li>
              <li><Link to="/equipe" className="hover:text-lime">Espace équipe</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-wrap-wide flex flex-col gap-2 border-t border-paper/8 py-5 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {BRAND_NAME}. Tous droits réservés.</p>
        <p>Textes et pages préparés pour une publication après validation des informations légales.</p>
      </div>
    </footer>
  );
}
