import React, { useEffect, useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import Pagination, { PaginationProps } from "./Pagination";

/**
 * PaginationGetPageHref will refresh the browser as a new page is selected.
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
  const getPageHref = (page) => {
    const currentStoryId = urlParams.get("id");
    return `${location.origin}?path=/story/${currentStoryId}&page=${page}`;
  };

  return (
    <Pagination
      pageCount={args.pageCount}
      currentPage={computedCurrentPage || args.currentPage}
      getPageHref={getPageHref}
    />
  );
};

/**
 * PaginationOnPageChange will update the current page to the value that is
 * selected but will not change the URL or refresh the page.
 */
export const PaginationOnPageChange: Story<PaginationProps> = (args) => {
  const [computedCurrentPage, setComputedCurrentPage] = useState(
    args.currentPage
  );
  const onPageChange = (page: number) => setComputedCurrentPage(page);

  // Allows storybook controls to control `currentPage` prop.
  useEffect(() => {
    setComputedCurrentPage(args.currentPage);
  }, [args.currentPage]);

  return (
    <Pagination
      pageCount={args.pageCount}
      currentPage={computedCurrentPage}
      onPageChange={onPageChange}
    />
  );
};
