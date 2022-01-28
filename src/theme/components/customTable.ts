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
    fontSize: "sm",
    color: columnHeadersTextColor ? columnHeadersTextColor : "ui.gray.medium",
  },
  td: {
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    fontSize: "sm",
    _first: {
      fontWeight: useRowHeaders ? "bold" : "",
    },
  },
  caption: {
    captionSide: "top",
    textAlign: "left",
    fontSize: "md",
    color: "ui.gray.medium",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

const CustomTable = {
  baseStyle,
};

export default CustomTable;
