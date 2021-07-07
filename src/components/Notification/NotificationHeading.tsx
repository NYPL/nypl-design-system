import React from "react";
import Heading from "../Heading/Heading";

export interface NotificationProps {}

export default function NotificationHeading(
  props: React.PropsWithChildren<NotificationProps>
) {
  const { children } = props;

  return <Heading level={4}>{children}</Heading>;
}
