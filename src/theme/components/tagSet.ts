import { activeFocus } from "./global";

const TagSetFilter = {
  parts: ["clearAll"],
  baseStyle: ({ isDismissible }: { isDismissible: boolean }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "ui.gray.x-light-cool",
    border: "1px solid",
    borderColor: "ui.gray.medium",
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
      lineHeight: "1",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    _hover: {
      bg: isDismissible ? "ui.gray.light-cool" : "ui.gray.x-light-cool",
    },
    clearAll: {
      color: "ui.black",
      height: { base: "32px", md: "22px" },
      fontSize: "text.tag",
      minHeight: "22px",
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
    "&:focus-within": activeFocus(),
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
