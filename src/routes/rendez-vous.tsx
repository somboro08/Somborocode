import { createFileRoute } from "@tanstack/react-router";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { PageHero, SiteShell } from "@/components/layout/site-shell";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: PAGE_META.rendezVous.title },
      { name: "description", content: PAGE_META.rendezVous.description },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: RendezVousPage,
});

function RendezVousPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Rendez-vous"
        title="Proposez un échange, sans réserver un créneau."
        description="Il s’agit d’une demande de rendez-vous. Le créneau n’est confirmé qu’après validation par Somboro-code."
      />
      <section className="bg-paper text-ink">
        <div className="page-wrap py-16">
          <div className="rounded-xl bg-ink p-5 text-paper sm:p-8">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
