import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["link"]);

const Pagination = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    alignItems: "stretch",
    display: "flex",
    width: "100%",
    link: {
      lineHeight: "1.15",
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },
    ul: {
      marginBottom: "0",
    },
  }),
});

export default Pagination;
