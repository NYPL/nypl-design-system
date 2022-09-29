export const baseLinkStyles = {
  color: "ui.link.primary",
  textDecoration: "underline",
  _dark: {
    color: "dark.ui.link.primary",
  },
  _hover: {
    color: "ui.link.secondary",
  },
};

const variants = {
  link: {},
  disabled: {
    color: "ui.gray.dark",
    pointerEvents: "none",
  },
  moreLink: {
    alignItems: "center",
    display: "inline-flex",
    svg: {
      height: "s",
      width: "s",
      textDecoration: "none",
      fill: "currentColor",
    },
    _hover: {
      color: "ui.link.secondary",
      textDecoration: "underline",
    },
  },
  button: {
    width: "100px",
    borderRadius: "sm",
    lineHeight: "1.5",
    display: "flex",
    cursor: "pointer",
    color: "ui.white",
    justifyContent: "center",
    py: "xs",
    px: "xs",
    textDecoration: "none",
    fontWeight: "button.default",
    bg: "ui.link.primary",
    _hover: {
      color: "ui.white",
      bg: "ui.link.secondary",
      textDecoration: "none",
    },
  },
};
const Link = {
  baseStyle: {
    ...baseLinkStyles,
    // This is needed for custom anchor elements or link components
    // that are passed as children to the `Link` component.
    a: {
      _hover: {
        color: "ui.link.secondary",
      },
    },
  },
  variants,
};

export default Link;
