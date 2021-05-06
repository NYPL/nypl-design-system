import React, { useState } from "react";

import bem from "../../utils/bem";
import { NotificationTypes } from "./NotificationTypes";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

export interface NotificationProps {
  /** ClassName that appears in addition to "notification" */
  className?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Controls the positioning of a Notification component */
  placement?: "sticky" | "block";
  /** Controls the alignment and coloring of notification text and the visibility of an applicable icon */
  notificationType?: NotificationTypes;
  /** Customize icon */
  icon?: React.ReactNode;
  /** Heading for notification */
  heading?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Controls whether a Notification can be dismissed (closed) by a user */
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
    heading,
  } = props;

  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  const handleClose = () => setIsOpen(false);

  const baseClass = "notification";

  const styleProps = { style: {} };
  if (placement) {
    styleProps.style["position"] = placement;

    if (placement === "sticky") styleProps.style["top"] = 0;
  }

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

  if (!icon) modifiers.push("no-icon");

  return (
    <aside
      className={bem(baseClass, notificationModifiers, blockName, [className])}
      id={id}
      {...styleProps}
    >
      {iconElement()}
      <div>
        {heading ? <Heading level={4}>{heading}</Heading> : null}
        {children}
      </div>
      {dismissible ? (
        <Button
          buttonType={ButtonTypes.Link}
          className="dismissible-button"
          onClick={handleClose}
        >
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
