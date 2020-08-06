import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";

import Button from "../Button/Button";
import { ButtonTypes, ButtonIconPositions } from "../Button/ButtonTypes";
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
                Previous
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
                Next
            </Button>
        }
    >
        <Label htmlFor="paginationSelect" id={"paginationLabel"}>
            Page
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
            <option aria-selected={true}>1 of 7</option>
            <option aria-selected={false}>2 of 7</option>
            <option aria-selected={false}>3 of 7</option>
            <option aria-selected={false}>4 of 7</option>
            <option aria-selected={false}>5 of 7</option>
            <option aria-selected={false}>6 of 7</option>
            <option aria-selected={false}>7 of 7</option>
        </Select>
    </Pagination>
);

pagination.story = {
    name: "Pagination",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17226%3A932",
        },
    },
};
