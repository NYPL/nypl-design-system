import { ProgressIndicatorSizes } from "../../components/ProgressIndicator/ProgressIndicatorTypes";

const ProgressIndicator = {
  parts: [
    "circular",
    "circularLabel",
    "linear",
    "linearContainer",
    "linearPercentage",
  ],
  baseStyle: ({ darkMode, size }) => {
    return {
      color: darkMode ? "ui.white" : "ui.black",
      circular: {
        // Note: we have to target the SVG HTMl elements in order
        // to override the default styles.
        svg: {
          height: size === ProgressIndicatorSizes.Small ? "24px" : "48px",
          width: size === ProgressIndicatorSizes.Small ? "24px" : "48px",
          display: "block",
          circle: {
            _first: {
              stroke: darkMode ? "ui.gray.dark" : "ui.gray.light-cool",
            },
            _last: {
              stroke: darkMode ? "ui.white" : "ui.link.primary",
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
        },
        flex: 25,
        bg: darkMode ? "ui.gray.dark" : "ui.gray.light-cool",
        height: {
          base: "4px",
          md: size === ProgressIndicatorSizes.Small ? "4px" : "8px",
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
