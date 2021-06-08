import React from "react";
import Heading from "../Heading/Heading";

export interface NotificationProps {}

export default function NotificationHeading(
  props: React.PropsWithChildren<NotificationProps>
) {
  const { children } = props;

  // const notificationModifiers = modifiers ? modifiers : [];
  // if (!notificationModifiers.find(modifier => modifier === notificationType)) {
  //   notificationModifiers.push(notificationType);
  // }

  return <Heading level={4}>{children}</Heading>;
}
