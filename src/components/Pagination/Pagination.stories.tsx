import React from "react";
import { Story } from "@storybook/react/types-6-0";

import Pagination, { PaginationProps } from "./Pagination";

/**
 * PaginationGetPageHref will refresh the browser as a new page is selected.
 * In this example, `getPageHref` creates the `href` attribute for each
 * page URL.
 */
export const PaginationGetPageHref: Story<PaginationProps> = (args) => {
  // This uses the `addon-queryparams` Storybook addon.
  const urlParams = new URLSearchParams(document.location.search);
  const pageParam = urlParams.get("page");
  const getPageNumber = (page: number, pageCount: number) => {
    return page > 0 && page <= pageCount ? page : 1;
  };
  const computedCurrentPage =
    pageParam &&
    Number(pageParam) &&
    getPageNumber(Number(pageParam), args.pageCount);
  const location = window.location;
  // Passing this function into `Pagination` makes the URL to change
  // and refreshes the page.
  const getPageHref = (selectedPage) => {
    const currentStoryId = urlParams.get("id");
    return `${location.origin}?path=/story/${currentStoryId}&page=${selectedPage}`;
  };

  return (
    <Pagination
      pageCount={args.pageCount}
      initialPage={computedCurrentPage || args.initialPage}
      getPageHref={getPageHref}
    />
  );
};

/**
 * PaginationOnPageChange will update the current page to the value that is
 * selected but will not change the URL or refresh the page.
 */
export const PaginationOnPageChange: Story<PaginationProps> = (args) => {
  const onPageChange = (currentPage: number) => {
    console.log(`Current page: ${currentPage}`);
  };

  return (
    <Pagination
      pageCount={args.pageCount}
      initialPage={args.initialPage}
      onPageChange={onPageChange}
    />
  );
};
