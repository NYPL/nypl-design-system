import * as React from "react";
import { Box, Table as ChakraTable, Thead as ChakraTHeader, Tbody as ChakraTbody, Tfoot as ChakraTfoot, Tr as ChakraTRow, Th as ChakraTColumnHeader, Td as ChakraTData, TableCaption as ChakraTableCaption, useStyleConfig  } from "@chakra-ui/react";
import { TableDisplaySizes } from "./TableTypes";
import generateUUID from "../../helpers/generateUUID";
import Label from "../Label/Label";

type TableType = "outline" | "filled" | "flushed" | "unstyled"
export enum TableTypes {
  tableRow = "Tr",
  tableHeader = "Th",
  tableData = "Td",
}



export interface TableProps {
  className?: string;

  columnHeaders?: []

  columnHeadersBackgroundColor?: string;

  columnHeadersTextColor?: string;

  id?: string;

  useRowHeaders?: boolean;

  showRowDividers?: boolean;

  tableData?: [];

  titleText?: string;
}

//props: React.PropsWithChildren<TableProps>


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
    titleText
  } = props;


  const styles = useStyleConfig("Table", {
    columnHeaders,
    columnHeadersBackgroundColor,
    columnHeadersTextColor,
    id,
    useRowHeaders,
    showRowDividers,
    tableData,
    titleText,
    TableTypes
  });

  const customColors = {};

  columnHeadersBackgroundColor && (customColors["background"] = columnHeadersBackgroundColor);
  columnHeadersTextColor && (customColors["color"] = columnHeadersTextColor);

  const columnHeadersElems = columnHeaders && (
    <ChakraTHeader>
      <ChakraTRow __css={{
          ...styles,
          ...customColors,
        }}>
        {columnHeaders.map((child, i) => { return <ChakraTColumnHeader style={{ background: customColors["background"], color: customColors["color"] }} > {child} </ChakraTColumnHeader> } )}
      </ChakraTRow>
    </ChakraTHeader>
  );

  const tableBodyElems = showRowDividers && tableData && (
    <ChakraTbody>
      {tableData.map((child, index) => { return <ChakraTRow>  {child.map ((tbody, i) => <ChakraTData> {tbody} </ChakraTData> ) } </ChakraTRow> }) }
    </ChakraTbody>
  );

  return (
    <Box>
      <Label id={`${id}-title`} htmlFor={id} > {titleText} </Label>
      <ChakraTable colorScheme='teal'
        className={className} sx={styles}>
        {columnHeadersElems}
        {tableBodyElems}
      </ChakraTable>
    </Box>
  )
}
export default Table;

