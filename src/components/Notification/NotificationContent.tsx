import React from "react";

export interface NotificationProps {}

export default function NotificationContent(
  props: React.PropsWithChildren<NotificationProps>
) {
  const { children } = props;

  return <div className="content">{children}</div>;
}
