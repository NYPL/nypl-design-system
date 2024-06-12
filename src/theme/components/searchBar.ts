import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["select"]);

const SearchBar = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    display: "flex",
    "@container (min-width: 0px)": {
      "&": { marginBottom: "xs", flexFlow: "column nowrap" },
      " > select": { marginBottom: "-1px" },
    },
    "@container (min-width: 568px)": {
      "&": { marginBottom: "auto", flexFlow: "row nowrap" },
      " > select": {
        marginBottom: "0",
        maxWidth: "255px",
        marginRight: "-1px",
      },
    },
    ".textInput": {
      flexGrow: "1",
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
