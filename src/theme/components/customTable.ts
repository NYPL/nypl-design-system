const baseStyle = ({ showRowDividers, columnHeadersTextColor }) => ({
  th: {
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "0",
    color: columnHeadersTextColor ? columnHeadersTextColor : "ui.black",
    paddingLeft: showRowDividers ? "m" : "0",
    paddingRight: showRowDividers ? "m" : "0",
    letterSpacing: "0",
  },
  td: {
    letterSpacing: "0",
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    paddingLeft: showRowDividers ? "m" : "0",
    paddingRight: showRowDividers ? "m" : "0",
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
