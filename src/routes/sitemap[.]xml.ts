import { createFileRoute } from "@tanstack/react-router";

const BODY = `<?xml version="1.0" encoding="UTF-8"?>
<!-- URL absolues à renseigner après confirmation du domaine (sombrocode.com). -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>
`;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(BODY, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
