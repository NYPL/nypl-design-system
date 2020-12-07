import * as React from "react";

import Dropdown from "../Dropdown/Dropdown";
import { text, select } from "@storybook/addon-knobs";

export default {
    title: "Dropdown",
    component: Dropdown,
};

export const dropdown = () => (
    <div style={{ width: "500px" }}>
        <Dropdown options={["bugs", "fish"]}></Dropdown>
    </div>
);
