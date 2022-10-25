import { cssVar } from "@chakra-ui/theme-tools";

const $bg = cssVar("tooltip-bg");

const Tooltip = {
  baseStyle: {
    [$bg.variable]: "colors.ui.gray.xx-dark",
    borderRadius: "4px",
    boxShadow: "none",
    color: "ui.white",
    fontSize: "text.tag",
    marginBottom: "xxs",
    maxWidth: "240px",
    px: "s",
    py: "xs",
    _dark: {
      [$bg.variable]: "colors.ui.gray.x-dark",
    },
  },
};

export default Tooltip;
