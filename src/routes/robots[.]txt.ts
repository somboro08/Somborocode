import { createFileRoute } from "@tanstack/react-router";

const BODY = `User-agent: *
Allow: /
Disallow: /equipe
Disallow: /login
Disallow: /api/
Disallow: /sante
Disallow: /demarrer
Disallow: /rendez-vous

# Le fichier sitemap.xml sera publié avec des URL absolues
# après confirmation et contrôle du domaine souhaité (sombrocode.com).
`;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(BODY, {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
