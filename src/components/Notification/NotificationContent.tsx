import React from "react";

export interface NotificationProps {}

export default function NotificationContent(
  props: React.PropsWithChildren<NotificationProps>
) {
  const { children } = props;

  // const notificationModifiers = modifiers ? modifiers : [];
  // if (!notificationModifiers.find(modifier => modifier === notificationType)) {
  //   notificationModifiers.push(notificationType);
  // }

  return <div className="content">{children}</div>;
}
