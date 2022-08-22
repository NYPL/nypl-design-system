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
    height: "29px",
    minHeight: "30px",
    maxWidth: "200px",
    py: "xxxs",
    px: "s",
    fontSize: "label.default",
    "> span": {
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    _hover: {
      bg: "ui.gray.light-cool",
    },
    clearAll: {
      color: "ui.black",
      height: "29px",
      fontSize: "label.default",
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
    fontSize: "label.default",
    height: "29px",
    minHeight: "30px",
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
