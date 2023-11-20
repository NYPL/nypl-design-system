import { chakra, SimpleGrid as ChakraSimpleGrid } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const gridGapsArray = [
  "grid.xxs",
  "grid.xs",
  "grid.s",
  "grid.m",
  "grid.l",
  "grid.xl",
  "grid.xxl",
] as const;
export type GridGaps = typeof gridGapsArray[number];

export interface SimpleGridProps {
  /** Additional class name. */
  className?: string;
  /** Optional numeric value to override the default column count; the default
   * column count is 3. */
  columns?: number;
  /** Optional gap size; if omitted, the default `large` (2rem / 32px) spacing
   * will be used; `IMPORTANT: for standard grid layouts, this prop should
   * not be used.` */
  gap?: GridGaps;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

export const SimpleGrid: React.FC<any> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<SimpleGridProps>>(
    (props, ref?) => {
      const {
        children,
        columns,
        className,
        gap = "grid.l",
        id,
        ...rest
      } = props;

      const responsiveCols = columns
        ? { base: 1, md: columns }
        : { base: 1, md: 2, lg: 3 };

      return (
        <ChakraSimpleGrid
          className={className}
          columns={responsiveCols}
          gap={gap}
          id={id}
          ref={ref}
          {...rest}
        >
          {children}
        </ChakraSimpleGrid>
      );
    }
  ),
  { shouldForwardProp: () => true }
);

export default SimpleGrid;
