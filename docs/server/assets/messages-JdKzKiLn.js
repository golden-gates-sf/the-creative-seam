import { r as reactExports, V as jsxRuntimeExports } from "./server-ClCjDNPA.js";
import { c as createLucideIcon, S as SiteHeader } from "./SiteHeader-DczoZzCP.js";
import { p as professionals } from "./router-4htcfaAV.js";
import { S as Search } from "./search-DWxWc2Vf.js";
import { S as Send } from "./send-DQxhI09f.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
];
const Paperclip = createLucideIcon("paperclip", __iconNode);
const conversations = professionals.map((p, i) => ({
  ...p,
  last: ["Sounds great — sending availability now.", "Attaching the test shots from yesterday.", "Confirmed for Tuesday's call.", "Let's review the mood once more.", "Yes, the studio is booked.", "Final files coming through tonight."][i % 6],
  time: ["2h", "5h", "1d", "1d", "2d", "3d"][i % 6],
  unread: i < 2
}));
function Messages() {
  const [active, setActive] = reactExports.useState(conversations[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 grid md:grid-cols-[360px_1fr] border-t border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "border-r border-border flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow", children: "Inbox" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editorial-search mt-3 !py-2 !pl-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex-1 overflow-y-auto", children: conversations.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(c), className: "w-full text-left p-5 border-b border-border flex gap-4 items-start hover:bg-secondary/50 transition", style: {
          background: active.id === c.id ? "var(--secondary)" : void 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full overflow-hidden bg-secondary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, className: "size-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-tiny text-muted-foreground shrink-0", children: c.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-tiny text-muted-foreground mt-0.5", children: c.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 line-clamp-1", children: c.last })
          ] }),
          c.unread && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-accent mt-2" })
        ] }) }, c.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "p-5 border-b border-border flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: active.image, alt: active.name, className: "size-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: active.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "label-tiny text-muted-foreground", children: [
                active.role,
                " · ",
                active.location
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ghost !py-2 !px-4", children: "View profile" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-8 space-y-6 bg-secondary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { who: "them", text: "Hi — saw your brief for the SS27 linen story. The references look beautiful." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { who: "me", text: "Thank you. We'd love to work with you. Are you available the week of the 12th?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { who: "them", text: active.last }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { who: "me", text: "Sending the production deck across now — let me know what you think." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "p-5 border-t border-border flex items-center gap-3", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-2 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "flex-1 bg-transparent outline-none text-sm py-2", placeholder: "Write a message…" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-primary !py-2.5 !px-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-3.5" }),
            " Send"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Bubble({
  who,
  text
}) {
  const isMe = who === "me";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isMe ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md px-5 py-3 text-sm leading-relaxed", style: {
    background: isMe ? "var(--foreground)" : "var(--background)",
    color: isMe ? "var(--background)" : "var(--foreground)",
    border: isMe ? "none" : "1px solid var(--border)"
  }, children: text }) });
}
export {
  Messages as component
};
