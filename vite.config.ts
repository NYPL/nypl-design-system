import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

const root = resolve(__dirname, "./");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  plugins: [
    // For React support
    react(),
    // For SVG support
    svgr({
      svgrOptions: {
        titleProp: true,
      },
    }),
    // For Typescript support
    dts(),
  ],
  root,
  build: {
    outDir,
    // Sets this repo as a library instead of the default "app".
    lib: {
      entry: resolve(root, "src/index.ts"),
      formats: ["es", "cjs"],
      name: "design-system-react-components",
    },
    rollupOptions: {
      external: [
        "react",
        "@chakra-ui/react",
        "@chakra-ui/system",
        "@emotion/react",
      ],
      output: {
        name: "design-system-react-components",
        globals: {
          react: "React",
          "@chakra-ui/react": "ChakraUI",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "styles.css";
          return assetInfo.name;
        },
      },
    },
  },
});
