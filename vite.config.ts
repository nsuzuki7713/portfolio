import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  server: {
    port: 8000,
    open: "index.html",
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "src/main.ts",
      },
    },
  },
});
