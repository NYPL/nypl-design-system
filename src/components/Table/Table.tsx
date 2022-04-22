import {
  chakra,
  Table as ChakraTable,
  TableCaption as ChakraTableCaption,
  Tbody as ChakraTbody,
  Thead as ChakraTHead,
  Td as ChakraTd,
  Th as ChakraTh,
  Tr as ChakraTr,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

export interface TableProps {
  /** Additional class name for the `Table` component. */
  className?: string;
  /** Array of string values used to populate the `Table` column headers. */
  columnHeaders?: string[];
  /** Hex value to set the background color of the column headers. */
  columnHeadersBackgroundColor?: string;
  /** Hex value to set the text color of the column headers. */
  columnHeadersTextColor?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** If true, a border will be displayed between each row in the `Table`
   * component. The default value is false. */
  showRowDividers?: boolean;
  /** Two-dimensional array used to populate the table rows. */
  tableData: string[][];
  /** Displays `Table` title element. */
  titleText?: string;
  /** If true, the first cell of each row in the `Table` component will be
   * visually styled as a header. The default value is false */
  useRowHeaders?: boolean;
}

/**
 * Basic `Table` component used to organize and display tabular data in
 * rows and columns.
 */
export const Table = chakra((props: React.PropsWithChildren<TableProps>) => {
  const {
    className,
    columnHeaders,
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    id,
    showRowDividers = false,
    tableData,
    titleText,
    useRowHeaders = false,
    ...rest
  } = props;

  const customColors = {};

  columnHeadersBackgroundColor &&
    (customColors["backgroundColor"] = columnHeadersBackgroundColor);
  columnHeadersTextColor && (customColors["color"] = columnHeadersTextColor);

  const styles = useMultiStyleConfig("CustomTable", {
    columnHeadersTextColor,
    showRowDividers,
    useRowHeaders,
  });

  const tableCaption = titleText && (
    <ChakraTableCaption>{titleText}</ChakraTableCaption>
  );

  const columnHeadersElems = columnHeaders?.length > 0 && (
    <ChakraTHead>
      <ChakraTr>
        {columnHeaders.map((child, key) => (
          <ChakraTh key={key} scope="col" sx={customColors}>
            {child}
          </ChakraTh>
        ))}
      </ChakraTr>
    </ChakraTHead>
  );

  /**
   * This renders a normal `tbody` DOM element structure if the `tableData`
   * passed is a two-dimensional array. This is to render the appropriate
   * row and column structure for a table.
   */
  const tableBodyElems = () => {
    if (
      !Array.isArray(tableData) ||
      tableData.length <= 0 ||
      tableData[0].constructor !== Array
    ) {
      console.warn(
        "NYPL Reservoir Table: Data in the `tableData` prop must be a two dimensional array."
      );
      return null;
    }

    return (
      <ChakraTbody>
        {tableData.map((row, index) => (
          <ChakraTr key={index}>
            {row.map((column, key) =>
              key === 0 && useRowHeaders ? (
                <ChakraTh scope="row" key={key}>
                  {column}
                </ChakraTh>
              ) : (
                <ChakraTd key={key}>{column}</ChakraTd>
              )
            )}
          </ChakraTr>
        ))}
      </ChakraTbody>
    );
  };

  return (
    <ChakraTable id={id} sx={styles} className={className} {...rest}>
      {tableCaption}
      {columnHeadersElems}
      {tableBodyElems()}
    </ChakraTable>
  );
});

export default Table;
