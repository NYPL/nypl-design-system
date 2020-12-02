import * as React from "react";

import { Story } from "@storybook/react/types-6-0";
import StatusBadge, { StatusBadgeProps } from "./StatusBadge";
import bem from "../../utils/bem";
import { withDesign } from "storybook-addon-designs";

export default {
    title: "Status Badge",
    component: StatusBadge,
    decorators: [withDesign],
};

/*export const statusBadge = () => (
    <StatusBadge level={select(
        "Status of Badge",
        ["low", "medium", "high"],
        "low"
    )}>
        {text("Status Badge Text", "Location is temporarily closed")}
    </StatusBadge>
);*/

const StatusBadgeTemplate: Story<StatusBadgeProps> = (args) => (
    <StatusBadge {...args} />
);

export const statusBadge = StatusBadgeTemplate.bind({});

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
statusBadge.args = {
    statusBadgeText: "Click to expand",
};

statusBadge.storyName = "Status Badge";
statusBadge.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0",
    },
};
