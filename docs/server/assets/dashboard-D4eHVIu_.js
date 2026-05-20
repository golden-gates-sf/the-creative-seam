import { V as jsxRuntimeExports } from "./server-B4kp0_TF.js";
import { L as Link, p as professionals } from "./router-SgH2OmHM.js";
import { c as createLucideIcon, S as SiteHeader } from "./SiteHeader-npx5tSz-.js";
import { S as SiteFooter } from "./SiteFooter-sr1OXAVD.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$1);
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode);
function Dashboard() {
  const saved = professionals.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 mx-auto max-w-[1440px] px-6 lg:px-12 py-16 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 gap-6 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Studio · Brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl lg:text-7xl mt-3 leading-[0.95]", children: "Good morning, Atelier." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/campaigns/new", className: "btn-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-3.5" }),
          " New campaign"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-16", children: [["03", "Active campaigns"], ["12", "Pending proposals"], ["28", "Saved professionals"], ["07", "Unread messages"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-5xl", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground mt-3", children: v })
      ] }, v)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Active campaigns" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mt-2", children: "In production" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/campaigns/new", className: "label-tiny inline-flex items-center gap-1.5 hover:gap-2.5 transition-all", children: [
              "New ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
            name: "SS27 — Linen Story",
            roles: "Photographer · Model · MUA",
            status: "Casting",
            count: 8
          }, {
            name: "Editorial — Soft Power",
            roles: "2 Models · Stylist",
            status: "Shooting",
            count: 4
          }, {
            name: "Campaign — North Light",
            roles: "Photographer · Location",
            status: "Drafting",
            count: 0
          }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "border border-border p-6 hover:border-foreground transition group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground", children: c.status }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mt-2", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1.5", children: c.roles })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl", children: c.count }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground mt-1", children: "applicants" })
            ] })
          ] }) }, c.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Saved" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mt-2", children: "Your shortlist" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", className: "label-tiny", children: "Browse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: saved.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/professionals/$id", params: {
            id: p.id
          }, className: "img-zoom relative aspect-[4/5] bg-secondary group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "size-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background text-sm font-medium", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-background/80", children: p.role })
            ] })
          ] }, p.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border border-border p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Recent messages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-border", children: [["Elena Rossi", "Sounds great — sending availability now."], ["Marco Bianchi", "Attaching the test shots from yesterday."], ["Sofia Leone", "Confirmed for Tuesday's call."]].map(([n, m]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex items-baseline justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-1", children: m })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-tiny text-muted-foreground shrink-0", children: "2h" })
            ] }, n)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/messages", className: "btn-ghost w-full mt-5 !py-2.5", children: "Open inbox" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Dashboard as component
};
