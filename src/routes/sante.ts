import { createFileRoute } from "@tanstack/react-router";

function SantePage() {
  return null;
}

export const Route = createFileRoute("/sante")({
  component: SantePage,
  server: {
    handlers: {
      GET: async () =>
        new Response(
          JSON.stringify({
            status: "ok",
            service: "somboro-code",
          }),
          {
            headers: {
              "content-type": "application/json; charset=utf-8",
              "cache-control": "no-store",
            },
          },
        ),
    },
  },
});
