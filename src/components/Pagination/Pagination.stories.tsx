import * as React from "react";
import { Story } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import Pagination, { PaginationProps } from "./Pagination";

export default {
    title: "Pagination",
    component: Pagination,
    decorators: [withDesign],
};

const PaginationTemplate: Story<PaginationProps> = (args) => (
    <Pagination pageCount={args.pageCount} currentPage={args.currentPage} />
);

export const pagination = PaginationTemplate.bind({});

pagination.args = {
    pageCount: 100,
    currentPage: 1,
};

pagination.argTypes = {
    blockName: { table: { disable: true } },
    className: { table: { disable: true } },
    modifiers: { table: { disable: true } },
};

pagination.storyName = "Pagination";
pagination.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932",
    },
};
