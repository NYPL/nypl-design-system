import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Pagination from "./Pagination";

export default {
    title: "Pagination",
    component: Pagination,
    decorators: [withDesign],
};

// paginationDropdownOptions={["1 of 4", "2 of 4", "3 of 4", "4 of 4"]}
// previousPageHandler={action("goToPrevious")}
// nextPageHandler={action("goToNext")}
// currentValue={"1 of 4"}
// onSelectChange={action("selectChange")}
// onSelectBlur={action("selectBlur")}

export const pagination = () => (
    <Pagination
        previousPage={
            <Button
                buttonType={ButtonTypes.Secondary}
                onClick={action("back clicked")}
            >
                Previous
            </Button>
        }
        nextPage={
            <Button
                buttonType={ButtonTypes.Secondary}
                onClick={action("back clicked")}
            >
                Next
            </Button>
        }
    >
        asdf
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
