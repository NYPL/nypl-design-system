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
import React, { forwardRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";

interface CustomColors {
  backgroundColor?: string;
  color?: string;
}
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
export const Table: React.FC<any> = chakra(
  forwardRef<HTMLTableElement, React.PropsWithChildren<TableProps>>(
    (props, ref?) => {
      const {
        className,
        columnHeaders = [],
        columnHeadersBackgroundColor,
        columnHeadersTextColor,
        id,
        showRowDividers = false,
        tableData,
        titleText,
        useRowHeaders = false,
        ...rest
      } = props;
      const customColors: CustomColors = {};

      columnHeadersBackgroundColor &&
        (customColors["backgroundColor"] = columnHeadersBackgroundColor);
      columnHeadersTextColor &&
        (customColors["color"] = columnHeadersTextColor);

      const styles = useMultiStyleConfig("CustomTable", {
        columnHeadersBackgroundColor,
        columnHeadersTextColor,
        showRowDividers,
        useRowHeaders,
      });

      // Based on --nypl-breakpoint-medium
      const breakpointMedium = 600;
      const windowDimensions = useWindowSize();

      const tableCaption = titleText && (
        <ChakraTableCaption>{titleText}</ChakraTableCaption>
      );

      const columnHeadersElems =
        columnHeaders.length > 0 ? (
          <ChakraTHead>
            <ChakraTr>
              {columnHeaders.map((child, key) => (
                <ChakraTh key={key} scope="col" sx={customColors}>
                  {child}
                </ChakraTh>
              ))}
            </ChakraTr>
          </ChakraTHead>
        ) : (
          console.warn(
            "NYPL Reservoir Table: Column headers have not been set. For improved accessibility, " +
              "column headers are required."
          )
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

        for (let i = 1; i < tableData.length; i++) {
          if (tableData[0].length !== tableData[i].length) {
            console.warn(
              "NYPL Reservoir Table: The number of columns in each row of the data table are not identical. " +
                "The `Table` component may not render properly."
            );
            break;
          }
        }

        const cellContent = (key: number, column: string | JSX.Element) => {
          return windowDimensions.width <= breakpointMedium ? (
            <>
              <span>{columnHeaders[key]}</span>
              <span>{column}</span>
            </>
          ) : (
            column
          );
        };

        return (
          <ChakraTbody>
            {tableData.map((row, index) => (
              <ChakraTr key={index}>
                {row.map((column, key) =>
                  key === 0 && useRowHeaders ? (
                    <ChakraTh scope="row" key={key}>
                      {cellContent(key, column)}
                    </ChakraTh>
                  ) : (
                    <ChakraTd key={key}>{cellContent(key, column)}</ChakraTd>
                  )
                )}
              </ChakraTr>
            ))}
          </ChakraTbody>
        );
      };

      for (let j = 0; j < tableData.length; j++) {
        if (
          columnHeaders.length &&
          columnHeaders.length !== tableData[j].length
        ) {
          console.warn(
            "NYPL Reservoir Table: The number of column headers in the `columnHeaders` prop is not equal " +
              "to the number of columns in the data table. " +
              "The `Table` component may not render properly."
          );
          break;
        }
      }

      return (
        <ChakraTable
          className={className}
          id={id}
          ref={ref}
          sx={styles}
          {...rest}
        >
          <>
            {tableCaption}
            {columnHeadersElems}
            {tableBodyElems()}
          </>
        </ChakraTable>
      );
    }
  )
);

export default Table;
