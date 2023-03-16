import { activeFocus } from "./global";

const TagSetFilter = {
  parts: ["clearAll"],
  baseStyle: ({ isDismissible }: { isDismissible: boolean }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "ui.bg.default",
    border: "1px solid",
    borderColor: "ui.border.default",
    borderRadius: "pill",
    color: "ui.black",
    cursor: isDismissible ? "pointer" : "auto",
    height: { base: "32px", md: "22px" },
    minHeight: "22px",
    maxWidth: "200px",
    py: "xxxs",
    paddingLeft: "s",
    paddingRight: isDismissible ? { base: "8px", md: "6px" } : "s",
    fontSize: "text.tag",
    "> span": {
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    _hover: {
      bg: isDismissible ? "ui.bg.hover" : "ui.bg.default",
      borderColor: isDismissible ? "ui.border.hover" : "ui.border.default",
    },
    _dark: {
      bg: "dark.ui.bg.default",
      borderColor: "dark.ui.border.default",
      color: "dark.ui.typography.body",
      _hover: {
        bg: isDismissible ? "dark.ui.bg.hover" : "dark.ui.bg.default",
        borderColor: isDismissible
          ? "dark.ui.border.hover"
          : "dark.ui.border.default",
      },
    },
    clearAll: {
      color: "ui.black",
      height: { base: "32px", md: "22px" },
      fontSize: "text.tag",
      minHeight: "22px",
      _dark: {
        color: "dark.ui.typography.heading",
      },
    },
  }),
};

const TagSetExplore = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "ui.white",
    border: "1px solid",
    borderColor: "ui.link.primary",
    borderRadius: "pill",
    color: "ui.link.primary",
    cursor: "pointer",
    fontSize: "text.tag",
    height: { base: "32px", md: "22px" },
    minHeight: "22px",
    maxWidth: "200px",
    py: "xxxs",
    px: "s",
    textDecoration: "underline",
    transition: "0.3s ease",
    _focusWithin: activeFocus(),
    a: {
      border: "0",
      _focus: {
        outline: "none",
      },
    },
    "> span": {
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    svg: {
      fill: "ui.link.primary",
    },
    _hover: {
      bg: "ui.link.primary",
      a: {
        color: "ui.white",
      },
      svg: {
        fill: "ui.white",
      },
      "> span": {
        color: "ui.white",
      },
    },
    _dark: {
      bg: "dark.ui.bg.default",
      borderColor: "dark.ui.link.primary",
      color: "dark.ui.link.primary",
      a: {
        color: "dark.ui.link.primary",
      },
      svg: {
        fill: "dark.ui.link.primary",
      },
      _hover: {
        bg: "dark.ui.link.primary",
        a: {
          color: "ui.gray.xxx-dark",
        },
        svg: {
          fill: "ui.gray.xxx-dark",
        },
        "> span": {
          color: "ui.gray.xxx-dark",
        },
      },
    },
  },
};

const TagSet = {
  baseStyle: () => ({
    display: "inline-flex",
    flexWrap: "wrap",
    gap: "xs",
  }),
};

export default {
  TagSet,
  TagSetExplore,
  TagSetFilter,
};
