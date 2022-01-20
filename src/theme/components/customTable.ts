const baseStyle = ({ showRowDividers, useRowHeaders }) => ({
  th: {
    border: showRowDividers ? undefined : 'none',
    borderBottom: showRowDividers ? undefined : '0px',
  },
  td: {
    border: showRowDividers ? undefined : 'none',
    borderBottom: showRowDividers ? undefined : '0px',
  }
});

const CustomTable = {
  baseStyle,
};

export default CustomTable;