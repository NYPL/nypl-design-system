const baseStyle = ({
  columnHeadersTextColor,
  showRowDividers,
  useRowHeaders,
}) => ({
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
    textAlign: "left",
    fontSize: "heading.secondary",
    color: "ui.black",
    textTransform: "capitalize",
    fontWeight: "heading.secondary",
  },
});

const CustomTable = {
  baseStyle,
};

export default CustomTable;
