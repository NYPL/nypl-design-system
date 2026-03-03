import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle, StyleFunctionProps } from "@chakra-ui/system";
import { iconSizeStyles } from "../sharedStyles";

const svgBase: {
  display: string;
  fill: string;
  width: string;
  height: string;
} = {
  display: "inline-block",
  fill: "currentColor",
  width: "auto",
  height: "100%",
};

const align: Record<string, { marginEnd?: string; marginStart?: string }> = {
  none: {},
  left: { marginEnd: "xxs" },
  right: { marginStart: "xxs" },
};

const iconRotation: Record<string, { transform: string }> = {
  rotate180: {
    transform: "rotate(180deg)",
  },
  rotate270: {
    transform: "rotate(270deg)",
  },
  rotate0: {
    transform: "rotate(0deg)",
  },
  rotate90: {
    transform: "rotate(90deg)",
  },
};

interface IconBaseStyle extends StyleFunctionProps {
  align: keyof typeof align;
  color: string;
  hasChildSVG: boolean;
  iconRotation: keyof typeof iconRotation;
  size: keyof typeof iconSizeStyles;
}

const Icon = defineStyleConfig({
  baseStyle: defineStyle((props: IconBaseStyle) => {
    const allStyles = {
      ...svgBase,
      ...align[props.align],
      fill: props.color,
      ...iconRotation[props.iconRotation],
      ...iconSizeStyles[props.size],
    };

    return {
      // Apply styles to the root element if a custom svg is not passed
      ...(!props.hasChildSVG ? allStyles : {}),

      // Apply styles to a child svg element
      svg: {
        ...allStyles,
      },
    };
  }),
  variants: {
    default: {},
    breadcrumbs: defineStyle({
      fill: "var(--nypl-colors-ui-white)",
      display: { md: "none" },
    }),
  },
});

export default Icon;
