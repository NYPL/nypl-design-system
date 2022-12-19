import { baseListStyles, baseUnorderedStyles } from "./list";

const StyledList = {
  baseStyle: ({ textSize = "default" }) => ({
    fontSize: `text.${textSize}`,
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
          borderColor: "dark.ui.border.default",
        }
      }
    },
  },
};

export default StyledList;
