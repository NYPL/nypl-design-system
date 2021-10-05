const SearchBar = {
  parts: ["topRow"],
  baseStyle: {
    topRow: {
      display: "flex",
      marginBottom: {
        base: "xs",
        md: "auto",
      },
      flexFlow: {
        base: "column nowrap",
        md: "row nowrap",
      },
    },
    button: {
      marginBottom: "auto",
    },
  },
};

export default SearchBar;
