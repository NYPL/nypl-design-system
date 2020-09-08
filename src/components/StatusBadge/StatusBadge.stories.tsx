import * as React from "react";
import bem from "../../utils/bem";
import { withDesign } from "storybook-addon-designs";
import { select, text } from "@storybook/addon-knobs";

export default {
    title: "Status Badge",
    decorators: [withDesign],
};

export const StatusBadge = () => (
    <div
        className={bem("status-badge", [
            select("Status of Badge", ["inactive", "warning"], "warning"),
        ])}
    >
        {text("Status Badge Text", "Location is temporarily closed")}
    </div>
);

StatusBadge.storyName = "Status Badge";
StatusBadge.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/QonD3Efc5SjEDUuyQleqkPTq/Locations?node-id=2116%3A84904",
    },
};
