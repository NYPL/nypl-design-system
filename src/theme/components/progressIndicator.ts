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
    "circularPercentage",
    "linear",
    "linearContainer",
    "linearLabel",
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
      return {
        color: "v5.text.label",
        fontSize: "v5.progressIndicator.percentage.linear",
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
          marginBottom: labelPlacement === "top" ? "xxs" : 0,
          marginLeft: labelPlacement === "right" ? "xxs" : 0,
          marginRight: labelPlacement === "left" ? "xxs" : 0,
          marginTop: labelPlacement === "bottom" ? "xxs" : 0,
          color: "v5.text.label",
          fontSize:
            size === "default" ? "v5.label.primary" : "v5.label.secondary",
          fontWeight:
            size === "default" ? "v5.label.primary" : "v5.label.secondary",
          lineHeight:
            size === "default" ? "v5.label.primary" : "v5.label.secondary",
        },
        circularPercentage: {
          fontSize: "v5.progressIndicator.percentage.circular",
          lineHeight: "v5.progressIndicator.percentage.circular",
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
          height: "20px",
        },
        linearLabel: {
          color: "v5.text.label",
          fontSize: "v5.label.primary",
          lineHeight: "v5.label.primary",
          fontWeight: "v5.label.primary",
        },
        linearPercentage: {
          padding: "0 var(--nypl-space-xs)",
          flex: 1,
          lineHeight: "v5.progressIndicator.percentage.linear",
        },
      };
    }
  ),
});

export default ProgressIndicator;
