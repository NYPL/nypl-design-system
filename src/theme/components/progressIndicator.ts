import {
  ProgressIndicatorLabelPlacements,
  ProgressIndicatorSizes,
} from "../../components/ProgressIndicator/ProgressIndicator";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

interface ProgressIndicatorBaseStyle extends StyleFunctionProps {
  size: ProgressIndicatorSizes;
  labelPlacement: ProgressIndicatorLabelPlacements;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "circular",
    "circularLabel",
    "linear",
    "linearContainer",
    "linearPercentage",
  ]);

const getCircularContainerFlexDir = (labelPlacement) => {
  let flexDir;
  switch (labelPlacement) {
    case "bottom":
    default: {
      flexDir = "column";
      break;
    }
    case "left": {
      flexDir = "row-reverse";
      break;
    }
    case "right": {
      flexDir = "row";
      break;
    }
    case "top": {
      flexDir = "column-reverse";
      break;
    }
  }
  return flexDir;
};

const ProgressIndicator = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ size, labelPlacement }: ProgressIndicatorBaseStyle) => {
      const circularLabelMargin = size === "default" ? "xs" : "xxs";
      return {
        color: "ui.typography.heading",
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
                stroke: "ui.gray.light-cool",
                _dark: {
                  stroke: "dark.ui.bg.hover",
                },
              },
              _last: {
                stroke: "ui.link.primary",
                _dark: { stroke: "dark.ui.link.primary" },
              },
            },
          },
        },
        circularContainer: {
          alignItems: "center",
          display: "flex",
          flexDirection: getCircularContainerFlexDir(labelPlacement),
          width: "fit-content",
        },
        circularLabel: {
          marginBottom: labelPlacement === "top" ? circularLabelMargin : 0,
          marginLeft: labelPlacement === "right" ? circularLabelMargin : 0,
          marginRight: labelPlacement === "left" ? circularLabelMargin : 0,
          marginTop: labelPlacement === "bottom" ? circularLabelMargin : 0,
          fontSize:
            size === "default"
              ? "desktop.label.label1"
              : "desktop.label.label2",
        },
        linear: {
          // Hard to target this specific element without using
          // "Progress" as the key name in index.ts
          "> div": {
            bg: "ui.link.primary",
            _dark: {
              bg: "dark.ui.link.primary",
            },
          },
          flex: 25,
          bg: "ui.gray.light-cool",
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
    }
  ),
});

export default ProgressIndicator;
