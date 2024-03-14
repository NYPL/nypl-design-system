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
  default: {
    maxWidth: "100%",
  },
  xxsmall: {
    maxWidth: "64px",
  },
  xsmall: {
    maxWidth: "96px",
  },
  small: {
    maxWidth: "165px",
  },
  medium: {
    maxWidth: "225px",
  },
  large: {
    maxWidth: "360px",
  },
  xlarge: {
    maxWidth: "360px",
  },
  xxlarge: {
    height: "var(--nypl-space-xl)",
    width: "var(--nypl-space-xl)",
  },
  xxxlarge: {
    height: "var(--nypl-space-xxl)",
    width: "var(--nypl-space-xxl)",
  },
};
const sizeBasedOnHeight = {
  default: {
    maxHeight: "100%",
  },
  xxsmall: {
    maxHeight: "64px",
  },
  xsmall: {
    maxHeight: "96px",
  },
  small: {
    maxHeight: "165px",
  },
  medium: {
    maxHeight: "225px",
  },
  large: {
    maxHeight: "360px",
  },
  xlarge: {
    maxHeight: "360px",
  },
  xxlarge: {
    height: "var(--nypl-space-xl)",
    width: "var(--nypl-space-xl)",
  },
  xxxlarge: {
    height: "var(--nypl-space-xxl)",
    width: "var(--nypl-space-xxl)",
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
