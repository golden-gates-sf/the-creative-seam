import { Star } from "lucide-react";

export function RatingBadge({ rating, reviews, size = "sm" }: { rating: number; reviews?: number; size?: "sm" | "md" }) {
  const cls = size === "md" ? "size-4" : "size-3";
  return (
    <span className="inline-flex items-center gap-1.5">
      <Star className={cls} style={{ fill: "var(--accent)", color: "var(--accent)" }} />
      <span className="text-[12px] font-medium tabular-nums">{rating.toFixed(1)}</span>
      {reviews !== undefined && (
        <span className="label-tiny text-muted-foreground">({reviews})</span>
      )}
    </span>
  );
}
