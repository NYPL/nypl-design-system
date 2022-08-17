import { cssVar } from "@chakra-ui/theme-tools";

const $arrowBg = cssVar("popper-arrow-bg");

const Tooltip = {
  baseStyle: {
    [$arrowBg.variable]: "colors.ui.gray.xx-dark",
    bg: "ui.gray.xx-dark",
    color: "ui.white",
    maxWidth: "240px",
  },
};

export default Tooltip;
