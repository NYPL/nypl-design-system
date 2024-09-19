import { useColorModeValue } from "@chakra-ui/react";
import { TableBodyTextSizes } from "../../components/Table/Table";

interface BaseStyleProps {
  columnHeadersBackgroundColor?: string;
  columnHeadersTextColor?: string;
  tableTextSize?: TableBodyTextSizes;
  isScrollable?: boolean;
  showRowDividers?: boolean;
  useRowHeaders?: boolean;
}

const CellBorderColorStyles = () => {
  const colorValues = useColorModeValue("ui.gray.semi-medium", {
    base: "ui.gray.xx-dark",
    md: "dark.ui.border.default",
  });
  return colorValues;
};
export const fixedColumnStyles = (
  isScrollable = false,
  useRowHeaders = false
) => ({
  backgroundColor: useRowHeaders ? "ui.gray.x-light-cool" : "null",
  borderRight: useRowHeaders
    ? isScrollable
      ? "1px solid var(--nypl-colors-ui-gray-semi-medium)"
      : {
          base: undefined,
          md: "1px solid var(--nypl-colors-ui-gray-semi-medium)",
        }
    : undefined,
  left: useRowHeaders
    ? isScrollable
      ? { base: undefined, md: "0" }
      : undefined
    : undefined,
  position: useRowHeaders ? "sticky" : undefined,
  zIndex: "5",
  _dark: {
    backgroundColor: useRowHeaders ? "dark.ui.bg.default" : undefined,
    borderRight: useRowHeaders
      ? "2px solid var(--nypl-colors-dark-ui-border-default)"
      : undefined,
  },
});

const tableTextSizes = (textSizeValue: string = "body1") => ({
  columnHeading:
    textSizeValue === "body2"
      ? "desktop.caption.caption1"
      : "desktop.body.body2",
  tableBody:
    textSizeValue === "body2" ? "desktop.body.body2" : "desktop.body.body1",
});

export const baseTRStyles = (
  columnHeadersBackgroundColor = "",
  isScrollable = false,
  showRowDividers = false,
  useRowHeaders = false
) => ({
  borderBottom: isScrollable ? 0 : { base: "2px solid", md: 0 },
  borderColor: "ui.gray.medium",
  display: isScrollable ? "table-row" : { base: "block", md: "table-row" },
  paddingBottom:
    showRowDividers || columnHeadersBackgroundColor
      ? 0
      : isScrollable
      ? "0"
      : { base: "s", md: "0" },
  paddingTop:
    showRowDividers || columnHeadersBackgroundColor || useRowHeaders
      ? 0
      : isScrollable
      ? "0"
      : { base: "s", md: "0" },
  _first: {
    borderTop: isScrollable ? "0" : { base: "2px solid", md: "0" },
    borderColor: "ui.gray.medium",
  },
  _dark: {
    borderColor: "dark.ui.border.default",
  },
});
export const baseCellStyles = (
  columnHeadersBackgroundColor = "",
  columnHeadersTextColor = "",
  tableTextSize = null,
  isScrollable = false,
  showRowDividers = false
) => ({
  border: showRowDividers ? undefined : "none",
  borderBottom: showRowDividers ? "1px solid" : "0",
  borderColor: CellBorderColorStyles(),
  display: isScrollable ? undefined : { base: "flex", md: "table-cell" },
  fontSize: tableTextSizes(tableTextSize).tableBody,
  gap: "s",
  letterSpacing: "0",
  lineHeight: 1.5,
  paddingBottom: isScrollable ? "s" : { base: "0", md: "s" },
  paddingEnd: "s",
  paddingStart: columnHeadersBackgroundColor ? { base: "0", md: "s" } : "s",
  paddingTop: isScrollable ? "s" : { base: "0", md: "s" },
  _first: {
    borderBottom: showRowDividers
      ? isScrollable
        ? "1px solid var(--nypl-colors-ui-gray-semi-medium)"
        : {
            base: "1px solid var(--nypl-colors-ui-gray-semi-medium)",
            md: "1px solid var(--nypl-colors-ui-gray-semi-medium)",
          }
      : "none",
  },
  _last: {
    borderBottom: showRowDividers ? "1px solid" : "none",
    borderColor: CellBorderColorStyles(),
  },
  "> span": {
    flexBasis: "50%",
    paddingBottom: isScrollable ? undefined : { base: "s", md: "0" },
    paddingTop: isScrollable ? undefined : { base: "s", md: "0" },
    _first: {
      bg: columnHeadersBackgroundColor
        ? columnHeadersBackgroundColor
        : undefined,
      color: columnHeadersTextColor
        ? columnHeadersTextColor
        : "ui.typography.heading",
      fontWeight: "medium",
      paddingStart: columnHeadersBackgroundColor ? "s" : "s",
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
  tableTextSize = "",
  isScrollable = false,
  showRowDividers = false,
  useRowHeaders = false
) => ({
  ...baseCellStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    tableTextSize,
    isScrollable,
    showRowDividers
  ),
  color: columnHeadersTextColor
    ? columnHeadersTextColor
    : "ui.typography.heading",
  fontWeight: "bold",
  fontSize: tableTextSizes(tableTextSize).columnHeading,
  textTransform: "uppercase",

  _first: {
    ...fixedColumnStyles(isScrollable, useRowHeaders),
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
  tableTextSize = "",
  isScrollable = false,
  showRowDividers = false
) => ({
  ...baseCellStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    tableTextSize,
    isScrollable,
    showRowDividers
  ),
  _last: {
    borderBottom: showRowDividers
      ? isScrollable
        ? "1px solid"
        : { base: 0, md: "1px solid" }
      : { base: 0, md: undefined },
    borderColor: `${CellBorderColorStyles()} !important`,
  },
});
export const baseStyle = ({
  columnHeadersBackgroundColor,
  columnHeadersTextColor,
  tableTextSize,
  isScrollable,
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
        ? isScrollable
          ? "ui.gray.xx-light-cool"
          : {
              base: "ui.gray.x-light-cool",
              md: columnHeadersBackgroundColor
                ? "ui.gray.xx-light-cool"
                : "ui.white",
            }
        : undefined,
      color: "ui.typography.heading",
      fontWeight: "medium",
      fontSize: tableTextSizes(tableTextSize).tableBody,
      textTransform: "capitalize",
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
    display: isScrollable
      ? undefined
      : { base: "none", md: "table-header-group" },
    th: {
      _first: {
        backgroundColor: columnHeadersBackgroundColor
          ? columnHeadersBackgroundColor
          : useRowHeaders
          ? "ui.gray.x-light-cool"
          : "ui.white",
      },
    },
  },
  tr: baseTRStyles(
    columnHeadersBackgroundColor,
    isScrollable,
    showRowDividers,
    useRowHeaders
  ),
  th: baseTHStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    tableTextSize,
    isScrollable,
    showRowDividers,
    useRowHeaders
  ),
  td: baseTDStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    tableTextSize,
    isScrollable,
    showRowDividers
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
