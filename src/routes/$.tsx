import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: PAGE_META.notFound.title },
      { name: "description", content: PAGE_META.notFound.description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundPage,
});
