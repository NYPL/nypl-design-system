import { ProgressIndicatorSizes } from "../../components/ProgressIndicator/ProgressIndicator";

interface ProgressIndicatorBaseStyle {
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
  baseStyle: ({ size }: ProgressIndicatorBaseStyle) => {
    return {
      color: "ui.black",
      circular: {
        // Note: we have to target the SVG HTMl elements in order
        // to override the default styles.
        svg: {
          height: size === "default" ? "48px" : "24px",
          width: size === "default" ? "48px" : "24px",
          display: "block",
          circle: {
            _first: {
              stroke: "ui.gray.light-cool",
              _dark: {
                stroke: "dark.ui.bg.active",
              },
            },
            _last: {
              stroke: "ui.link.primary",
              _dark: { stroke: "dark.ui.focus" },
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
          bg: "ui.link.primary",
          _dark: "dark.ui.focus",
        },
        flex: 25,
        bg: "ui.gray.light-cool",
        height: {
          base: "4px",
          md: size === "default" ? "8px" : "4px",
        },
        _dark: {
          bg: "dark.ui.bg.active",
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
      _dark: {
        color: "dark.ui.typography.heading",
      },
    };
  },
};

export default ProgressIndicator;
