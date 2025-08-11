import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
export interface PaginationProps {
  /** Additional className. */
  className?: string;
  /** The currentPage can be used to programatically force the selected page to change
   * without the user explicitly requesting it – for example, if the user should be
   * brought back to the first page of a set of results after a new search. */
  currentPage?: number;
  /** The callback function that takes a page number and returns a string
   * to use for a link's `href` attribute. This is used when the current
   * page should refresh when navigating. */
  getPageHref?: undefined | ((pageNumber: number) => string);
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** The initially selected page (default value is 1). */
  initialPage?: number;
  /** The callback function called when an item is selected and the current
   * page should not refresh. */
  onPageChange?: (selected: number) => void;
  /** The total number of pages. */
  pageCount: number;
}
/**
 * A component that provides a navigational list of page items.
 */
export declare const Pagination: ChakraComponent<
  React.ForwardRefExoticComponent<
    PaginationProps & React.RefAttributes<HTMLDivElement>
  >,
  PaginationProps
>;
export default Pagination;
