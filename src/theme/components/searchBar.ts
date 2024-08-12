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
    },
    flexFlow: { base: "column nowrap", md: "row" },
    button: {
      borderLeftRadius: "none",
      lineHeight: "1.70",
      marginBottom: "auto",
      padding: "xs",
      borderRightRadius: "sm",
      " > span": {
        display: { base: "none", md: "block" },
      },
      " > svg": {
        margin: 0,
      },
    },
    select: {
      paddingBottom: { base: "s", md: "unset" },
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
