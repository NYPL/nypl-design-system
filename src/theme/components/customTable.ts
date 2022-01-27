const baseStyle = ({ showRowDividers, columnHeadersTextColor }) => ({
  th: {
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "sm",
    color: columnHeadersTextColor ? columnHeadersTextColor : "#1a1a1a",
  },
  td: {
    border: showRowDividers ? undefined : "none",
    borderBottom: showRowDividers ? undefined : "0px",
    fontSize: "sm",
  },
  caption: {
    captionSide: "top",
    textAlign: "left",
    fontSize: "md",
    color: "#1a1a1a",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

const CustomTable = {
  baseStyle,
};

export default CustomTable;
