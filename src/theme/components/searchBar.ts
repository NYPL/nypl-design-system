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
    ".select": {
      flex: "1 1 20%",
    },
    ".textInput": {
      flex: "1 1 80%",
    },
    button: {
      marginBottom: "auto",
    },
  },
};

export default SearchBar;
