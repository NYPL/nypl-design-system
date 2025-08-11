import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
export declare const gridGapsArray: readonly [
  "grid.xxs",
  "grid.xs",
  "grid.s",
  "grid.m",
  "grid.l",
  "grid.xl",
  "grid.xxl"
];
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
export declare const SimpleGrid: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<SimpleGridProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<SimpleGridProps>
>;
export default SimpleGrid;
