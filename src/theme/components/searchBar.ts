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
      marginBottom: "0",
      maxWidth: { base: undefined, md: "255px" },
      textOverflow: "ellipsis",
    },
  },
};

export default SearchBar;
