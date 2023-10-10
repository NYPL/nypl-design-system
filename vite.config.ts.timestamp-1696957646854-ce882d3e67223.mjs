// vite.config.ts
import react from "file:///Users/emilymansell/Documents/nypl-design-system/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///Users/emilymansell/Documents/nypl-design-system/node_modules/vite/dist/node/index.js";
import svgr from "file:///Users/emilymansell/Documents/nypl-design-system/node_modules/vite-plugin-svgr/dist/index.mjs";
import dts from "file:///Users/emilymansell/Documents/nypl-design-system/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/emilymansell/Documents/nypl-design-system";
var root = resolve(__vite_injected_original_dirname, "./");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var vite_config_default = defineConfig({
  plugins: [
    // For React support
    react(),
    // For SVG support
    svgr({
      svgrOptions: {
        titleProp: true
        // icon: true,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZW1pbHltYW5zZWxsL0RvY3VtZW50cy9ueXBsLWRlc2lnbi1zeXN0ZW1cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9lbWlseW1hbnNlbGwvRG9jdW1lbnRzL255cGwtZGVzaWduLXN5c3RlbS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZW1pbHltYW5zZWxsL0RvY3VtZW50cy9ueXBsLWRlc2lnbi1zeXN0ZW0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5cbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgXCIuL1wiKTtcbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcImRpc3RcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICAvLyBGb3IgUmVhY3Qgc3VwcG9ydFxuICAgIHJlYWN0KCksXG4gICAgLy8gRm9yIFNWRyBzdXBwb3J0XG4gICAgc3Zncih7XG4gICAgICBzdmdyT3B0aW9uczoge1xuICAgICAgICB0aXRsZVByb3A6IHRydWUsXG4gICAgICAgIC8vIGljb246IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIEZvciBUeXBlc2NyaXB0IHN1cHBvcnRcbiAgICBkdHMoKSxcbiAgXSxcbiAgcm9vdCxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXIsXG4gICAgLy8gU2V0cyB0aGlzIHJlcG8gYXMgYSBsaWJyYXJ5IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgXCJhcHBcIi5cbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKHJvb3QsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIl0sXG4gICAgICBuYW1lOiBcImRlc2lnbi1zeXN0ZW0tcmVhY3QtY29tcG9uZW50c1wiLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgXCJyZWFjdFwiLFxuICAgICAgICBcIkBjaGFrcmEtdWkvcmVhY3RcIixcbiAgICAgICAgXCJAY2hha3JhLXVpL3N5c3RlbVwiLFxuICAgICAgICBcIkBlbW90aW9uL3JlYWN0XCIsXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG5hbWU6IFwiZGVzaWduLXN5c3RlbS1yZWFjdC1jb21wb25lbnRzXCIsXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgIFwiQGNoYWtyYS11aS9yZWFjdFwiOiBcIkNoYWtyYVVJXCIsXG4gICAgICAgICAgXCJAZW1vdGlvbi9yZWFjdFwiOiBcIkVtb3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09IFwic3R5bGUuY3NzXCIpIHJldHVybiBcInN0eWxlcy5jc3NcIjtcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgfHwgXCJcIjtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVSxPQUFPLFdBQVc7QUFDcFYsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxPQUFPLFFBQVEsa0NBQVcsSUFBSTtBQUNwQyxJQUFNLFNBQVMsUUFBUSxrQ0FBVyxNQUFNO0FBRXhDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQTtBQUFBLElBRVAsTUFBTTtBQUFBO0FBQUEsSUFFTixLQUFLO0FBQUEsTUFDSCxhQUFhO0FBQUEsUUFDWCxXQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUVELElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQTtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0w7QUFBQTtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLE1BQU0sY0FBYztBQUFBLE1BQ25DLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxvQkFBb0I7QUFBQSxVQUNwQixrQkFBa0I7QUFBQSxRQUNwQjtBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUztBQUFhLG1CQUFPO0FBQzNDLGlCQUFPLFVBQVUsUUFBUTtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
