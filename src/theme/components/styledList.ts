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
        borderLeft: "1px solid",
        borderRight: {
          base: "1px solid",
          md: "none",
        },
        borderColor: "ui.border.default",
        my: "xs",
        px: "xs",
      },
    },
  },
};

export default StyledList;
