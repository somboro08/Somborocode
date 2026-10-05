import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconWell({
  icon: Icon,
  className,
  tone = "lime",
}: {
  icon: LucideIcon;
  className?: string;
  tone?: "lime" | "ink" | "paper";
}) {
  return (
    <span
      className={cn(
        "grid size-12 shrink-0 place-items-center rounded-[14px]",
        tone === "lime" && "bg-lime text-lime-ink",
        tone === "ink" && "bg-ink text-lime",
        tone === "paper" && "bg-ink-soft text-lime",
        className,
      )}
      aria-hidden="true"
    >
      <Icon className="size-5" strokeWidth={1.6} />
    </span>
  );
}
