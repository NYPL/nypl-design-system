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
    fontWeight: 500,
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
    color: "ui.link.primary",
    textDecoration: "underline",
    _hover: {
      color: "ui.link.secondary",
    },
  },
  variants,
};

export default Link;
