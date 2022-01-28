import * as React from "react";
import {
  Table as ChakraTable,
  Thead as ChakraTHead,
  Tbody as ChakraTbody,
  Tr as ChakraTr,
  Th as ChakraTh,
  Td as ChakraTd,
  TableCaption as ChakraTableCaption,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";

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
  /** If true, the first cell of each row in the `Table` component will be visually styled as a header.  The default value is false */
  useRowHeaders?: boolean;
  /** If true, a border will be displayed between each row in the `Table` component.  The default value is false. */
  showRowDividers?: boolean;
  /** Two-dimensional array used to populate the table rows. */
  tableData: string[][];
  /** Display's a `Table` title element. */
  titleText?: string;
}

function Table(props: React.PropsWithChildren<TableProps>) {
  const {
    className,
    columnHeaders,
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    id = generateUUID(),
    useRowHeaders,
    showRowDividers = true,
    tableData,
    titleText,
  } = props;

  const customColors = {};

  columnHeadersBackgroundColor &&
    (customColors["backgroundColor"] = columnHeadersBackgroundColor);
  columnHeadersTextColor && (customColors["color"] = columnHeadersTextColor);

  const styles = useMultiStyleConfig("CustomTable", {
    showRowDividers,
    useRowHeaders,
    columnHeadersTextColor,
  });

  const columnHeadersElems = columnHeaders && (
    <ChakraTHead>
      <ChakraTr>
        {columnHeaders.map((child, key) => (
          <ChakraTh key={key} sx={customColors}>
            {child}
          </ChakraTh>
        ))}
      </ChakraTr>
    </ChakraTHead>
  );

  const tableBodyElems = tableData && (
    <ChakraTbody>
      {tableData.map((data, index) => (
        <ChakraTr key={index}>
          {data.map((tbody, key) => (
            <ChakraTd key={key}>{tbody}</ChakraTd>
          ))}
        </ChakraTr>
      ))}
    </ChakraTbody>
  );

  const tableCaption = titleText && (
    <ChakraTableCaption>{titleText}</ChakraTableCaption>
  );

  return (
    <ChakraTable id={id} sx={styles} className={className}>
      {tableCaption}
      {columnHeadersElems}
      {tableBodyElems}
    </ChakraTable>
  );
}

export default Table;
