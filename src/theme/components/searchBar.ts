import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["select"]);

const SearchBar = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    display: "flex",
    marginBottom: {
      base: "xs",
      md: "auto",
    },
    ".textInput": {
      flexGrow: 1,
      "div > input": {
        borderRightRadius: 0,
      },
    },
    flexFlow: { base: "column nowrap", md: "row" },
    button: {
      minWidth: "44px",
      maxWidth: "80px",
      borderLeftRadius: "none",
      lineHeight: "1.70",
      marginBottom: "auto",
      padding: { base: "xs", md: "s" },
      gap: "xs",
      borderRightRadius: "sm",
      " > span": {
        display: { base: "none", md: "block" },
      },
      " > svg": {
        margin: 0,
      },
    },
    select: {
      paddingBottom: { base: "xs", md: "unset" },
      flexShrink: "0",
      marginBottom: { base: "-1px", md: "0" },
      maxWidth: { base: undefined, md: "255px" },
      textOverflow: "ellipsis",
      marginRight: { base: undefined, md: "-1px" },
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
