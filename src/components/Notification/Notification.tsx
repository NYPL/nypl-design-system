import * as React from "react";

import bem from "../../utils/bem";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

export interface NotificationProps {
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
    icon,
  } = props;
  const baseClass = "notification";

  const styleProps = { style: {} };
  if (position) styleProps.style["position"] = position;
  if (width) styleProps.style["width"] = width;

  const notificationModifiers = modifiers ? modifiers : [];
  if (!notificationModifiers.find(modifier => modifier === style)) {
    notificationModifiers.push(style);
  }

  const iconElement = () => {
    if (icon) return icon;
    switch (style) {
      case "announcement":
        return (
          <Icon decorative={false} className="notification-icon">
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.83315 0H25.4983C27.0565 0 28.3315 1.35 28.3315 3V21C28.3315 22.65 27.0565 24 25.4983 24H5.66629L0 30L0.0141657 3C0.0141657 1.35 1.27492 0 2.83315 0ZM4.49094 21H25.4987V3H2.83355V22.755L3.65517 21.885L4.49094 21ZM5.66611 15H8.49926V18H5.66611V15ZM8.49926 10.5H5.66611V13.5H8.49926V10.5ZM5.66611 6H8.49926V9H5.66611V6ZM18.4156 15H11.3327V18H18.4156V15ZM11.3327 10.5H22.6653V13.5H11.3327V10.5ZM22.6653 6H11.3327V9H22.6653V6Z"
                fill="#377F8B"
              />
            </svg>
          </Icon>
        );
      default:
        return null;
    }
  };

  return (
    <aside
      className={bem(baseClass, notificationModifiers, blockName, [className])}
      id={id}
      {...styleProps}
    >
      {iconElement()}
      {children}
      {dismissible ? (
        <Icon
          modifiers={["xlarge"]}
          decorative={false}
          name={IconNames.close}
        />
      ) : null}
    </aside>
  );
}
