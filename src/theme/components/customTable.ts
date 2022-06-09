interface BaseStyleProps {
  columnHeadersBackgroundColor?: string;
  columnHeadersTextColor?: string;
  showRowDividers?: boolean;
  useRowHeaders?: boolean;
}

const cellBorderColorStyles = {
  base: "ui.gray.light-cool",
  md: "ui.gray.medium",
};

export const baseTRStyles = (
  columnHeadersBackgroundColor = "",
  showRowDividers = false,
  useRowHeaders = false
) => ({
  borderBottom: { base: "2px solid", md: 0 },
  borderColor: "ui.gray.medium",
  display: { base: "block", md: "table-row" },
  paddingBottom:
    showRowDividers || columnHeadersBackgroundColor
      ? 0
      : { base: "s", md: "0" },
  paddingTop:
    showRowDividers || columnHeadersBackgroundColor || useRowHeaders
      ? 0
      : { base: "s", md: "0" },
  _first: {
    borderTop: { base: "2px solid", md: "0" },
    borderColor: "ui.gray.medium",
  },
});
export const baseCellStyles = (
  columnHeadersBackgroundColor = "",
  columnHeadersTextColor = "",
  showRowDividers = false,
  useRowHeaders = false
) => ({
  border: showRowDividers ? undefined : "none",
  borderBottom: showRowDividers ? "1px solid" : "0",
  borderColor: cellBorderColorStyles,
  display: { base: "flex", md: "table-cell" },
  fontSize: { base: "text.caption", lg: "text.default" },
  gap: "s",
  letterSpacing: "0",
  lineHeight: 1.5,
  paddingBottom: { base: "0", md: "s" },
  paddingLeft: 0,
  paddingRight: { base: "0", md: "m" },
  paddingTop: { base: "0", md: "s" },
  _first: {
    paddingLeft: showRowDividers ? { base: "0", md: "m" } : null,
    borderBottom: showRowDividers
      ? {
          base: "1px solid var(--nypl-colors-ui-light-cool)",
          md: "1px solid var(--nypl-colors-ui-gray-medium)",
        }
      : "none",
  },
  _last: {
    paddingRight: showRowDividers ? { base: "0", md: "m" } : null,
    borderBottom: showRowDividers ? "1px solid" : "none",
    borderColor: cellBorderColorStyles,
  },
  "> span": {
    flexBasis: "50%",
    paddingBottom: { base: "s", md: "0" },
    paddingRight: showRowDividers ? "s" : "0",
    paddingTop: { base: "s", md: "0" },
    _first: {
      bg: columnHeadersBackgroundColor
        ? columnHeadersBackgroundColor
        : undefined,
      color: columnHeadersTextColor ? columnHeadersTextColor : "ui.black",
      fontWeight: "medium",
      paddingLeft:
        columnHeadersBackgroundColor || showRowDividers || useRowHeaders
          ? "s"
          : undefined,
    },
  },
});
export const baseTHStyles = (
  columnHeadersBackgroundColor = "",
  columnHeadersTextColor = "",
  showRowDividers = false,
  useRowHeaders = false
) => ({
  ...baseCellStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    showRowDividers,
    useRowHeaders
  ),
  color: columnHeadersTextColor ? columnHeadersTextColor : "ui.black",
  fontWeight: "medium",
  textTransform: "capitalize",
  _first: {
    paddingLeft:
      showRowDividers || columnHeadersBackgroundColor
        ? { base: "0", md: "m" }
        : { base: "0", md: undefined },
  },
});
export const baseTDStyles = (
  columnHeadersBackgroundColor = "",
  columnHeadersTextColor = "",
  showRowDividers = false,
  useRowHeaders = false
) => ({
  ...baseCellStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    showRowDividers,
    useRowHeaders
  ),
  _first: {
    paddingLeft:
      showRowDividers && !useRowHeaders
        ? { base: "0", md: "m" }
        : columnHeadersBackgroundColor && !useRowHeaders
        ? { base: "0", md: "m" }
        : { base: "0", md: undefined },
  },
  _last: {
    borderBottom: showRowDividers
      ? { base: 0, md: "1px solid" }
      : { base: 0, md: undefined },
    borderColor: cellBorderColorStyles,
  },
});
export const baseStyle = ({
  columnHeadersBackgroundColor,
  columnHeadersTextColor,
  showRowDividers,
  useRowHeaders,
}: BaseStyleProps) => ({
  // Headers `th` can be rendered as the first cell in every row through the
  // `useRowHeaders`. Whereas the header `th` in the `thead` can be rendered
  // with a custom color, the row header `th` in the `tbody` should always
  // have text color black.
  tbody: {
    th: {
      color: "var(--nypl-colors-ui-black)",
      backgroundColor: useRowHeaders
        ? { base: "ui.gray.x-light-cool", md: "unset" }
        : undefined,
    },
  },
  thead: {
    display: { base: "none", md: "table-header-group" },
  },
  tr: baseTRStyles(
    columnHeadersBackgroundColor,
    showRowDividers,
    useRowHeaders
  ),
  th: baseTHStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    showRowDividers,
    useRowHeaders
  ),
  td: baseTDStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    showRowDividers,
    useRowHeaders
  ),
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
