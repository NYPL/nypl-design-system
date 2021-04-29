import * as React from "react";
import bem from "../../utils/bem";

interface NotificationProps {
  /** ClassName that appears in addition to "card" */
  className?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /**  */
  position?: "sticky" | "block";
  /**  */
  width?: string;
  /**  */
  style?: "standard" | "announcement" | "warning";
  /**  */
  icon?: React.ReactNode;
  /**  */
  heading?: React.ReactNode;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /**  */
  dismissible?: boolean;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
}

export default function Notification(
  props: React.PropsWithChildren<NotificationProps>
) {
  const {
    blockName,
    children,
    className,
    position = "sticky",
    style = "standard",
    width,
    id,
    modifiers = [],
    dismissible = false,
  } = props;
  const baseClass = "notification";

  const styleProps = { style: {} };
  if (position) styleProps.style["position"] = position;
  if (width) styleProps.style["width"] = width;

  const notificationModifiers = modifiers ? modifiers : [];
  if (!notificationModifiers.find(modifier => modifier === style)) {
    notificationModifiers.push(style);
  }

  return (
    <div
      className={bem(baseClass, notificationModifiers, blockName, [className])}
      id={id}
      {...styleProps}
    >
      {children}
    </div>
  );
}
