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
        fontSize: "v5.label.primary",
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
              },
              _last: {
                stroke: "v5.brand.nyplred.default",
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
          fontSize: "v5.label.primary",
        },
        linear: {
          // Hard to target this specific element without using
          // "Progress" as the key name in index.ts
          borderRadius: "v5.round",
          "> div": {
            bg: "v5.brand.nyplred.default",
          },
          flex: 25,
          bg: "ui.gray.light-cool",
          height: {
            base: "4px",
            md: size === "default" ? "8px" : "4px",
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
