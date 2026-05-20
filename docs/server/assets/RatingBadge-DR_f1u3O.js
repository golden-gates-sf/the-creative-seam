import { V as jsxRuntimeExports } from "./server-B4kp0_TF.js";
import { c as createLucideIcon } from "./SiteHeader-npx5tSz-.js";
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function RatingBadge({ rating, reviews, size = "sm" }) {
  const cls = size === "md" ? "size-4" : "size-3";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: cls, style: { fill: "var(--accent)", color: "var(--accent)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium tabular-nums", children: rating.toFixed(1) }),
    reviews !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "label-tiny text-muted-foreground", children: [
      "(",
      reviews,
      ")"
    ] })
  ] });
}
export {
  RatingBadge as R
};
