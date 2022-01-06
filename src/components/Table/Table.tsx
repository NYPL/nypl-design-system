import * as React from "react";
import { Table as ChakraTable, useStyleConfig } from "@chakra-ui/react";

//Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption

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
    children,
    className = "",
    columnHeaders,
    columnHeadersBackgroundColor = "",
    columnHeadersTextColor,
    id,
    useRowHeaders,
    showRowDividers,
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


  if (!children) {
    console.warn(
      "The Text component has no children and will not render correctly."
    );
  }

  return (
    <ChakraTable className={className} sx={styles}>
      {children}
    </ChakraTable>
  )
}


export default Table;