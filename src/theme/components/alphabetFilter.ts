const AlphabetFilter = {
  baseStyle: {
    button: {
      minWidth: "1.5rem",
      height: "1.5rem",
      fontWeight: "bold",
      lineHeight: "125%",
      textDecoration: "none",
      _first: {
        marginLeft: "initial",
      },
      _hover: { textDecoration: "none" },
      _disabled: {
        color: "ui.gray.medium",
      },
    },
    mobileStack: {
      alignItems: "left",
    },
    filterRow: {
      display: "flex",
      marginTop: "0!important",
    },
  },
};

export default AlphabetFilter;
