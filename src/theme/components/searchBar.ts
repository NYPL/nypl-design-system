import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { setContainerStyles } from "../../utils/setContainerStyles";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["button", "select"]);

const SearchBar = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    display: "flex",
    ...setContainerStyles({
      breakpoint: "base",
      styles: {
        "&": { marginBottom: "xs", flexFlow: "column nowrap" },
        "[data-select]": {
          maxWidth: undefined,
          marginBottom: "-1px",
          paddingBottom: "xs",
        },
        "[data-button]": {
          padding: "xs",
          " > span": {
            display: "none",
          },
        },
      },
    }),
    ...setContainerStyles({
      breakpoint: "mobile",
      styles: {
        "&": { marginBottom: "auto", flexFlow: "row" },
        "[data-select]": {
          marginBottom: "0",
          maxWidth: "255px",
          paddingBottom: "unset",
          select: {
            borderRightColor: { md: "transparent" },
            borderRightRadius: { md: "none" },
          },
        },
        "[data-button]": {
          borderRightRadius: "sm",
          maxWidth: "80px",
          paddingTop: "xs",
          paddingLeft: "s",
          paddingBottom: "xs",
          paddingRight: "s",
          " > span": {
            display: "block",
          },
        },
      },
    }),
    ".textInput": {
      flexGrow: 1,
      "div > input": {
        borderRightRadius: 0,
      },
    },
    ".searchButton": {
      minWidth: "44px",
      borderLeftRadius: "none",
      lineHeight: "1.70",
      marginBottom: "auto",
      gap: "xxs",
      borderRightRadius: "sm",
      " > svg": {
        margin: 0,
      },
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
