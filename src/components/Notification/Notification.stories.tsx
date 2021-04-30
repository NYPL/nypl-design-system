import * as React from "react";
import { Meta, Story } from "@storybook/react";

import Notification, { NotificationProps } from "./Notification";

export default {
  title: "Notification",
  component: Notification,
};

const Template: Story<NotificationProps> = args => <Notification {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Notification content",
};

Default.storyName = "Default Notification";

Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A142",
  },
};

export const Announcement = Template.bind({});

Announcement.args = {
  style: "announcement",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

Announcement.storyName = "Announcement Notification";
