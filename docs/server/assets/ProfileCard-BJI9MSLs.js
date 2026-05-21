import { V as jsxRuntimeExports } from "./server-DapvtGDP.js";
import { L as Link } from "./router-FRC8J7-H.js";
import { R as RatingBadge } from "./RatingBadge-DsQF-FdA.js";
function ProfileCard({ p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/professionals/$id",
      params: { id: p.id },
      className: "group block fade-up",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "img-zoom relative aspect-[4/5] bg-secondary mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.image,
              alt: `${p.name} — ${p.role}`,
              loading: "lazy",
              width: 800,
              height: 1e3,
              className: "absolute inset-0 size-full object-cover"
            }
          ),
          p.available48h && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 label-tiny bg-background/90 backdrop-blur px-3 py-1.5", children: "Available · 48h" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "label-tiny text-muted-foreground", children: [
              p.role,
              " — ",
              p.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl leading-none", children: p.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RatingBadge, { rating: p.rating, reviews: p.reviews })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground", children: "Starts from" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium tabular-nums", children: [
            "€",
            p.startsFrom.toLocaleString()
          ] })
        ] })
      ]
    }
  );
}
export {
  ProfileCard as P
};
