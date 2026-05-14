// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import react from '@vitejs/plugin-react'

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  plugins: [react()],
  // GitHub Project Pages URL is /<repo-name>/; must match the GitHub repo slug exactly.
  vite: {
    base: "/the-creative-seam/",
    // @cloudflare/vite-plugin emits the worker entry as `index.js`; TanStack Start's
    // prerender preview step loads `${serverOutDir}/server.js` when it cannot read a string `input`.
    environments: {
      ssr: {
        build: {
          rollupOptions: {
            output: { entryFileNames: "server.js" },
          },
        },
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    // Match `createRouter({ basepath })` so prerender + assets use the same base as GitHub Project Pages.
    router: { basepath: "/the-creative-seam" },
    // TanStack Start does not emit static HTML unless prerender runs (SSR is the default).
    prerender: { enabled: true },
  },
});
