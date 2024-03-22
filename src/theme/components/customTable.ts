import { useColorModeValue } from "@chakra-ui/react";

interface BaseStyleProps {
  columnHeadersBackgroundColor?: string;
  columnHeadersTextColor?: string;
  showRowDividers?: boolean;
  useRowHeaders?: boolean;
}

const CellBorderColorStyles = () => {
  const colorValues = useColorModeValue(
    { base: "ui.gray.light-cool", md: "ui.border.default" },
    { base: "ui.gray.xx-dark", md: "dark.ui.border.default" }
  );
  return colorValues;
};
export const fixedColumnStyles = (useRowHeaders = false) => ({
  backgroundColor: useRowHeaders ? "ui.bg.default" : undefined,
  borderRight: useRowHeaders
    ? { base: undefined, md: "1px solid var(--nypl-colors-ui-border-default)" }
    : undefined,
  left: useRowHeaders ? "0" : undefined,
  paddingLeft: useRowHeaders ? { base: "0", md: "s" } : undefined,
  position: useRowHeaders ? "sticky" : undefined,
  zIndex: "5",
  _dark: {
    backgroundColor: useRowHeaders ? "dark.ui.bg.default" : undefined,
    borderRight: useRowHeaders
      ? "2px solid var(--nypl-colors-dark-ui-border-default)"
      : undefined,
  },
});

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
  _dark: {
    borderColor: "dark.ui.border.default",
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
  borderColor: CellBorderColorStyles(),
  display: { base: "flex", md: "table-cell" },
  fontSize: { base: "desktop.body.body2", md: "desktop.body.body1" },
  gap: "s",
  letterSpacing: "0",
  lineHeight: 1.5,
  paddingBottom: { base: "0", md: "s" },
  paddingStart: { base: "0", md: "s" },
  paddingEnd: { base: "0", md: "s" },
  paddingTop: { base: "0", md: "s" },
  _first: {
    paddingStart: showRowDividers ? { base: "0", md: "s" } : "0",
    borderBottom: showRowDividers
      ? {
          base: "1px solid var(--nypl-colors-ui-light-cool)",
          md: "1px solid var(--nypl-colors-ui-gray-medium)",
        }
      : "none",
  },
  _last: {
    paddingEnd: showRowDividers ? { base: "0", md: "s" } : "0",
    borderBottom: showRowDividers ? "1px solid" : "none",
    borderColor: CellBorderColorStyles(),
  },
  "> span": {
    flexBasis: "50%",
    paddingBottom: { base: "s", md: "0" },
    paddingEnd: showRowDividers ? "s" : "0",
    paddingTop: { base: "s", md: "0" },
    _first: {
      bg: columnHeadersBackgroundColor
        ? columnHeadersBackgroundColor
        : undefined,
      color: columnHeadersTextColor
        ? columnHeadersTextColor
        : "ui.typography.heading",
      fontWeight: "medium",
      paddingStart:
        columnHeadersBackgroundColor || showRowDividers || useRowHeaders
          ? "s"
          : undefined,
      _dark: {
        color: columnHeadersTextColor
          ? columnHeadersTextColor
          : "dark.ui.typography.heading",
      },
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
  color: columnHeadersTextColor
    ? columnHeadersTextColor
    : "ui.typography.heading",
  fontWeight: "medium",
  textTransform: "capitalize",
  _first: {
    paddingStart:
      showRowDividers || columnHeadersBackgroundColor
        ? { base: "0", md: "s" }
        : { base: "0", md: undefined },
    ...fixedColumnStyles(useRowHeaders),
  },
  _dark: {
    color: columnHeadersTextColor
      ? columnHeadersTextColor
      : "dark.ui.typography.heading",
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
    paddingStart:
      showRowDividers && !useRowHeaders
        ? { base: "0", md: "s" }
        : columnHeadersBackgroundColor && !useRowHeaders
        ? { base: "0", md: "s" }
        : { base: "0", md: useRowHeaders ? "s" : undefined },
  },
  _last: {
    borderBottom: showRowDividers
      ? { base: 0, md: "1px solid" }
      : { base: 0, md: undefined },
    borderColor: CellBorderColorStyles(),
    paddingEnd: showRowDividers
      ? { base: "0", md: "s" }
      : columnHeadersBackgroundColor && !useRowHeaders
      ? { base: "0", md: "s" }
      : 0,
  },
});
export const baseStyle = ({
  columnHeadersBackgroundColor,
  columnHeadersTextColor,
  showRowDividers,
  useRowHeaders,
}: BaseStyleProps) => ({
  borderCollapse: "separate",
  borderSpacing: 0,
  // Headers `th` can be rendered as the first cell in every row through the
  // `useRowHeaders`. Whereas the header `th` in the `thead` can be rendered
  // with a custom color, the row header `th` in the `tbody` should always have
  // text color `ui.typography.heading` for light color mode and
  // `dark.ui.typography.heading` for dark color mode.
  tbody: {
    th: {
      backgroundColor: useRowHeaders
        ? { base: "ui.gray.x-light-cool", md: "unset" }
        : undefined,
      color: "ui.typography.heading",
      verticalAlign: "top",
      _dark: {
        backgroundColor: useRowHeaders
          ? { base: "dark.ui.bg.default", md: "unset" }
          : undefined,
        color: "dark.ui.typography.heading",
      },
    },
    td: {
      verticalAlign: "top",
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
    color: "ui.typography.heading",
    fontSize: {
      base: "mobile.heading.heading2",
      md: "desktop.heading.heading2",
    },
    fontWeight: "heading.heading2",
    marginBottom: "s",
    marginStart: "0",
    marginEnd: "0",
    marginTop: "0",
    padding: "0",
    textAlign: "left",
    _dark: {
      color: "dark.ui.typography.heading",
    },
  },
});

const CustomTable = {
  baseStyle,
};

export default CustomTable;
