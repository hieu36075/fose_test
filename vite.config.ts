import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        exportType: "named",
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: { "@": path.resolve("./src") },
  },
});
