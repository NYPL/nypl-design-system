import {
  Box,
  ChakraComponent,
  chakra,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useState, useRef } from "react";

import Link from "../Link/Link";
import List from "../List/List";
import { range } from "../../utils/utils";

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
export const Pagination: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<PaginationProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<PaginationProps>
> = chakra(
  forwardRef<HTMLDivElement, PaginationProps>((props, ref?) => {
    const {
      className,
      currentPage,
      getPageHref,
      id,
      initialPage = 1,
      onPageChange,
      pageCount,
      ...rest
    } = props;
    const refCurrentPage = useRef(currentPage);
    const [selectedPage, setSelectedPage] = useState<number>(initialPage);
    const styles = useMultiStyleConfig("Pagination", {});
    const previousPageNumber = selectedPage - 1;
    const nextPageNumber = selectedPage + 1;

    // If the parent passes down a new currentPage, and an onPageChange
    // function exists, then set the internal state – selectedPage –
    // to the new currentPage and update the refCurrentPage with that value.
    React.useEffect(() => {
      if (
        onPageChange &&
        currentPage &&
        currentPage !== refCurrentPage.current
      ) {
        setSelectedPage(currentPage);
        refCurrentPage.current = currentPage;
      }
    }, [currentPage, onPageChange]);

    // If there are 0 or 1 page, the pagination should not show.
    if (pageCount <= 1) {
      return null;
    }
    if (getPageHref && onPageChange) {
      console.warn(
        "NYPL Reservoir Pagination: Props for both `getPageHref` and " +
          "`onPageChange` are passed. The component will default to using " +
          "`getPageHref`."
      );
    }

    if (getPageHref && currentPage) {
      console.warn(
        "NYPL Reservoir Pagination: The `currentPage` prop does not work with " +
          "the `getPageHref` prop. Use `currentPage` with `onPageChange` instead."
      );
    }

    // If `getPageHref` was passed, then links should go to a new page.
    const changeUrls =
      typeof getPageHref !== "undefined" && typeof getPageHref === "function";
    /**
     * This function is only called when clicking on a link should
     * not update the URL or refresh the page.
     */
    const handlePageClick = (
      e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>,
      clickedPage: number
    ) => {
      e.preventDefault && e.preventDefault();
      if (selectedPage === clickedPage) return;
      setSelectedPage(clickedPage);
      onPageChange && onPageChange(clickedPage);
    };
    // Select the previous page.
    const previousPage = (
      e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
    ) => {
      if (selectedPage > 1) {
        handlePageClick(e, previousPageNumber);
      }
    };
    // Select the next page.
    const nextPage = (
      e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
    ) => {
      if (selectedPage < pageCount) {
        handlePageClick(e, nextPageNumber);
      }
    };
    /**
     * All `Link` components have similar attributes but we need to differentiate
     * between the "previous", "next", and regular number links.
     * 1. If `getPageHref` is passed, this means that the page refreshes and the
     *    URL changes. In this case, the parent component returns the `href` URL
     *    and the `onClick` callback is undefined.
     * 2. Otherwise, we stay on the same page by setting the `href` attribute to
     *    "#" and call the `onPageChange` prop through the `onClick` callback.
     */
    const getLinkElement = (
      type: "items" | "previous" | "next",
      item?: number
    ) => {
      const isSelectedPage = selectedPage === item;
      // The current page link has different styles.
      const currentStyles = isSelectedPage
        ? {
            color: "ui.typography.body",
            pointerEvent: "none",
            _dark: {
              color: "dark.ui.typography.body",
            },
          }
        : {};
      const allAttrs = {
        items: {
          href: changeUrls ? getPageHref(item as number) : "#",
          attributes: {
            "aria-label": `Page ${item}`,
            "aria-current": isSelectedPage ? "page" : null,
            onClick: changeUrls
              ? undefined
              : (
                  e: React.MouseEvent<
                    HTMLDivElement | HTMLAnchorElement,
                    MouseEvent
                  >
                ) => handlePageClick(e, item as number),
          },
          text: item,
        },
        previous: {
          href: changeUrls ? getPageHref(previousPageNumber) : "#",
          attributes: {
            "aria-label": "Previous page",
            onClick: changeUrls ? undefined : previousPage,
          },
          text: "Previous",
        },
        next: {
          href: changeUrls ? getPageHref(nextPageNumber) : "#",
          attributes: {
            "aria-label": "Next page",
            onClick: changeUrls ? undefined : nextPage,
          },
          text: "Next",
        },
      };
      const linkAttrs = allAttrs[type];
      return (
        <Link
          href={linkAttrs.href}
          id={`${id}-${linkAttrs.text}`}
          {...linkAttrs.attributes}
          __css={{
            ...styles.link,
            ...currentStyles,
          }}
        >
          {linkAttrs.text}
        </Link>
      );
    };

    /**
     * This function returns an array of `li` elements with numbers based on the
     * total pages that `Pagination` should display. When there are many pages to
     * display, ellipsis are shown to signify that the intermediate page numbers
     * are hidden.
     * For a small number of pages, the array will be simple.
     * For a large number of pages, the resulting array will be in the shape of:
     * [
     *    1, this always displays
     *    2 or an ellipsis,
     *    a range of numbers in the middle of the total count,
     *    pageCount - 1 or an ellipsis,
     *    pageCount, the total number of pages
     * ]
     */
    const getPaginationNumbers = (selected: number) => {
      // Where should the middle range of numbers start at?
      const middleRangeStart = Math.max(
        // Start at three if the current page is near the beginning.
        3,
        Math.min(
          // If the current page is in the middle, start the range
          // one number before the current page.
          selected - 1,
          // If the current page is near the end, show the last five items.
          pageCount - 4
        )
      );
      // Where should the middle range of numbers end at?
      const middleRangeEnd = Math.min(
        // If the current page is near the end, end the range
        // two place before the last page number.
        pageCount - 2,
        Math.max(
          // If the current page is in the middle, end the range
          // one number after the current page.
          selected + 1,
          // If the current page is near the end, show the first five items.
          5
        )
      );
      const itemList =
        pageCount < 4
          ? // Get a short array with 2 or 3 items: [1, 2] or [1, 2, 3]
            Array.from({ length: pageCount }, (_, i) => i + 1)
          : // Otherwise, create the longer array of items.
            [
              // Always display the first page.
              1,
              // The second item will be 2 or an ellipse.
              middleRangeStart > 3 ? "ellipse-start" : 2,
              // The middle range of page numbers to display.
              // Add +1 to the end since range() doesn't include the last number.
              ...range(middleRangeStart, middleRangeEnd + 1),
              // The next to last item will be the next to last
              // number or an ellipse.
              middleRangeEnd < pageCount - 2 ? "ellipse-end" : pageCount - 1,
              // Always display the last page.
              pageCount,
            ];
      // If it's a number, render an `li` element with a link page item,
      // otherwise return the `li` with the ellipse for a break.
      const pageLiItems = itemList.map((item) => {
        const itemElement =
          typeof item === "number" ? getLinkElement("items", item) : "...";
        return <li key={item}>{itemElement}</li>;
      });

      return pageLiItems;
    };

    // Don't display the previous link when you're on the first page.
    const previousLiLink = selectedPage !== 1 && (
      <li key="previous">{getLinkElement("previous")}</li>
    );
    // Don't display the next link when you're on the last page.
    const nextLiLink = selectedPage !== pageCount && (
      <li key="next">{getLinkElement("next")}</li>
    );

    return (
      <Box
        as="nav"
        id={id}
        aria-label="Pagination"
        role="navigation"
        className={className}
        ref={ref}
        __css={styles}
        {...rest}
      >
        <List type="ul" inline noStyling id={`${id}-list`}>
          {previousLiLink}
          {getPaginationNumbers(selectedPage)}
          {nextLiLink}
        </List>
      </Box>
    );
  })
);

export default Pagination;
