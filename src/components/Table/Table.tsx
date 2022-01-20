import * as React from "react";
import { Box, Table as ChakraTable, Thead as ChakraTHead, Tbody as ChakraTbody, Tfoot as ChakraTfoot, Tr as ChakraTr, Th as ChakraTh, Td as ChakraTd, TableCaption as ChakraTableCaption, useMultiStyleConfig  } from "@chakra-ui/react";
import generateUUID from "../../helpers/generateUUID";
import Label from "../Label/Label";



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

  const customColors = {};
  columnHeadersBackgroundColor && (customColors["backgroundColor"] = columnHeadersBackgroundColor);
  columnHeadersTextColor && (customColors["color"] = columnHeadersTextColor);

  const styles = useMultiStyleConfig("CustomTable", { showRowDividers, useRowHeaders });

  const columnHeadersElems = columnHeaders && (
    <ChakraTHead>
      <ChakraTr>{columnHeaders.map((child, i) => { return <ChakraTh sx={customColors} >{child}</ChakraTh> } )}</ChakraTr>
    </ChakraTHead>
  );

  const tableBody =  ({tbody, i}) => {
    if (useRowHeaders && i == 0) {
      return <ChakraTd style={{fontWeight: "bold"}}> {tbody} </ChakraTd>
    } else {
      return <ChakraTd> {tbody} </ChakraTd>
    }
  }

  const tableBodyElems = tableData && (
    <ChakraTbody> 
      {tableData.map((child, index) => {  return <ChakraTr>{ child.map((tbody, i) => { return tableBody({tbody, i}) } ) }</ChakraTr> }) }
    </ChakraTbody>
  );

  return (
    <Box>
      <Label id={`${id}-title`} htmlFor={id} > {titleText} </Label>
      <ChakraTable sx={styles}
        className={className}>
        {columnHeadersElems}
        {tableBodyElems}
      </ChakraTable>
    </Box>
  )
}

export default Table;

