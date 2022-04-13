import * as React from "react";
import { SimpleGrid as ChakraSimpleGrid } from "@chakra-ui/react";
import { GridGaps } from "./GridTypes";
export interface SimpleGridProps {
  /** Additional class name. */
  className?: string;
  /** Optional numeric value to override the default column count; the default column count is 3 */
  columns?: number;
  /** Optional gap size; if omitted, the default `large` (2rem / 32px) spacing will be used; ```IMPORTANT: for standard grid layouts, this prop should not be used``` */
  gap?: GridGaps;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

function SimpleGrid(props: React.PropsWithChildren<SimpleGridProps>) {
  const { children, columns, className, gap = GridGaps.Large, id } = props;

  const responsiveCols = columns
    ? { base: 1, md: columns }
    : { base: 1, md: 2, lg: 3 };

  return (
    <ChakraSimpleGrid
      columns={responsiveCols}
      gap={gap}
      id={id}
      className={className}
    >
      {children}
    </ChakraSimpleGrid>
  );
}

export default SimpleGrid;
