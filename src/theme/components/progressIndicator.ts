import {
  ProgressIndicatorLabelPlacements,
  ProgressIndicatorSizes,
} from "../../components/ProgressIndicator/ProgressIndicator";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

interface ProgressIndicatorBaseStyle extends StyleFunctionProps {
  size: ProgressIndicatorSizes;
  labelPlacement: ProgressIndicatorLabelPlacements;
  showLabel?: boolean;
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
    ({ size, labelPlacement, showLabel }: ProgressIndicatorBaseStyle) => {
      return {
        color: "v5.text.label",
        circular: {
          // Note: we have to target the SVG HTMl elements in order
          // to override the default styles.
          svg: {
            height: size === "default" ? "48px" : "24px",
            width: size === "default" ? "48px" : "24px",
            display: "block",
            circle: {
              _first: {
                stroke: "v5.progressIndicator.track",
              },
              _last: {
                stroke: "v5.progressIndicator.indicator",
              },
            },
          },
        },
        circularContainer: {
          alignItems: "center",
          display: "flex",
          flexDirection: getCircularContainerFlexDir(labelPlacement),
          gap: `v5.progressIndicator.circular.gap.${
            size === "default" ? "default" : "sm"
          }.${
            labelPlacement === "left" || labelPlacement === "right"
              ? "row"
              : "column"
          }`,
          width: "fit-content",
        },
        circularLabel: {
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
            bg: "v5.progressIndicator.indicator",
          },
          flex: 25,
          bg: "v5.border.subtle.neutral.emphasis",
          height: {
            base: "v5.progressIndicator.linear.trackHeight.sm",
            md:
              size === "default"
                ? "v5.progressIndicator.linear.trackHeight.default"
                : "v5.progressIndicator.linear.trackHeight.sm",
          },
        },
        linearContainer: {
          display: "flex",
          alignItems: "center",
          gap: "v5.progressIndicator.linear.gap",
          height: showLabel
            ? "v5.progressIndicator.linear.containerHeight"
            : undefined,
        },
        linearLabel: {
          color: "v5.text.label",
          fontSize: "v5.label.primary",
          lineHeight: "v5.label.primary",
          fontWeight: "v5.label.primary",
        },
        linearPercentage: {
          flex: 1,
          lineHeight: "v5.progressIndicator.percentage.linear",
          fontSize: "v5.progressIndicator.percentage.linear",
        },
      };
    }
  ),
});

export default ProgressIndicator;
