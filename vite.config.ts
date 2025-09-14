import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ignoreDts = () => ({
  name: "ignore-dts",
  enforce: "pre" as const,
  resolveId(id) {
    if (id.endsWith(".d.ts")) return id; // claim it
  },
  load(id) {
    if (id.endsWith(".d.ts")) return "export {}"; // empty module
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/gcode-viewer/" : "/",
  plugins: [react(), ignoreDts()],
  server: {
    port: 3000,
    open: false,

    watch: {
      ignored: ["node_modules", "output"],
    },
  },
});
