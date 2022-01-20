const baseStyle = ({ showRowDividers, useRowHeaders, columnHeadersTextColor }) => ({
  th: {
    border: showRowDividers ? undefined : 'none',
    borderBottom: showRowDividers ? undefined : '0px',
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 'sm',
    color: columnHeadersTextColor ? columnHeadersTextColor : '#1a1a1a',
  },
  td: {
    border: showRowDividers ? undefined : 'none',
    borderBottom: showRowDividers ? undefined : '0px',
    fontSize: "sm",
  },

});

const CustomTable = {
  baseStyle,
};

export default CustomTable;