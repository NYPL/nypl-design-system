import * as React from "react";
import { Table as ChakraTable, Thead as ChakraTHeader, Tbody as ChakraTbody, Tfoot as ChakraTfoot, Tr as ChakraTRow, Th as ChakraTColumnHeader, Td as ChakraTData, TableCaption as ChakraTableCaption, useStyleConfig  } from "@chakra-ui/react";
import { TableDisplaySizes } from "./TableTypes";
import generateUUID from "../../helpers/generateUUID";
type TableType = "outline" | "filled" | "flushed" | "unstyled"


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
    useRowHeaders = false,
    showRowDividers = false,
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
    titleText
  });



  const columnHeadersElems = columnHeaders && (
    <ChakraTHeader>
      <ChakraTRow>
        {columnHeaders.map((child, i) => { return <ChakraTColumnHeader> {child} </ChakraTColumnHeader> } )}
      </ChakraTRow>
    </ChakraTHeader>
  );


  const tableBodyElems = tableData && (
    <ChakraTbody>
        {tableData.map((child, index) => { return <ChakraTRow>  {child.map ((tbody, i) => <ChakraTData> {tbody} </ChakraTData> ) } </ChakraTRow> }) }
    </ChakraTbody>
  );


  return (
    <ChakraTable 
      className={className} sx={styles}>
      {columnHeadersElems}
      {tableBodyElems}
    </ChakraTable>
  )
}

function TableBody() {
  const body = []

  body.forEach((child) => {
    cheaders.push(<ChakraTColumnHeader>{child}</ChakraTColumnHeader>)
  })
  return cheaders
}

export default Table;