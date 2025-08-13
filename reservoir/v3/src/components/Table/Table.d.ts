import { ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
export declare const tableBodyTextSizesArray: readonly ["body1", "body2"];
export type TableBodyTextSizes = typeof tableBodyTextSizesArray[number];
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
    /** Array of style objects used to set custom styles for the table columns.
     * Any style can be passed, but the most common use would be to pass "width"
     * and "maxWidth" to set custom column widths. */
    columnStyles?: object[];
    /** The size of the table body text. */
    tableTextSize?: TableBodyTextSizes;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** If true, horizontal scrolling will be enabled for the table content.  */
    isScrollable?: boolean;
    /** If true, a border will be displayed between each row in the `Table`
     * component. The default value is false. */
    showRowDividers?: boolean;
    /** If true, the heading text will be rendered above the table. The default
     * value is true. */
    showTitleText?: boolean;
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
export declare const Table: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<TableProps> & React.RefAttributes<HTMLTableElement>>, React.PropsWithChildren<TableProps>>;
export default Table;
