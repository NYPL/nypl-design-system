import * as React from "react";

import Checkbox from "./Checkbox";
import { action } from "@storybook/addon-actions";

export default {
    title: "Checkbox",
    component: Checkbox,
};

export const checkbox = () => (
    <Checkbox
        checkboxId="checkbox"
        labelOptions={{
            id: "label",
            labelContent: <>Label Text</>,
        }}
        onChange={action("changed")}
    />
);
