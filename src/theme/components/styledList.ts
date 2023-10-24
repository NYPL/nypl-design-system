import { baseListStyles, baseUnorderedStyles } from "./list";

const StyledList = {
  baseStyle: ({ textSize = "default" }) => ({
    fontSize:
      textSize === "tag" || textSize === "mini"
        ? `text.${textSize}`
        : textSize === "caption" || textSize === "default"
        ? `desktop.${textSize}`
        : `desktop.body.${textSize}`,
    ...baseListStyles(false, true),
    ...baseUnorderedStyles(true),
  }),
  variants: {
    capped: {
      li: {
        borderStart: "1px solid",
        borderEnd: {
          base: "1px solid",
          md: "none",
        },
        borderColor: "ui.border.default",
        my: "xs",
        px: "xs",
      },
      _dark: {
        li: {
          borderColor: "ui.gray.semi-dark",
        },
      },
    },
  },
};

export default StyledList;
