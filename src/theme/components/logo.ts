import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle, StyleFunctionProps } from "@chakra-ui/system";

const svgBase = (sizeBasedOn: "height" | "width") => {
  return {
    display: "inline-block",
    height: sizeBasedOn === "width" ? "auto" : "100%",
    width: sizeBasedOn === "width" ? "100%" : "auto",
  };
};

const size = {
  sm: {
    maxWidth: "v5.logo.sm",
  },
  md: {
    maxWidth: "v5.logo.md",
  },
  lg: {
    maxWidth: "v5.logo.lg",
  },
  xl: {
    maxWidth: "v5.logo.xl",
  },
  "2xl": {
    maxWidth: "v5.logo.2xl",
  },
  "3xl": {
    maxWidth: "v5.logo.3xl",
  },
};
const sizeBasedOnHeight = {
  sm: {
    maxHeight: "v5.logo.sm",
  },
  md: {
    maxHeight: "v5.logo.md",
  },
  lg: {
    maxHeight: "v5.logo.lg",
  },
  xl: {
    maxHeight: "v5.logo.xl",
  },
  "2xl": {
    maxHeight: "v5.logo.2xl",
  },
  "3xl": {
    maxHeight: "v5.logo.3xl",
  },
};

interface LogoBaseStyle extends StyleFunctionProps {
  size: keyof typeof size | keyof typeof sizeBasedOnHeight;
  sizeBasedOn: "height" | "width";
}

const Logo = defineStyleConfig({
  baseStyle: defineStyle((props: LogoBaseStyle) => {
    const allStyles = {
      ...svgBase(props.sizeBasedOn),
      ...(props.sizeBasedOn === "width"
        ? size[props.size]
        : sizeBasedOnHeight[props.size]),
    };
    return {
      ...allStyles,
      // We still want to style any custom SVG element that was
      // passed to the `Logo` component.
      svg: {
        ...allStyles,
      },
    };
  }),
});

export default Logo;
