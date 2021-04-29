import * as React from "react";

import Notification from "./Notification";

export default {
  title: "Notification",
  component: Notification,
};

export const notification = () => (
  <Notification id="notificationID" position="sticky">
    Notification content
  </Notification>
);

notification.storyName = "Notification";

notification.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A142",
  },
};
