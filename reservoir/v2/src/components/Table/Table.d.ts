import React from "react";
export interface TableProps {
    /** Additional class name for the `Table` component. */
    className?: string;
    /** Array of string values used to populate the `Table` column headers.
     * For improved accessibility, column headers are required. */
    columnHeaders: string[];
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
    tableData: (string | JSX.Element)[][];
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
export declare const Table: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<TableProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLTableElement>>, {}>;
export default Table;
