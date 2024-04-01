import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

import { baseListStyles, unorderedStyles } from "./list";

const StyledList = defineStyleConfig({
  baseStyle: defineStyle(({ textSize = "default" }) => ({
    fontSize:
      textSize === "tag" || textSize === "mini"
        ? `text.${textSize}`
        : textSize === "caption" || textSize === "default"
        ? `desktop.${textSize}`
        : `desktop.body.${textSize}`,
    ...baseListStyles({ inline: false, noStyling: true }),
    ...unorderedStyles({ noStyling: true }),
  })),
  variants: {
    capped: defineStyle({
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
    }),
  },
});

export default StyledList;
