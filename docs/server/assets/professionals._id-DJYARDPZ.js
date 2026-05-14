import { V as jsxRuntimeExports } from "./server-BT15Wj55.js";
import { R as Route, L as Link } from "./router-BNDoerDG.js";
import { c as createLucideIcon, S as SiteHeader } from "./SiteHeader-iKbCTacx.js";
import { S as SiteFooter } from "./SiteFooter-DN40g5Ly.js";
import { R as RatingBadge } from "./RatingBadge-Cm8m5zET.js";
import { S as Send } from "./send-ZRAIQ4it.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
function ProfilePage() {
  const {
    p
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-12 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/marketplace", className: "inline-flex items-center gap-2 label-tiny text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-3" }),
        " Back to marketplace"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1440px] px-6 lg:px-12 pt-10 pb-20 grid lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 lg:sticky lg:top-28 self-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img-zoom aspect-[4/5] bg-secondary rounded-md overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, width: 1080, height: 1350, className: "size-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 gap-3", children: p.portfolio.slice(0, 3).map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-secondary rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "portfolio thumb", loading: "lazy", className: "size-full object-cover" }) }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: p.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-6xl lg:text-7xl leading-[0.95] mt-4", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RatingBadge, { rating: p.rating, reviews: p.reviews, size: "md" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3.5", strokeWidth: 1.5 }),
                " ",
                p.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3.5", strokeWidth: 1.5 }),
                " Replies ",
                p.responseTime
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3.5", strokeWidth: 1.5, style: {
                  color: "var(--accent)"
                } }),
                "Verified"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Bio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-foreground/90 max-w-xl", children: p.bio })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-6 border-t border-border pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground", children: "Starts from" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl mt-2", children: [
                "€",
                p.startsFrom.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground", children: "Reviews" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl mt-2", children: p.reviews })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground", children: "Completed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl mt-2", children: Math.floor(p.reviews * 1.2) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-3.5" }),
              " Request collaboration"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-ghost", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-3.5" }),
              " Invite to project"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Portfolio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mt-3", children: "Selected work" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "label-tiny text-muted-foreground", children: [
                p.portfolio.length,
                " pieces"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-2 gap-4 [column-fill:_balance]", children: p.portfolio.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 break-inside-avoid img-zoom bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `Portfolio ${i + 1}`, loading: "lazy", className: "w-full object-cover" }) }, i)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProfilePage as component
};
