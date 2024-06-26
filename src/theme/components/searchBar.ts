import breakpoints from "../foundations/breakpoints";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["button", "select"]);

const SearchBar = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    display: "flex",
    "@container (min-width: 0px)": {
      "&": { marginBottom: "xs", flexFlow: "column nowrap" },
      " > select": { marginBottom: "-1px" },
      "[data-button]": {
        borderRightRadius: "none",
        maxWidth: "unset",
      },
    },
    [`@container (min-width: ${breakpoints.md})`]: {
      "&": { marginBottom: "auto", flexFlow: "row nowrap" },
      " > select": {
        marginBottom: "0",
        maxWidth: "255px",
        marginRight: "-1px",
      },
      "[data-button]": {
        borderRightRadius: "sm",
        maxWidth: "80px",
      },
    },
    ".textInput": {
      flexGrow: "1",
    },
    button: {
      borderLeftRadius: "none",
      lineHeight: "1.70",
      marginBottom: "auto",
    },
    select: {
      flexShrink: "0",
      textOverflow: "ellipsis",
      _hover: {
        zIndex: "10",
        "+ .chakra-select__icon-wrapper": {
          zIndex: "9999",
        },
      },
    },
  }),
});

export default SearchBar;
