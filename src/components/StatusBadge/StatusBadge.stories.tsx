import * as React from "react";

import StatusBadge from "./StatusBadge";
import bem from "../../utils/bem";
import { withDesign } from "storybook-addon-designs";
import { select, text } from "@storybook/addon-knobs";

export default {
    title: "Status Badge",
    component: StatusBadge,
    decorators: [withDesign],
};

export const statusBadge = () => (
    <StatusBadge level={select(
        "Status of Badge",
        ["low", "medium", "high"],
        "low"
    )}>
        {text("Status Badge Text", "Location is temporarily closed")}
    </StatusBadge>
);

statusBadge.storyName = "Status Badge";
statusBadge.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/QonD3Efc5SjEDUuyQleqkPTq/Locations?node-id=2116%3A84904",
    },
};
