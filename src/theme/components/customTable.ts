const baseStyle = ({
  columnHeadersTextColor,
  showRowDividers,
  useRowHeaders,
}) => ({
  // Headers `th` can be rendered as the first cell in every row through the
  // `useRowHeaders`. Whereas the header `th` in the `thead` can be rendered
  // with a custom color, the row header `th` in the `tbody` should always
  // have text color black.
  tbody: {
    th: {
      color: "var(--nypl-colors-ui-black)",
    },
  },
  th: {
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    color: columnHeadersTextColor ? columnHeadersTextColor : "ui.black",
    fontSize: "0",
    fontWeight: "bold",
    letterSpacing: "0",
    paddingLeft: 0,
    paddingRight: "m",
    textTransform: "capitalize",
    _first: {
      paddingLeft: showRowDividers ? "m" : null,
    },
    _last: {
      paddingRight: showRowDividers ? "m" : "0",
    },
  },
  td: {
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    letterSpacing: "0",
    paddingLeft: 0,
    paddingRight: "m",
    _first: {
      paddingLeft: showRowDividers && !useRowHeaders ? "m" : null,
    },
    _last: {
      paddingRight: showRowDividers ? "m" : "0",
    },
  },
  caption: {
    captionSide: "top",
    color: "ui.black",
    fontSize: "heading.secondary",
    fontWeight: "heading.secondary",
    marginBottom: "s",
    marginLeft: "0",
    marginRight: "0",
    marginTop: "0",
    padding: "0",
    textAlign: "left",
  },
});

const CustomTable = {
  baseStyle,
};

export default CustomTable;
