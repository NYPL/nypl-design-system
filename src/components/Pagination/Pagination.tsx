import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import Link from "../Link/Link";
import { range } from "../../utils/utils";
import generateUUID from "../../helpers/generateUUID";

export interface PaginationProps {
  /** Additional className for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  className?: string;
  /** The current page selected. */
  currentPage: number;
  /** A method that returns a Link component given the target page */
  getPageHref?: (pageNumber: number) => string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** The method to callback when an item is selected. Passes the selected page to the consuming app as an argument. */
  onPageChange?: (selected: number) => void;
  /** The total number of pages. */
  pageCount: number;
}

/** A component that provides a navigational list of page items. */
const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const {
    className,
    currentPage = 1,
    getPageHref,
    id = generateUUID(),
    onPageChange,
    pageCount,
  } = props;
  const styles = useMultiStyleConfig("Pagination", {});
  // If there are 0 or 1 pages, the pagination should not show.
  if (pageCount <= 1) {
    return null;
  }

  if (getPageHref && onPageChange) {
    console.warn(
      "Both onPageHref and onPageChange are passed. Will default to using `onPageHref`."
    );
  }

  const changeUrls =
    typeof getPageHref !== "undefined" && typeof getPageHref === "function";

  const selectPage = (evt: Event, item: number) => {
    const runCallback = (selectedItem: number) => {
      evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);

      if (
        typeof onPageChange !== "undefined" &&
        typeof onPageChange === "function"
      ) {
        onPageChange(selectedItem);
      }
    };

    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    if (currentPage === item) return;

    // Invoke the callback with the new selected item.
    runCallback(item);
  };

  const previousPage = (evt: Event) => {
    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    if (currentPage > 1) {
      selectPage(evt, currentPage - 1);
    }
  };

  const nextPage = (evt: Event) => {
    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    if (currentPage < pageCount) {
      selectPage(evt, currentPage + 1);
    }
  };

  const getPageElement = (item: number) => {
    const pageAttributes = {
      "aria-label": null,
      onClick: !changeUrls ? (evt) => selectPage(evt, item) : undefined,
      role: "button",
      tabIndex: 0,
    };

    pageAttributes["aria-label"] = item ? item : null;

    return (
      <Link
        attributes={{ ...pageAttributes }}
        href={changeUrls ? getPageHref(item) : "#"}
        sx={{
          ...styles.link,
          color: currentPage === item ? "ui.black" : null,
          pointerEvents: currentPage === item ? "none" : null,
        }}
      >
        {item}
      </Link>
    );
  };

  const pagination = (selected: number) => {
    // 1, (2 or ...), pageStart - pageEnd, (next to last item or ...), pageCount
    const pageStart = Math.max(
      3, // if near the beginning, inner pages start at 3
      Math.min(
        // If in the middle, inner pages begin two items before the selected page
        selected - 2,
        // If near the end, count back and show 7 items
        pageCount - 6
      )
    );

    const pageEnd = Math.min(
      // if near the end, inner pages end just before next to last item (or ellipse)
      pageCount - 2,
      Math.max(
        // If in the middle, inner pages end two items after the selected page
        selected + 2,
        // If near the beginning, show the first 7 items
        7
      )
    );
    const truncatedList =
      pageCount < 4
        ? Array.from({ length: pageCount }, (_, i) => i + 1)
        : [
            // list always starts at and displays the first page item
            1,
            // second item will either be item 2 or an ellipse
            pageStart > 3 ? "ellipse-start" : 2,
            // Adding + 1 here since range() doesn't include the last item passed to it
            ...range(pageStart, pageEnd + 1),
            // next to last item will either be an ellipse or the next to last page number
            pageEnd < pageCount - 2 ? "ellipse-end" : pageCount - 1,
            // list always ends at and displays the last page number in the pageCount
            pageCount,
          ];
    const pageItems = truncatedList.map((item) => {
      // if it's a number, render that page item, otherwise return the ellipse
      const itemElement =
        typeof item === "number" ? getPageElement(item) : "...";
      return (
        <Box as="li" key={item} __css={styles.item}>
          {itemElement}
        </Box>
      );
    });

    return pageItems;
  };

  // When at the beginning, disable Previous. When at the end, disable Next.
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === pageCount;

  // Attributes for Previous and Next Buttons
  const prevAttributes = {
    "aria-disabled": prevDisabled ? "true" : null,
    "aria-label": "Previous page",
    role: "button",
    onClick: changeUrls ? undefined : previousPage,
    tabIndex: prevDisabled ? -1 : 0,
  };

  const nextAttributes = {
    "aria-disabled": nextDisabled ? "true" : null,
    "aria-label": "Next page",
    role: "button",
    onClick: changeUrls ? undefined : nextPage,
    tabIndex: nextDisabled ? -1 : null,
  };

  return (
    <Box
      as="nav"
      id={id}
      aria-label="Pagination"
      className={className}
      __css={styles}
    >
      <Box as="ul" __css={styles.list}>
        <Box as="li" key="previous" __css={styles.item}>
          <Link
            attributes={{ ...prevAttributes }}
            href={
              !prevDisabled && changeUrls ? getPageHref(currentPage - 1) : "#"
            }
            sx={{
              ...styles.link,
              color: prevDisabled ? "ui.gray.dark" : null,
              pointerEvents: prevDisabled ? "none" : null,
            }}
          >
            Previous
          </Link>
        </Box>

        {pagination(currentPage)}

        <Box as="li" key="next" __css={styles.item}>
          <Link
            attributes={{
              ...nextAttributes,
            }}
            href={
              !nextDisabled && changeUrls ? getPageHref(currentPage + 1) : "#"
            }
            sx={{
              ...styles.link,
              color: nextDisabled ? "ui.gray.dark" : null,
              pointerEvents: nextDisabled ? "none" : null,
            }}
          >
            Next
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Pagination;
