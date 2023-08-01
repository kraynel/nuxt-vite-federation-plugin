import { defineNuxtConfig } from "nuxt/config";
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  telemetry: false,
  vite: {
    plugins: [
      federation({
        name: "module-name",
        filename: "remoteEntry.js",
        remotes: {
          navbar: "http://localhost:5001/assets/remoteEntry.js",
        },
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "assets/[name].js",
          minifyInternalExports: false,
        },
      },
    },
  },
});
