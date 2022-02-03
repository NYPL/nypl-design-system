import React, { useState } from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import Link from "../Link/Link";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";
import { range } from "../../utils/utils";
import generateUUID from "../../helpers/generateUUID";

export interface PaginationProps {
  /** Additional className. */
  className?: string;
  /** The callback function that takes a page number and returns a string
   * to use for a link's `href` attribute. This is used when the current
   * page should refresh when navigating. */
  getPageHref?: undefined | ((pageNumber: number) => string);
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** The current page selected. */
  initialPage: number;
  /** The callback function called when an item is selected and the current
   * page should not refresh. */
  onPageChange?: (selected: number) => void;
  /** The total number of pages. */
  pageCount: number;
}

/**
 * A component that provides a navigational list of page items.
 */
const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const {
    className,
    getPageHref,
    id = generateUUID(),
    initialPage = 1,
    onPageChange = () => {},
    pageCount,
  } = props;
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const styles = useMultiStyleConfig("Pagination", {});
  const previousPageNumber = currentPage - 1;
  const nextPageNumber = currentPage + 1;

  // If there are 0 or 1 page, the pagination should not show.
  if (pageCount <= 1) {
    return null;
  }
  if (getPageHref && onPageChange) {
    console.warn(
      "Props for both `getPageHref` and `onPageChange` are passed. Will default to using `getPageHref`."
    );
  }

  // If `getPageHref` was passed, then links should go to a new page.
  const changeUrls =
    typeof getPageHref !== "undefined" && typeof getPageHref === "function";
  /**
   * This function is only called when clicking on a link should
   * not update the URL or refresh the page.
   */
  const selectPage = (e: Event, selectedPage: number) => {
    e.preventDefault && e.preventDefault();
    if (currentPage === selectedPage) return;
    setCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };
  // Select the previous page.
  const previousPage = (e: Event) => {
    if (currentPage > 1) {
      selectPage(e, previousPageNumber);
    }
  };
  // Select the next page.
  const nextPage = (e: Event) => {
    if (currentPage < pageCount) {
      selectPage(e, nextPageNumber);
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
  const getLinkElement = (type: string, item?: number) => {
    const isCurrentPage = currentPage === item;
    // The current page link has different styles.
    const currentStyles = isCurrentPage
      ? {
          color: "ui.black",
          pointerEvent: "none",
        }
      : {};
    const allAttrs = {
      items: {
        href: changeUrls ? getPageHref(item) : "#",
        attributes: {
          "aria-label": `Page ${item}`,
          "aria-current": isCurrentPage ? "page" : null,
          onClick: changeUrls ? undefined : (e) => selectPage(e, item),
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
        additionalStyles={{
          ...styles.link,
          ...currentStyles,
        }}
        attributes={linkAttrs.attributes}
        href={linkAttrs.href}
        id={`${id}-${linkAttrs.text}`}
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
  const previousLiLink = currentPage !== 1 && (
    <li key="previous">{getLinkElement("previous")}</li>
  );
  /// Don't display the next link when you're on the last page.
  const nextLiLink = currentPage !== pageCount && (
    <li key="next">{getLinkElement("next")}</li>
  );

  return (
    <Box
      as="nav"
      id={id}
      aria-label="Pagination"
      role="navigation"
      className={className}
      __css={styles}
    >
      <List type={ListTypes.Unordered} inline noStyling id={`${id}-list`}>
        {previousLiLink}
        {getPaginationNumbers(currentPage)}
        {nextLiLink}
      </List>
    </Box>
  );
};

export default Pagination;
