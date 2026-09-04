// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env["GITHUB_PAGES"] === "true";
// GitHub Pages project sites are served from /<repo>/; configure-pages sets BASE_PATH in CI.
const base = process.env["BASE_PATH"] || "/";
const basepath = base.replace(/\/$/, "") || "/";

export default defineConfig({
  vite: {
    base,
    build: {
      outDir: "dist",
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    router: {
      basepath,
    },
    // Nitro's github-pages/static preset crashes this Nitro 3 beta (HTML used as an SSR
    // entry). GitHub Pages gets a client-only shell instead; Lovable keeps Cloudflare SSR.
    ...(isGitHubPages
      ? {
          spa: {
            enabled: true,
            prerender: {
              outputPath: "/index.html",
              crawlLinks: true,
              retryCount: 3,
            },
          },
        }
      : {}),
  },
  ...(isGitHubPages ? { nitro: false as const } : {}),
});
