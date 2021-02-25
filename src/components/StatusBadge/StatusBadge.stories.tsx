import * as React from "react";

import { Story } from "@storybook/react/types-6-0";
import StatusBadge, { StatusBadgeProps } from "./StatusBadge";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Status Badge",
  component: StatusBadge,
  decorators: [withDesign],
};

const StatusBadgeTemplate: Story<StatusBadgeProps> = args => (
  <StatusBadge {...args} />
);

export const statusBadge = StatusBadgeTemplate.bind({});

// The `args` allow these props to be updated in the UI through the
// "Controls" tab.
statusBadge.args = {
  children: "Location is temporarily closed",
};

statusBadge.storyName = "Status Badge";
statusBadge.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0",
  },
};
