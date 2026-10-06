import { createFileRoute } from "@tanstack/react-router";

const BODY = `User-agent: *
Allow: /
Disallow: /equipe
Disallow: /login
Disallow: /api/
Disallow: /sante
Disallow: /demarrer
Disallow: /rendez-vous

Sitemap: https://somborocode.site/sitemap.xml
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
