import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { setContainerStyles } from "../../utils/setContainerStyles";
import { iconSizeStyles } from "../sharedStyles";
import { screenreaderOnly } from "./globalMixins";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["button", "inputRow", "select"]);

const SearchBar = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    display: "flex",
    gap: "v5.density.condensed",
    ...setContainerStyles({
      breakpoint: "base",
      styles: {
        "&": { marginBottom: "v5.density.tight", flexFlow: "column nowrap" },
        "[data-select]": {
          maxWidth: undefined,
        },
        "[data-button]": {
          // Even though we only want to apply these styles on mobile, we
          // cannot pass `isMobileOnly` to this function because the
          // function uses media queries and this component uses container
          // queries so styles would switch at slightly different moments.
          " > span": screenreaderOnly(),
          "> svg": {
            ...iconSizeStyles["medium"],
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
          maxWidth: "200px",
        },
        "[data-button]": {
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
      },
    }),
    ".ds-searchBar-textInput": {
      flexGrow: 1,
    },
    inputRow: {
      display: "flex",
      flexDirection: "row",
      gap: "v5.density.condensed",
      width: "100%",
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
