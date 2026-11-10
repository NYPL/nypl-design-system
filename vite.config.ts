import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

const root = resolve(import.meta.dirname, "./");
const outDir = resolve(import.meta.dirname, "dist");
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
        // Rollup's default CJS `interop` mode ("default") emits a bare
        // `require("externalPkg")` for default imports of externalized CJS
        // dependencies, binding the import directly to the whole
        // `module.exports` object instead of unwrapping `.default`. For
        // dependencies like `react-datepicker`, which set
        // `exports.__esModule = true` and `exports.default = Component`,
        // this produces "Element type is invalid" errors at runtime (e.g.
        // under SSR or any CJS `require()` consumer). "auto" inspects the
        // required module's `__esModule` flag and unwraps `.default`
        // correctly in that case, matching the behavior consumers expect
        // from their own bundlers/Babel/TypeScript output. This only
        // affects the CJS output; the ESM output's `import` statements are
        // left untouched by `interop` either way.
        interop: "auto",
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
