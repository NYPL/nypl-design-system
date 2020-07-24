import * as React from "react";

import Accordion from "./Accordion";
import { action } from "@storybook/addon-actions";

import Checkbox from "../Checkbox/Checkbox";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";

export default {
    title: "Accordion",
    component: Accordion,
};
const checkboxes = [
    <li>
        <Checkbox
            onChange={action("changed")}
            checkboxId="checkbox-1"
            labelOptions={{
                id: "checkbox-1-label",
                labelContent: <>Checkbox 1</>,
            }}
        ></Checkbox>
    </li>,
    <li>
        <Checkbox
            onChange={action("changed")}
            checkboxId="checkbox-2"
            labelOptions={{
                id: "checkbox-1-label",
                labelContent: <>Checkbox 2</>,
            }}
        ></Checkbox>
    </li>,
    <li>
        <Checkbox
            onChange={action("changed")}
            checkboxId="checkbox-3"
            labelOptions={{
                id: "checkbox-1-label",
                labelContent: <>Checkbox 3</>,
            }}
        ></Checkbox>
    </li>,
];

export const accordionWithCheckboxes = () => (
    <Accordion
        id="accordion"
        accordionLabel="Click to expand"
        labelId="accordionBtn"
    >
        <List type={ListTypes.Unordered} id="checkbox-list">
            {checkboxes}
        </List>{" "}
    </Accordion>
);
