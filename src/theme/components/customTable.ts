const baseStyle = ({
  showRowDividers,
  useRowHeaders,
  columnHeadersTextColor,
}) => ({
  th: {
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "0",
    color: columnHeadersTextColor ? columnHeadersTextColor : "ui.gray.medium",
  },
  td: {
    letterSpacing: "0",
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    _first: {
      fontWeight: useRowHeaders ? "bold" : undefined,
    },
  },
  caption: {
    captionSide: "top",
    textAlign: "left",
    fontSize: "0",
    color: "ui.gray.medium",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

const CustomTable = {
  baseStyle,
};

export default CustomTable;
