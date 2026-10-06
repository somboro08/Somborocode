import { createFileRoute } from "@tanstack/react-router";
import { INTENDED_DOMAIN } from "@/lib/site";

const PUBLIC_PATHS = [
  "/",
  "/services",
  "/approche",
  "/confidentialite",
  "/mentions-legales",
  "/conditions",
] as const;

const BODY = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PUBLIC_PATHS.map(
  (path) => `  <url><loc>https://${INTENDED_DOMAIN}${path}</loc></url>`,
).join("\n")}
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
