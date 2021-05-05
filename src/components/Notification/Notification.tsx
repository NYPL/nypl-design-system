import * as React from "react";

import bem from "../../utils/bem";
import { NotificationTypes } from "./NotificationTypes";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

export interface NotificationProps {
  /** ClassName that appears in addition to "card" */
  className?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /**  */
  placement?: "sticky" | "block";
  /**  */
  notificationType?: NotificationTypes;
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
    placement = "sticky",
    notificationType = "standard",
    id,
    modifiers = [],
    dismissible = false,
    icon,
  } = props;
  const baseClass = "notification";

  const styleProps = { style: {} };
  if (placement) styleProps.style["position"] = placement;

  const notificationModifiers = modifiers ? modifiers : [];
  if (!notificationModifiers.find(modifier => modifier === notificationType)) {
    notificationModifiers.push(notificationType);
  }

  const iconElement = () => {
    if (icon) return icon;
    switch (notificationType) {
      // just using placeholders until the necessary icons are added
      case "announcement":
        return (
          <Icon
            decorative={false}
            className="notification-icon"
            name={IconNames.headset}
            modifiers={["medium"]}
          />
        );
      case "warning":
        return (
          <Icon
            decorative={false}
            className="notification-icon"
            name={IconNames.clock}
            modifiers={["medium"]}
          />
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
        <Button buttonType={ButtonTypes.Link} className="dismissible-button">
          <Icon
            modifiers={["small"]}
            decorative={false}
            name={IconNames.close}
          />
        </Button>
      ) : null}
    </aside>
  );
}
