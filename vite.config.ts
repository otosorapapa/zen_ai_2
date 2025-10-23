import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = process.env.VITE_BASE_PATH ?? "/public/lp/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        src: path.resolve(__dirname, "./src"),
      },
    },
    build: {
      manifest: "manifest.json",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: ({ name }) => {
            if (!name) return "assets/asset-[hash][extname]";
            const cleaned = name.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "asset";
            return `assets/${cleaned}-[hash][extname]`;
          },
        },
      },
    },
  };
});
