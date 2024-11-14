import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      "01-app": "/src/01-app",
      "05-features": "/src/05-features",
      "06-entities": "/src/06-entities",
      "07-shared": "/src/07-shared",
    },
  },
});
