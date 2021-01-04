import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";
import { text } from "@storybook/addon-knobs";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconNames, IconRotationTypes } from "../Icons/IconTypes";
import Label from "../Label/Label";
import Pagination from "./Pagination";
import Select from "../Select/Select";

export default {
    title: "Pagination",
    component: Pagination,
    decorators: [withDesign],
};

const selectOptions = (
    <>
        <Label htmlFor="paginationSelect" id={"paginationLabel"}>
            {text("Select Label", "Page ")}
        </Label>
        <Select
            name="Pagination Select"
            id={"paginationSelect"}
            isRequired={false}
            ariaLabel="Pagination Label"
            labelId={"paginationLabel"}
            onBlur={action("blur")}
            onChange={action("changed")}
            selectedOption={"1 of 7"}
        >
            <option aria-selected={true}>
                {text("Option 1 Text", "1 of 7")}
            </option>
            <option aria-selected={false}>
                {text("Option 2 Text", "2 of 7")}
            </option>
            <option aria-selected={false}>
                {text("Option 3 Text", "3 of 7")}
            </option>
            <option aria-selected={false}>
                {text("Option 4 Text", "4 of 7")}
            </option>
            <option aria-selected={false}>
                {text("Option 5 Text", "5 of 7")}
            </option>
            <option aria-selected={false}>
                {text("Option 6 Text", "6 of 7")}
            </option>
            <option aria-selected={false}>
                {text("Option 7 Text", "7 of 7")}
            </option>
        </Select>
    </>
);

const PaginationTemplate = ({ children, ...args }) => (
    <Pagination {...args}>{children}</Pagination>
);

export const pagination = PaginationTemplate.bind({});

pagination.args = {
    previousPage: (
        <Button
            buttonType={ButtonTypes.Secondary}
            onClick={action("Previous clicked")}
        >
            <Icon
                name={IconNames.arrow}
                decorative={true}
                iconRotation={IconRotationTypes.rotate90}
                modifiers={["small", "icon-left"]}
            />
            {text("Previous Button Label", "Previous")}
        </Button>
    ),
    nextPage: (
        <Button
            buttonType={ButtonTypes.Secondary}
            onClick={action("Next clicked")}
        >
            {text("Next Button Label", "Next")}
            <Icon
                name={IconNames.arrow}
                decorative={true}
                iconRotation={IconRotationTypes.rotate270}
                modifiers={["small", "icon-right"]}
            />
        </Button>
    ),
    children: selectOptions,
};

pagination.storyName = "Pagination";
pagination.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932",
    },
};

pagination.argTypes = {
    previousPage: { table: { disable: true } },
    nextPage: { table: { disable: true } },
    children: { table: { disable: true } },
};
