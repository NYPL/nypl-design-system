import * as React from "react";

import Label from "./Label";

export default {
    title: "Label",
    component: Label,
};

export const label = () => (
    <Label
        id="label-id"
        htmlFor="should-never-be-used-alone"
        requiredHelper={true}
    >
        Lonely
    </Label>
);
