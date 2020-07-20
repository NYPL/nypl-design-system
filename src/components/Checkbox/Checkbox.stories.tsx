import * as React from "react";

import Checkbox from "./Checkbox";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";

export default {
    title: "Checkbox",
    component: Checkbox,
};

export const checkbox = () => (
    <Checkbox
        checkboxId="checkbox"
        labelOptions={{
            id: "label",
            labelContent: <>{text("Label Text", "Label Text")}</>,
        }}
        isSelected={boolean("isSelected", false)}
        onChange={action("changed")}
    />
);
