import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".css",
      ".scss",
      ".less",
      ".png",
      ".jpg",
      ".gif",
      ".svg",
      ".mp4",
      ".webm",
      ".woff",
      ".woff2",
    ],
  },
});
