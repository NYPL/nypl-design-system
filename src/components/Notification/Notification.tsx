import React, { useState } from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import Icon from "../Icons/Icon";
import { IconColors, IconNames, IconSizes } from "../Icons/IconTypes";
import { NotificationTypes } from "./NotificationTypes";
import generateUUID from "../../helpers/generateUUID";

interface BaseProps {
  /** Optional prop to control text alignment in `NotificationContent` */
  alignText?: boolean;
  /** Optional prop to control horizontal alignment of the `Notification` content */
  centered?: boolean;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional prop to control the coloring of the `Notification` text and the
   * visibility of an applicable icon. */
  notificationType?: NotificationTypes;
}

// Used for `NotificationHeading` and `Notification`
type BasePropsWithoutAlignText = Omit<BaseProps, "alignText">;
// Used for `NotificationContent`
type BasePropsWithoutCentered = Omit<BaseProps, "centered">;

export interface NotificationProps extends BasePropsWithoutAlignText {
  /** Label used to describe the `Notification`'s aside HTML element. */
  ariaLabel?: string;
  /** Additional `className` to add.  */
  className?: string;
  /** Optional prop to control whether a `Notification` can be dismissed
   * (closed) by a user. */
  dismissible?: boolean;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** Optional prop to control the margin around the `Notification` component. */
  noMargin?: boolean;
  /** Content to be rendered in a `NotificationContent` component. */
  notificationContent: string | JSX.Element;
  /** Content to be rendered in a `NotificationHeading` component. */
  notificationHeading?: string;
  /** Prop to display the `Notification` icon. Defaults to `true`. */
  showIcon?: boolean;
}

/**
 * NotificationHeading child-component.
 */
export function NotificationHeading(
  props: React.PropsWithChildren<BasePropsWithoutAlignText>
) {
  const { centered, children, icon, id, notificationType } = props;
  const styles = useMultiStyleConfig("NotificationHeading", {
    centered,
    icon,
    notificationType,
  });
  return (
    <Box as="header" __css={styles}>
      {icon}
      <Heading
        additionalStyles={styles.heading}
        id={`${id}-heading`}
        level={HeadingLevels.Four}
      >
        {children}
      </Heading>
    </Box>
  );
}

/**
 * NotificationContent child-component.
 */
export function NotificationContent(
  props: React.PropsWithChildren<BasePropsWithoutCentered>
) {
  const { alignText, children, icon, notificationType } = props;
  const styles = useMultiStyleConfig("NotificationContent", {
    alignText,
    icon,
    notificationType,
  });
  return (
    <Box __css={styles}>
      {icon}
      <Box __css={styles.content}>{children}</Box>
    </Box>
  );
}

/**
 * Component used to present users with three different levels of notifications:
 * standard, announcement, and warning.
 */
export default function Notification(props: NotificationProps) {
  const {
    ariaLabel,
    centered = false,
    className,
    dismissible = false,
    icon,
    id = generateUUID(),
    noMargin = false,
    notificationContent,
    notificationHeading,
    notificationType = NotificationTypes.Standard,
    showIcon = true,
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  const styles = useMultiStyleConfig("Notification", {
    centered,
    dismissible,
    noMargin,
    notificationType,
  });
  const iconElement = () => {
    const baseIconProps = {
      additionalStyles: styles.icon,
      size: IconSizes.Large,
    };
    // If the icon should not display, return null.
    if (!showIcon) {
      return null;
    }
    // If a custom icon is passed, add specific `Notification` styles.
    if (icon)
      return React.cloneElement(icon, {
        id: `${id}-custom-notification-icon`,
        ...baseIconProps,
      });
    const iconProps = {
      [NotificationTypes.Announcement]: {
        color: IconColors.SectionResearchSecondary,
        name: IconNames.SpeakerNotes,
        title: "Notification announcement icon",
      },
      [NotificationTypes.Standard]: {
        color: IconColors.UiBlack,
        name: IconNames.AlertNotificationImportant,
        title: "Notification standard icon",
      },
      [NotificationTypes.Warning]: {
        color: IconColors.BrandPrimary,
        name: IconNames.ErrorFilled,
        title: "Notification warning icon",
      },
    };
    return (
      <Icon
        id={`${id}-notification-icon`}
        {...baseIconProps}
        {...iconProps[notificationType]}
      />
    );
  };
  const dismissibleButton = dismissible && (
    <Button
      additionalStyles={styles.dismissibleButton}
      attributes={{
        "aria-label": "Close the notification",
      }}
      buttonType={ButtonTypes.Link}
      id={`${id}-notification-dismissible-button`}
      onClick={handleClose}
    >
      <Icon
        id={`${id}-dismissible-notification-icon`}
        name={IconNames.Close}
        size={IconSizes.Large}
        title="Notification close icon"
      />
    </Button>
  );
  const iconElem = iconElement();
  const childHeading = notificationHeading && (
    <NotificationHeading
      centered={centered}
      icon={iconElem}
      id={id}
      notificationType={notificationType}
    >
      {notificationHeading}
    </NotificationHeading>
  );
  // Specific alignment styles for the content.
  const alignText = childHeading && showIcon && (!!icon || !centered);
  const childContent = (
    <NotificationContent
      alignText={alignText}
      icon={!childHeading ? iconElem : null}
      notificationType={notificationType}
    >
      {notificationContent}
    </NotificationContent>
  );

  // If the `Notification` is closed, don't render anything.
  if (!isOpen) {
    return null;
  }
  return (
    <Box
      aria-label={ariaLabel}
      as="aside"
      className={className}
      data-type={notificationType}
      id={id}
      __css={styles}
    >
      <Box __css={styles.container}>
        {childHeading}
        {childContent}
      </Box>
      {dismissibleButton}
    </Box>
  );
}
