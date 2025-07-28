import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { setContainerStyles } from "../../utils/setContainerStyles";
import { iconSizeStyles } from "../sharedStyles";
import { screenreaderOnly } from "./globalMixins";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["button", "select"]);

const SearchBar = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ hasSelectElem = false }) => ({
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
          // Even though we only want to apply these styles on mobile, we
          // cannot pass `isMobileOnly` to this function because the
          // function uses media queries and this component uses container
          // queries so styles would switch at slightly different moments.
          " > span": screenreaderOnly(),
          "> svg": {
            ...iconSizeStyles["medium"],
          },
        },
        ".ds-searchBar-textInput": {
          "div > input": {
            borderLeftRadius: hasSelectElem ? "sm" : null,
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
            height: "auto",
            overflow: "unset",
            position: "relative !important",
            width: "100%",
          },
          "> svg": {
            ...iconSizeStyles["small"],
          },
        },
        ".ds-searchBar-textInput": {
          "div > input": {
            borderLeftRadius: 0,
          },
        },
      },
    }),
    ".ds-searchBar-textInput": {
      flexGrow: 1,
      "div > input": {
        borderRight: 0,
        borderRightRadius: 0,
      },
    },
    ".ds-searchBar-button": {
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
  })),
});

export default SearchBar;
