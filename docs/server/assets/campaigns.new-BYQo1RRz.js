import { r as reactExports, V as jsxRuntimeExports } from "./server-B4kp0_TF.js";
import { c as createLucideIcon, S as SiteHeader } from "./SiteHeader-npx5tSz-.js";
import { S as SiteFooter } from "./SiteFooter-sr1OXAVD.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-SgH2OmHM.js";
const __iconNode$2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const STEPS = ["Brief", "Roles", "Moodboard", "Review"];
function NewCampaign() {
  const [step, setStep] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 mx-auto max-w-[1280px] px-6 lg:px-12 py-16 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Campaign builder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl md:text-8xl mt-3 leading-[0.9]", children: "Brief a project." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex items-center justify-center gap-3 md:gap-5 mb-16", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStep(i), className: "flex items-center gap-3 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-8 rounded-full border flex items-center justify-center text-xs tabular-nums", style: {
            background: i <= step ? "var(--foreground)" : "transparent",
            color: i <= step ? "var(--background)" : "var(--muted-foreground)",
            borderColor: i <= step ? "var(--foreground)" : "var(--border)"
          }, children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-tiny", style: {
            color: i === step ? "var(--foreground)" : "var(--muted-foreground)"
          }, children: s })
        ] }),
        i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-border" })
      ] }, s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "lg:col-span-8 space-y-10", children: [
          step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(BriefStep, {}),
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(RolesStep, {}),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(MoodboardStep, {}),
          step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStep, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 lg:sticky lg:top-28 self-start border border-border p-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Project", v: "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Budget", v: "€8,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Dates", v: "Apr 12 → Apr 18" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Roles", v: "Photographer · Model" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Location", v: "Milan" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stitch-line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep(Math.max(0, step - 1)), className: "btn-ghost flex-1 !py-2.5", children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep(Math.min(STEPS.length - 1, step + 1)), className: "btn-primary flex-1 !py-2.5", children: step === STEPS.length - 1 ? "Publish" : "Continue" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Row({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-tiny text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: v })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-eyebrow block mb-3", children: label }),
    children
  ] });
}
const inputCls = "w-full bg-transparent border-b border-foreground/40 focus:border-foreground outline-none py-3 text-base placeholder:text-muted-foreground/70 transition-colors";
function BriefStep() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10 fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Project name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, placeholder: "e.g. SS27 — Linen Story" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Budget (€)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, type: "number", placeholder: "8000" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Location", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, placeholder: "Milan, IT" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Start date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, type: "date" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "End date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, type: "date" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Concept", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: inputCls + " resize-none", rows: 4, placeholder: "Tell us about the world, mood and intention…" }) })
  ] });
}
function RolesStep() {
  const roles = ["Photographer", "Model", "Stylist", "MUA", "Influencer", "Location scout"];
  const [picked, setPicked] = reactExports.useState(["Photographer", "Model"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Required roles", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mt-2", children: roles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "data-active": picked.includes(r), className: "filter-pill", onClick: () => setPicked((p) => p.includes(r) ? p.filter((x) => x !== r) : [...p, r]), children: r }, r)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Experience level", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputCls, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Editorial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Established" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Emerging" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Availability window", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputCls, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Within 48 hours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Within a week" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Flexible" })
      ] }) })
    ] })
  ] });
}
function MoodboardStep() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Visual references", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-dashed border-foreground/40 rounded-sm p-10 text-center hover:border-foreground transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-6 mx-auto mb-4 text-muted-foreground", strokeWidth: 1.25 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Drag images, paste Pinterest links, or browse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground mt-2", children: "PNG · JPG · up to 20 MB" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-5 gap-3", children: Array.from({
      length: 10
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "size-5 text-muted-foreground", strokeWidth: 1.25 }) }, i)) })
  ] });
}
function ReviewStep() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl", children: "Ready to publish." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-lg", children: "Once published, your brief is shared with matched creatives. You'll receive proposals within hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-foreground p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Visibility" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl mt-3", children: "Curated network — invite-only." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3", children: "We surface your brief to matching profiles and notify our editors." })
    ] })
  ] });
}
export {
  NewCampaign as component
};
