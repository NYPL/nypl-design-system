import { useColorModeValue } from "@chakra-ui/react";

interface BaseStyleProps {
  columnHeadersBackgroundColor?: string;
  columnHeadersTextColor?: string;
  isScrollable?: boolean;
  showRowDividers?: boolean;
  useRowHeaders?: boolean;
}

const CellBorderColorStyles = () => {
  const colorValues = useColorModeValue(
    // { base: "ui.gray.light-cool", md: "ui.border.default" },
    "ui.gray.semi-medium",
    { base: "ui.gray.xx-dark", md: "dark.ui.border.default" }
  );
  return colorValues;
};
export const fixedColumnStyles = (
  isScrollable = false,
  useRowHeaders = false
) => ({
  backgroundColor: useRowHeaders ? "ui.gray.x-light-cool" : "null",
  // backgroundColor: useRowHeaders
  //   ? columnHeadersBackgroundColor
  //     ? columnHeadersBackgroundColor
  //     : "ui.gray.x-light-cool"
  //   : "null",
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
  // paddingLeft: useRowHeaders
  //   ? isScrollable
  //     ? { base: "0", md: "s" }
  //     : undefined
  //   : undefined,
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
  isScrollable = false,
  showRowDividers = false,
  useRowHeaders = false
) => ({
  borderBottom: isScrollable ? "0" : { base: "2px solid", md: "0" },
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
  isScrollable = false,
  showRowDividers = false
  // useRowHeaders = false
) => ({
  border: showRowDividers ? undefined : "none",
  borderBottom: showRowDividers ? "1px solid" : "0",
  borderColor: CellBorderColorStyles(),
  display: isScrollable ? undefined : { base: "flex", md: "table-cell" },
  fontSize: { base: "desktop.body.body2", md: "desktop.body.body1" },
  gap: "s",
  letterSpacing: "0",
  lineHeight: 1.5,
  paddingBottom: isScrollable ? "s" : { base: "0", md: "s" },
  // paddingStart: isScrollable ? "s" : { base: "0", md: "s" },
  // paddingEnd: isScrollable ? "s" : { base: "0", md: "s" },
  paddingStart: "s",
  paddingEnd: "s",
  paddingTop: isScrollable ? "s" : { base: "0", md: "s" },
  _first: {
    // paddingStart: showRowDividers
    //   ? isScrollable
    //     ? "s"
    //     : { base: "0", md: "s" }
    //   : "0",
    borderBottom: showRowDividers
      ? isScrollable
        ? "1px solid var(--nypl-colors-ui-gray-medium)"
        : {
            base: "1px solid var(--nypl-colors-ui-light-cool)",
            md: "1px solid var(--nypl-colors-ui-gray-medium)",
          }
      : "none",
  },
  _last: {
    // paddingEnd:
    //   showRowDividers || columnHeadersBackgroundColor
    //     ? isScrollable
    //       ? "s"
    //       : { base: "0", md: "s" }
    //     : "0",
    // paddingEnd:
    borderBottom: showRowDividers ? "1px solid" : "none",
    borderColor: CellBorderColorStyles(),
  },
  "> span": {
    flexBasis: "50%",
    // bgColor: isScrollable ? "pink" : "lime", // FOR TESTING
    paddingBottom: isScrollable ? undefined : { base: "s", md: "0" },
    // paddingEnd: showRowDividers ? "s" : "0",
    paddingTop: isScrollable ? undefined : { base: "s", md: "0" },
    _first: {
      bg: columnHeadersBackgroundColor
        ? columnHeadersBackgroundColor
        : undefined,
      color: columnHeadersTextColor
        ? columnHeadersTextColor
        : "ui.typography.heading",
      fontWeight: "medium",
      // paddingEnd: isScrollable
      //   ? undefined
      //   : columnHeadersBackgroundColor || showRowDividers || useRowHeaders
      //   ? "s"
      //   : undefined,
      _dark: {
        color: columnHeadersTextColor
          ? columnHeadersTextColor
          : "dark.ui.typography.heading",
      },
    },
    _last: {
      // paddingStart: isScrollable
      //   ? undefined
      //   : columnHeadersBackgroundColor || showRowDividers || useRowHeaders
      //   ? "s"
      //   : undefined,
    },
  },
});
export const baseTHStyles = (
  columnHeadersBackgroundColor = "",
  columnHeadersTextColor = "",
  isScrollable = false,
  showRowDividers = false,
  useRowHeaders = false
) => ({
  ...baseCellStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    isScrollable,
    showRowDividers
    // useRowHeaders
  ),
  color: columnHeadersTextColor
    ? columnHeadersTextColor
    : "ui.typography.heading",
  fontWeight: "bold",
  fontSize: "desktop.caption.caption1",
  textTransform: "uppercase",
  _first: {
    // paddingStart:
    //   showRowDividers || columnHeadersBackgroundColor
    //     ? { base: "0", md: "s" }
    //     : { base: "0", md: undefined },
    ...fixedColumnStyles(isScrollable, useRowHeaders),
    // ...fixedColumnStyles(columnHeadersBackgroundColor, useRowHeaders),
    /** Shadow for fixed first column */
    // boxShadow: useRowHeaders
    //   ? ".25rem 1rem  1rem  rgba( 0, 0, 0, 0.25 )"
    //   : undefined,
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
  isScrollable = false,
  showRowDividers = false
  // useRowHeaders = false
) => ({
  ...baseCellStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    isScrollable,
    showRowDividers
    // useRowHeaders
  ),
  _first: {
    // paddingStart:
    //   showRowDividers || columnHeadersBackgroundColor
    //     ? isScrollable
    //       ? "s"
    //       : { base: "0", md: "s" }
    //     : isScrollable
    //     ? "s"
    //     : { base: "0", md: useRowHeaders ? "s" : undefined },
  },
  _last: {
    borderBottom: showRowDividers
      ? isScrollable
        ? "1px solid"
        : { base: 0, md: "1px solid" }
      : { base: 0, md: undefined },
    borderColor: `${CellBorderColorStyles()} !important`,
    // paddingEnd:
    //   showRowDividers || columnHeadersBackgroundColor
    //     ? { base: "0", md: "s" }
    //     : 0,
  },
});
export const baseStyle = ({
  columnHeadersBackgroundColor,
  columnHeadersTextColor,
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
        : // {
          //   base: "ui.gray.x-light-cool",
          //   md: hexToRGB("var(--nypl-colors-ui-gray-semi-medium)", 0.05),
          // }
          undefined,
      color: "ui.typography.heading",
      fontWeight: "medium",
      fontSize: { base: "desktop.body.body2", md: "desktop.body.body1" },
      textTransform: "capitalize",
      verticalAlign: "top",
      // ...fixedColumnStyles(columnHeadersBackgroundColor, useRowHeaders),
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
    isScrollable,
    showRowDividers,
    useRowHeaders
  ),
  td: baseTDStyles(
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    isScrollable,
    showRowDividers
    // useRowHeaders
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
