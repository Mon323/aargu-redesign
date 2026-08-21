// @lovable.dev/vite-tanstack-config bundles: tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro, VITE_* env injection, @ path alias and React/TanStack dedupe.
// Do NOT add those plugins manually — duplicate plugins will break the build.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
