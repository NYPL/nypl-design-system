import { defaultElementSizes } from "./global";

const AlphabetFilter = {
  baseStyle: {
    button: {
      color: "ui.link.primary",
      minWidth: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
      height: { base: defaultElementSizes.mobileFieldHeight, md: "auto" },
      padding: "1px 4px",
      margin: "2px 1px",
      fontWeight: "bold",
      fontSize: "heading.callout",
      lineHeight: "1",
      _hover: {
        color: "ui.link.secondary",
      },
      _last: {
        padding: "0 16px",
        fontWeight: "normal",
        whiteSpace: "nowrap",
        fontSize: { base: null, md: "text.caption" },
      },
      _disabled: {
        color: "ui.gray.medium",
      },
    },
  },
};

export default AlphabetFilter;
