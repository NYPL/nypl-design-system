import { defaultElementSizes } from "./global";

const AlphabetFilter = {
  baseStyle: {
    button: {
      minWidth: { base: defaultElementSizes.mobileFieldHeight, md: "1.5rem" },
      height: { base: defaultElementSizes.mobileFieldHeight, md: "1.5rem" },
      fontWeight: "bold",
      lineHeight: "125%",
      textDecoration: "none",
      _hover: { textDecoration: "none" },
      _disabled: {
        color: "ui.gray.medium",
      },
    },
  },
};

export default AlphabetFilter;
