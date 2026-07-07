import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import babel from "@rolldown/plugin-babel"; { reactCompilerPreset }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
});
