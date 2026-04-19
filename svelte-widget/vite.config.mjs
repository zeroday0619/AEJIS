import path from "node:path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  publicDir: false,
  build: {
    emptyOutDir: false,
    outDir: path.resolve(__dirname, "../public/svelte"),
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: () => "certificate-preview.js",
      formats: ["es"],
    },
  },
});
