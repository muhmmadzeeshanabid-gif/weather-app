import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "lucide-react": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "node_modules/lucide-react/dist/esm/lucide-react.js"
      ),
    },
  },
  optimizeDeps: {
    include: ["lucide-react"],
  },
});
