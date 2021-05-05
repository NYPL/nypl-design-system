import * as React from "react";
import { Story } from "@storybook/react";

import Notification, { NotificationProps } from "./Notification";
import { NotificationTypes } from "./NotificationTypes";

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
  notificationType: NotificationTypes.Announcement,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const Warning = Template.bind({});
Warning.storyName = "Warning Notification";

Warning.args = {
  notificationType: NotificationTypes.Warning,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

Announcement.storyName = "Announcement Notification";

export const DismissibleAnnouncement = Template.bind({});

DismissibleAnnouncement.args = {
  notificationType: "announcement",
  dismissible: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

DismissibleAnnouncement.storyName = "Dismissible Notification";
