import React, { useEffect, useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import Pagination, { PaginationProps } from "./Pagination";
import { withQuery } from "@storybook/addon-queryparams";

export default {
  title: "Pagination",
  component: Pagination,
  decorators: [withDesign, withQuery],
};

const getPageNumber = (page: number, pageCount: number) => {
  return page > 0 && page < pageCount ? page : 1;
};

const PaginationPageHrefTemplate: Story<PaginationProps> = args => {
  const urlParams = new URLSearchParams(document.location.search);
  const pageParam = urlParams.get("page");
  const pageNumber =
    pageParam &&
    Number(pageParam) &&
    getPageNumber(Number(pageParam), args.pageCount);

  const location = window.location;

  console.log("pageNumber", pageNumber);
  const getPageHref = page => {
    const currentStoryId = urlParams.get("id");
    return `${location.origin}?path=/story/${currentStoryId}&page=${page}`;
  };
  return (
    <Pagination
      pageCount={args.pageCount}
      currentPage={pageNumber}
      getPageHref={getPageHref}
    />
  );
};

export const paginationUrlHref = PaginationPageHrefTemplate.bind({});

paginationUrlHref.args = {
  currentPage: 4,
  pageCount: 100,
};

paginationUrlHref.argTypes = {
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  modifiers: { table: { disable: true } },
  currentPage: { table: { disable: true } },
};

paginationUrlHref.storyName = "Pagination with URL updates";
paginationUrlHref.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932",
  },
};

const PaginationChangeFunctionTemplate: Story<PaginationProps> = args => {
  const [page, setPage] = useState(args.currentPage);

  const pageUpdate = (page: number) => {
    setPage(page);
    console.log(`Changed. Current page is ${page}`);
  };

  // Allows storybook controls to control currentPage prop.
  useEffect(() => {
    setPage(args.currentPage);
  }, [args.currentPage]);

  return (
    <Pagination
      pageCount={args.pageCount}
      currentPage={page}
      onPageChange={pageUpdate}
    />
  );
};

export const paginationOnClick = PaginationChangeFunctionTemplate.bind({});

paginationOnClick.args = {
  pageCount: 100,
  currentPage: 7,
};

paginationOnClick.argTypes = {
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  modifiers: { table: { disable: true } },
};
paginationOnClick.storyName = "Pagination with unchanging URL";
