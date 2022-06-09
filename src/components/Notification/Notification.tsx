import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Icon, { IconColors, IconNames, IconSizes } from "../Icons/Icon";

export type NotificationTypes = "standard" | "announcement" | "warning";
interface BaseProps {
  /** Optional prop to control text alignment in `NotificationContent` */
  alignText?: boolean;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional prop to control horizontal alignment of the `Notification` content */
  isCentered?: boolean;
  /** Optional prop to control the coloring of the `Notification` text and the
   * visibility of an applicable icon. */
  notificationType?: NotificationTypes;
}

// Used for `NotificationHeading` and `Notification`
type BasePropsWithoutAlignText = Omit<BaseProps, "alignText">;
// Used for `NotificationContent`
type BasePropsWithoutIsCentered = Omit<BaseProps, "isCentered">;

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
export const NotificationHeading = chakra(
  (props: React.PropsWithChildren<BasePropsWithoutAlignText>) => {
    const { children, icon, id, isCentered, notificationType, ...rest } = props;
    const styles = useMultiStyleConfig("NotificationHeading", {
      icon,
      isCentered,
      notificationType,
    });
    return (
      <Box as="header" __css={styles} {...rest}>
        {icon}
        <Heading id={`${id}-heading`} level="four" __css={styles.heading}>
          {children}
        </Heading>
      </Box>
    );
  }
);

/**
 * NotificationContent child-component.
 */
export const NotificationContent = chakra(
  (props: React.PropsWithChildren<BasePropsWithoutIsCentered>) => {
    const { alignText, children, icon, notificationType, ...rest } = props;
    const styles = useMultiStyleConfig("NotificationContent", {
      alignText,
      icon,
      notificationType,
    });
    return (
      <Box __css={styles} {...rest}>
        {icon}
        <Box __css={styles.content}>{children}</Box>
      </Box>
    );
  }
);

/**
 * Component used to present users with three different levels of notifications:
 * standard, announcement, and warning.
 */
export const Notification = chakra((props: NotificationProps) => {
  const {
    ariaLabel,
    className,
    dismissible = false,
    icon,
    id,
    isCentered = false,
    noMargin = false,
    notificationContent,
    notificationHeading,
    notificationType = "standard",
    showIcon = true,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  const styles = useMultiStyleConfig("Notification", {
    dismissible,
    isCentered,
    noMargin,
    notificationType,
  });
  const iconElement = () => {
    const baseIconProps = {
      size: "large" as IconSizes,
      __css: styles.icon,
    };
    // If the icon should not display, return undefined.
    if (!showIcon) {
      return undefined;
    }
    // If a custom icon is passed, add specific `Notification` styles.
    if (icon)
      return React.cloneElement(icon, {
        id: `${id}-custom-notification-icon`,
        ...baseIconProps,
      });
    interface IconProps {
      color: IconColors;
      name: IconNames;
      title: string;
    }
    const iconProps = {
      announcement: {
        color: "section.research.secondary",
        name: "speakerNotes",
        title: "Notification announcement icon",
      } as IconProps,
      standard: {
        color: "ui.black",
        name: "alertNotificationImportant",
        title: "Notification standard icon",
      } as IconProps,
      warning: {
        color: "brand.primary",
        name: "errorFilled",
        title: "Notification warning icon",
      } as IconProps,
    };
    return (
      <Icon
        id={`${id}-notification-icon`}
        {...iconProps[notificationType]}
        {...baseIconProps}
      />
    );
  };
  const dismissibleButton = dismissible && (
    <Button
      aria-label="Close the notification"
      buttonType="link"
      id={`${id}-notification-dismissible-button`}
      onClick={handleClose}
      __css={styles.dismissibleButton}
    >
      <Icon
        id={`${id}-dismissible-notification-icon`}
        name="close"
        size="large"
        title="Notification close icon"
      />
    </Button>
  );
  const iconElem = iconElement();
  const childHeading = notificationHeading && (
    <NotificationHeading
      icon={iconElem}
      id={id}
      isCentered={isCentered}
      notificationType={notificationType}
    >
      {notificationHeading}
    </NotificationHeading>
  );
  // Specific alignment styles for the content.
  const alignText = !!(childHeading && showIcon && (!!icon || !isCentered));
  const childContent = (
    <NotificationContent
      alignText={alignText}
      icon={!childHeading ? iconElem : undefined}
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
      {...rest}
    >
      <Box __css={styles.container}>
        {childHeading}
        {childContent}
      </Box>
      {dismissibleButton}
    </Box>
  );
});

export default Notification;
