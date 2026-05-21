import { r as reactExports, V as jsxRuntimeExports } from "./server-DapvtGDP.js";
import { c as createLucideIcon, S as SiteHeader } from "./SiteHeader-T0p6MEEH.js";
import { S as SiteFooter } from "./SiteFooter-BYPJVZER.js";
import { P as ProfileCard } from "./ProfileCard-BJI9MSLs.js";
import { p as professionals } from "./router-FRC8J7-H.js";
import { S as Search } from "./search-yywYEhlJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./RatingBadge-DsQF-FdA.js";
const __iconNode = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const ROLES = ["All", "Photographer", "Model", "Stylist", "Makeup Artist", "Influencer"];
const LOCATIONS = ["Anywhere", "Antwerp", "Brussels", "Ghent", "Leuven"];
function Marketplace() {
  const [q, setQ] = reactExports.useState("");
  const [role, setRole] = reactExports.useState("All");
  const [loc, setLoc] = reactExports.useState("Anywhere");
  const [only48, setOnly48] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => {
    return professionals.filter((p) => {
      if (role !== "All" && p.role !== role) return false;
      if (loc !== "Anywhere" && !p.location.toLowerCase().includes(loc.toLowerCase())) return false;
      if (only48 && !p.available48h) return false;
      if (q && !`${p.name} ${p.role} ${p.location}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, role, loc, only48]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1440px] px-6 lg:px-12 pt-20 pb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "The Marketplace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl md:text-9xl mt-5 leading-[0.9]", children: "I'm a brand." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl mx-auto text-muted-foreground", children: "Cast a complete creative team in an afternoon. Verified talent, transparent pricing, response in hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-10 max-w-2xl mx-auto editorial-search", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by name, role or location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary !py-2.5 !px-5", type: "submit", children: "Search" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-12 py-5 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "label-eyebrow flex items-center gap-2 mr-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "size-3" }),
          " Filters"
        ] }),
        ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "filter-pill", "data-active": role === r, onClick: () => setRole(r), children: r }, r)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 h-4 w-px bg-border" }),
        LOCATIONS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "filter-pill", "data-active": loc === l, onClick: () => setLoc(l), children: l }, l)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 h-4 w-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "filter-pill", "data-active": only48, onClick: () => setOnly48((v) => !v), children: "Available · 48h" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1440px] px-6 lg:px-12 py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "label-eyebrow", children: [
            filtered.length,
            " results"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Sorted — Editorial pick" })
        ] }),
        filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-32 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl", children: "Nothing matches — yet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "Try widening your filters." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCard, { p }, p.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Marketplace as component
};
