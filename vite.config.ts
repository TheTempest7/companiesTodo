import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // src: "/src",
      "01-app": "/src/01-app",
      "06-entities": "/src/06-entities",
      "07-shared": "/src/07-shared",
    },
  },
});
