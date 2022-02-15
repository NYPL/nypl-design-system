// What we might expect users to pass for the color "white". This is
// temporary until we have a better color contrast checker.
const whiteColors = [
  "#fff",
  "#ffffff",
  "#FFF",
  "#FFFFFF",
  "white",
  "var(--nypl-colors-ui-white)",
];
const baseStyle = ({
  columnHeadersTextColor,
  showRowDividers,
  useRowHeaders,
}) => ({
  // Just so we don't let row headers to display as white. Only the
  // thead should have white text color with any color background.
  tbody: {
    th: {
      color:
        useRowHeaders && whiteColors.includes(columnHeadersTextColor)
          ? "var(--nypl-colors-ui-black)"
          : columnHeadersTextColor,
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
