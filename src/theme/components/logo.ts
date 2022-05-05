interface LogoBaseStyle {
  size: keyof typeof size;
}

const svgBase = {
  display: "inline-block",
  height: "auto",
  width: "100%",
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
const Logo = {
  baseStyle: (props: LogoBaseStyle) => {
    const allStyles = {
      ...svgBase,
      ...size[props.size],
    };
    return {
      ...allStyles,
      // We still want to style any custom SVG element that was
      // passed to the `Logo` component.
      svg: {
        ...allStyles,
      },
    };
  },
};

export default Logo;
