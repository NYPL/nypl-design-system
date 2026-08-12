import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

const root = resolve(__dirname, "./");
const outDir = resolve(__dirname, "dist");
const externalPackages = [
  /^react($|\/)/,
  /^react-dom($|\/)/,
  /^@chakra-ui\//,
  /^@emotion\//,
  /^framer-motion($|\/)/,
  /^react-datepicker($|\/)/,
  /^react-popper($|\/)/,
  /^@popperjs\//,
];

export default defineConfig({
  plugins: [
    // For React support
    react(),
    // For SVG support
    svgr({
      svgrOptions: {
        titleProp: true,
        // icon: true,
      },
      include: "**/*.svg",
    }),
    // For Typescript support
    dts({ outDir: "dist/src" }),
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
      // Keep React and peer deps external, including deep imports like react/jsx-runtime.
      external: (id) => externalPackages.some((pattern) => pattern.test(id)),
      output: {
        name: "design-system-react-components",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@chakra-ui/react": "ChakraUI",
          "@chakra-ui/system": "ChakraSystem",
          "@emotion/react": "Emotion",
          "@emotion/styled": "EmotionStyled",
          "framer-motion": "FramerMotion",
          "react-datepicker": "ReactDatePicker",
          "react-popper": "ReactPopper",
          "@popperjs/core": "Popper",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "design-system-react-components.css")
            return "styles.css";
          return assetInfo.name || "";
        },
      },
    },
  },
});
