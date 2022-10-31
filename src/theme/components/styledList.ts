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
        borderLeft: "2px solid",
        borderRight: "2px solid",
        borderColor: "ui.border.default",
        my: "xs",
        px: "xs",
        width: "fit-content",
      },
    },
  },
};

export default StyledList;
