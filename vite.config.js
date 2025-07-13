import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import path from "path"

export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    build: {
        outDir: path.resolve(__dirname, "build"),
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks: undefined,
                inlineDynamicImports: true
            }
        }
    },
    plugins: [svelte()]
})
