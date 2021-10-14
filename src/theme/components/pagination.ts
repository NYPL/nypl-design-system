const Pagination = {
  parts: ["list", "item", "link"],
  baseStyle: {
    marginBottom: "l",
    alignItems: "stretch",
    display: "flex",
    width: "100%",
    "> *": {
      _not_last: {
        marginRight: "xs",
      },
    },
    list: {
      listStyle: "none",
      margin: "0",
      padding: "0",
      display: "flex",
    },
    item: {
      marginRight: "xs",
      listStyleType: "none",
    },
    link: {
      lineHeight: "1.15",
      textDecoration: "none",
    },
  },
};

export default Pagination;
