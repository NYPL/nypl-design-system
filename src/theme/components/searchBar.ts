const SearchBar = {
  parts: ["select"],
  baseStyle: {
    display: "flex",
    marginBottom: {
      base: "xs",
      md: "auto",
    },
    flexFlow: {
      base: "column nowrap",
      md: "row nowrap",
    },
    select: {
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
  },
};

export default SearchBar;
