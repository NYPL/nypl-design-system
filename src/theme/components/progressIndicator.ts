import { ProgressIndicatorSizes } from "../../components/ProgressIndicator/ProgressIndicator";

interface ProgressIndicatorBaseStyle {
  // darkMode is a deprecated prop. It remains here so as not to
  // cause a breaking change for those apps that still use it.
  darkMode: boolean;
  size: ProgressIndicatorSizes;
}

const ProgressIndicator = {
  parts: [
    "circular",
    "circularLabel",
    "linear",
    "linearContainer",
    "linearPercentage",
  ],
  baseStyle: ({ darkMode, size }: ProgressIndicatorBaseStyle) => {
    return {
      color: darkMode ? "dark.ui.typography.heading" : "ui.typography.heading",
      fontSize: "desktop.body.body2",
      _dark: {
        color: "dark.ui.typography.heading",
      },
      circular: {
        // Note: we have to target the SVG HTMl elements in order
        // to override the default styles.
        svg: {
          height: size === "default" ? "48px" : "24px",
          width: size === "default" ? "48px" : "24px",
          display: "block",
          circle: {
            _first: {
              stroke: darkMode ? "ui.gray.dark" : "ui.gray.light-cool",
              _dark: {
                stroke: "dark.ui.bg.hover",
              },
            },
            _last: {
              stroke: darkMode ? "ui.white" : "ui.link.primary",
              _dark: { stroke: "dark.ui.link.primary" },
            },
          },
        },
      },
      circularContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      },
      linear: {
        // Hard to target this specific element without using
        // "Progress" as the key name in index.ts
        "> div": {
          bg: darkMode ? "ui.white" : "ui.link.primary",
          _dark: {
            bg: "dark.ui.link.primary",
          },
        },
        flex: 25,
        bg: darkMode ? "ui.gray.dark" : "ui.gray.light-cool",
        height: {
          base: "4px",
          md: size === "default" ? "8px" : "4px",
        },
        _dark: {
          bg: "dark.ui.bg.hover",
          color: "dark.ui.typography.heading",
        },
      },
      linearContainer: {
        display: "flex",
        alignItems: "center",
      },
      linearPercentage: {
        padding: "0 var(--nypl-space-xs)",
        flex: 1,
      },
    };
  },
};

export default ProgressIndicator;
