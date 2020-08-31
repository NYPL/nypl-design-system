import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";
import { text } from "@storybook/addon-knobs";

import Button from "../Button/Button";
import { ButtonTypes, ButtonIconPositions } from "../Button/ButtonTypes";
import { IconNames, IconRotationTypes } from "../Icons/IconTypes";
import Label from "../Label/Label";
import Pagination from "./Pagination";
import Select from "../Select/Select";

export default {
    title: "Pagination",
    component: Pagination,
    decorators: [withDesign],
};

export const pagination = () => (
    <Pagination
        previousPage={
            <Button
                buttonType={ButtonTypes.Secondary}
                onClick={action("Previous clicked")}
                iconDecorative={true}
                iconName={IconNames.arrow}
                iconPosition={ButtonIconPositions.Left}
                iconRotation={IconRotationTypes.rotate90}
            >
                {text("Previous Button Label", "Previous")}
            </Button>
        }
        nextPage={
            <Button
                buttonType={ButtonTypes.Secondary}
                onClick={action("Next clicked")}
                iconDecorative={true}
                iconName={IconNames.arrow}
                iconPosition={ButtonIconPositions.Right}
                iconRotation={IconRotationTypes.rotate270}
            >
                {text("Next Button Label", "Next")}
            </Button>
        }
    >
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
    </Pagination>
);

pagination.storyName = "Pagination";
pagination.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932",
    },
};
