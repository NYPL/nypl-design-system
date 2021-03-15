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

const PaginationPageHrefTemplate: Story<PaginationProps> = args => {
  const urlParams = new URLSearchParams(document.location.search);
  const pageNumber = Number(urlParams.get("page"));
  const location = window.location;

  const getPageHref = page => {
    const currentStoryId = urlParams.get("id");
    return `${location.origin}?path=/story/${currentStoryId}&page=${page}`;
  };
  console.log("urlParams", urlParams);
  return (
    <Pagination
      pageCount={args.pageCount}
      currentPage={pageNumber}
      getPageHref={getPageHref}
    />
  );
};

export const pagination = PaginationPageHrefTemplate.bind({});

pagination.args = {
  pageCount: 100,
};

pagination.argTypes = {
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  modifiers: { table: { disable: true } },
  currentPage: { table: { disable: true } },
};

pagination.storyName = "Pagination with URL updates";
pagination.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932",
  },
};

const PaginationChangeFunctionTemplate: Story<PaginationProps> = args => {
  const [page, setPage] = useState(args.currentPage);

  const pageUpdate = page => {
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
