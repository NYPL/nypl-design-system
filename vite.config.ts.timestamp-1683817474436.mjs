// vite.config.ts
import react from "file:///Users/edwinguzman/projects/design/nypl-design-system/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///Users/edwinguzman/projects/design/nypl-design-system/node_modules/vite/dist/node/index.js";
import svgr from "file:///Users/edwinguzman/projects/design/nypl-design-system/node_modules/vite-plugin-svgr/dist/index.mjs";
import dts from "file:///Users/edwinguzman/projects/design/nypl-design-system/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/edwinguzman/projects/design/nypl-design-system";
var root = resolve(__vite_injected_original_dirname, "./");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var vite_config_default = defineConfig({
  plugins: [
    // For React support
    react(),
    // For SVG support
    svgr({
      svgrOptions: {
        titleProp: true,
        icon: true
      }
    }),
    // For Typescript support
    dts()
  ],
  root,
  build: {
    outDir,
    // Sets this repo as a library instead of the default "app".
    lib: {
      entry: resolve(root, "src/index.ts"),
      formats: ["es", "cjs"],
      name: "design-system-react-components"
    },
    rollupOptions: {
      external: [
        "react",
        "@chakra-ui/react",
        "@chakra-ui/system",
        "@emotion/react"
      ],
      output: {
        name: "design-system-react-components",
        globals: {
          react: "React",
          "@chakra-ui/react": "ChakraUI",
          "@emotion/react": "Emotion"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css")
            return "styles.css";
          return assetInfo.name || "";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZWR3aW5ndXptYW4vcHJvamVjdHMvZGVzaWduL255cGwtZGVzaWduLXN5c3RlbVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Vkd2luZ3V6bWFuL3Byb2plY3RzL2Rlc2lnbi9ueXBsLWRlc2lnbi1zeXN0ZW0vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Vkd2luZ3V6bWFuL3Byb2plY3RzL2Rlc2lnbi9ueXBsLWRlc2lnbi1zeXN0ZW0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5cbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgXCIuL1wiKTtcbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcImRpc3RcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICAvLyBGb3IgUmVhY3Qgc3VwcG9ydFxuICAgIHJlYWN0KCksXG4gICAgLy8gRm9yIFNWRyBzdXBwb3J0XG4gICAgc3Zncih7XG4gICAgICBzdmdyT3B0aW9uczoge1xuICAgICAgICB0aXRsZVByb3A6IHRydWUsXG4gICAgICAgIGljb246IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIEZvciBUeXBlc2NyaXB0IHN1cHBvcnRcbiAgICBkdHMoKSxcbiAgXSxcbiAgcm9vdCxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXIsXG4gICAgLy8gU2V0cyB0aGlzIHJlcG8gYXMgYSBsaWJyYXJ5IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgXCJhcHBcIi5cbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKHJvb3QsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIl0sXG4gICAgICBuYW1lOiBcImRlc2lnbi1zeXN0ZW0tcmVhY3QtY29tcG9uZW50c1wiLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgXCJyZWFjdFwiLFxuICAgICAgICBcIkBjaGFrcmEtdWkvcmVhY3RcIixcbiAgICAgICAgXCJAY2hha3JhLXVpL3N5c3RlbVwiLFxuICAgICAgICBcIkBlbW90aW9uL3JlYWN0XCIsXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG5hbWU6IFwiZGVzaWduLXN5c3RlbS1yZWFjdC1jb21wb25lbnRzXCIsXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgIFwiQGNoYWtyYS11aS9yZWFjdFwiOiBcIkNoYWtyYVVJXCIsXG4gICAgICAgICAgXCJAZW1vdGlvbi9yZWFjdFwiOiBcIkVtb3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09IFwic3R5bGUuY3NzXCIpIHJldHVybiBcInN0eWxlcy5jc3NcIjtcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgfHwgXCJcIjtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixPQUFPLFdBQVc7QUFDblcsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxPQUFPLFFBQVEsa0NBQVcsSUFBSTtBQUNwQyxJQUFNLFNBQVMsUUFBUSxrQ0FBVyxNQUFNO0FBRXhDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQTtBQUFBLElBRVAsTUFBTTtBQUFBO0FBQUEsSUFFTixLQUFLO0FBQUEsTUFDSCxhQUFhO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFFRCxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0E7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxNQUFNLGNBQWM7QUFBQSxNQUNuQyxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1Asb0JBQW9CO0FBQUEsVUFDcEIsa0JBQWtCO0FBQUEsUUFDcEI7QUFBQSxRQUNBLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLFNBQVM7QUFBYSxtQkFBTztBQUMzQyxpQkFBTyxVQUFVLFFBQVE7QUFBQSxRQUMzQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
