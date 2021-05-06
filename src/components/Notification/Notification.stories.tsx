import * as React from "react";
import { Story } from "@storybook/react";

import Notification, { NotificationProps } from "./Notification";
import { NotificationTypes } from "./NotificationTypes";
import { AccordionAsFAQSet } from "../Accordion/Accordion.stories";

export default {
  title: "Notification",
  component: Notification,
};

const Template: Story<NotificationProps> = args => <Notification {...args} />;

const figmaParameter = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A142",
  },
};

const commonArgTypes = {
  placement: {
    defaultValue: "sticky",
  },
};

export const Default = Template.bind({});
Default.args = {
  children: "Notification content",
};
Default.argTypes = {
  notificationType: {
    defaultValue: "standard",
  },
  ...commonArgTypes,
};
Default.storyName = "Default Notification";
Default.parameters = figmaParameter;

export const Announcement = Template.bind({});
Announcement.storyName = "Announcement with Heading";
Announcement.args = {
  notificationType: NotificationTypes.Announcement,
  heading: "New Announcement",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
Announcement.argTypes = commonArgTypes;
Announcement.parameters = figmaParameter;

export const Warning = Template.bind({});
Warning.storyName = "Warning Notification with link";
Warning.args = {
  notificationType: NotificationTypes.Warning,
  children: (
    <>
      Lorem ipsum dolor sit amet, <a href="/">consectetur adipiscing elit</a>,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </>
  ),
};
Warning.argTypes = commonArgTypes;
Warning.parameters = figmaParameter;

export const DismissibleAnnouncement = Template.bind({});
DismissibleAnnouncement.storyName = "Dismissible Notification";
DismissibleAnnouncement.args = {
  notificationType: "announcement",
  dismissible: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
DismissibleAnnouncement.parameters = figmaParameter;
DismissibleAnnouncement.argTypes = commonArgTypes;

export const NotificationInContext = () => (
  <div style={{ height: "300px" }}>
    <Notification>Notification Content</Notification>
    <AccordionAsFAQSet {...AccordionAsFAQSet.args} count={10} />
  </div>
);

NotificationInContext.parameters = figmaParameter;
