import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

const root = resolve(__dirname, "./");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        titleProp: true,
      },
    }),
    dts(),
  ],
  root,
  build: {
    outDir,
    lib: {
      entry: resolve(root, "src/index.ts"),
      formats: ["es", "cjs"],
      name: "design-system-react-components",
    },
    rollupOptions: {
      external: ["react", "@chakra-ui/react", "@chakra-ui/system"],
      output: {
        name: "design-system-react-components",
        dir: outDir,
        globals: {
          react: "React",
          "@chakra-ui/react": "ChakraUI",
        },
      },
    },
  },
});
