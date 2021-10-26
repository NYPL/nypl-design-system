const svgBase = {
  display: "inline-block",
  fill: "currentColor",
  width: "24px",
  height: "24px",
};
const align = {
  none: {},
  left: { marginRight: "xs" },
  right: { marginLeft: "xs" },
};
const iconRotation = {
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
const size = {
  xxxlarge: {
    height: "var(--nypl-space-xxl)",
    width: "var(--nypl-space-xxl)",
  },
  xxlarge: {
    height: "var(--nypl-space-xl)",
    width: "var(--nypl-space-xl)",
  },
  xlarge: {
    height: "var(--nypl-space-l)",
    width: "var(--nypl-space-l)",
  },
  large: {
    height: "var(--nypl-space-m)",
    width: "var(--nypl-space-m)",
  },
  medium: {
    height: "1.125rem",
    width: "1.125rem",
  },
  small: {
    height: "0.875rem",
    width: "0.875rem",
  },
};
const Icon = {
  baseStyle: (props) => {
    const allStyles = {
      ...svgBase,
      ...align[props.align],
      fill: props.color,
      ...iconRotation[props.iconRotation],
      ...size[props.size],
    };
    return {
      ...allStyles,
      // We still want to style any custom SVG element that was
      // passed to the `Icon` component.
      svg: {
        ...allStyles,
      },
    };
  },
  variants: {
    default: {},
    breadcrumbs: {
      fill: "var(--nypl-colors-ui-white)",
      display: { md: "none" },
    },
  },
};

export default Icon;
