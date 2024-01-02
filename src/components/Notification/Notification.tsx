import {
  Box,
  chakra,
  useColorMode,
  useColorModeValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";
import useDSHeading from "../../hooks/useDSHeading";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Icon, { IconColors, IconNames, IconSizes } from "../Icons/Icon";

export const notificationTypesArray = [
  "standard",
  "announcement",
  "warning",
] as const;
export type NotificationTypes = typeof notificationTypesArray[number];

interface BaseProps {
  /** Optional prop to control text alignment in `NotificationContent` */
  alignText?: boolean;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional prop to control horizontal alignment of the `Notification` content */
  isCentered?: boolean;
  /** Optional content to be rendered in a `NotificationHeading` component. A
   * string value is used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  notificationHeading?: string | JSX.Element;
  /** Optional prop to control the coloring of the `Notification` text and the
   * visibility of an applicable icon. */
  notificationType?: NotificationTypes;
  /** Prop to display the `Notification` icon. Defaults to `true`. */
  showIcon?: boolean;
}

// Used for `NotificationHeading`
type NotificationHeadingProps = Omit<BasePropsWithoutAlignText, "showIcon">;
// Used for `NotificationContent`
type NotificationContentProps = Omit<BaseProps, "icon">;

// Used for `Notification`
type BasePropsWithoutAlignText = Omit<BaseProps, "alignText">;

export interface NotificationProps extends BasePropsWithoutAlignText {
  /** Label used to describe the `Notification`'s aside HTML element. */
  ariaLabel?: string;
  /** Additional `className` to add. */
  className?: string;
  /** Optional prop to control whether a `Notification` can be dismissed
   * (closed) by a user. */
  dismissible?: boolean;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** Optional prop to control the margin around the `Notification` component. */
  noMargin?: boolean;
  /** Content to be rendered in a `NotificationContent` component. */
  notificationContent: string | JSX.Element;
}

/**
 * NotificationHeading child-component.
 */
export const NotificationHeading: React.FC<any> = chakra(
  (props: React.PropsWithChildren<NotificationHeadingProps>) => {
    const { children, icon, id, isCentered, notificationType, ...rest } = props;
    const styles = useMultiStyleConfig("NotificationHeading", {
      icon,
      isCentered,
      notificationType,
    });
    // Only if a heading child was passed, then either render the string in the
    // default NotificationHeading h4 with its default styles, or render the
    // custom `Heading` or heading child with the `NotificationHeading` styles.
    const title = children ? (
      typeof children === "string" ? (
        <Heading
          id={`${id}-heading`}
          level="h4"
          noSpace
          size="heading6"
          __css={styles.heading}
        >
          {children}
        </Heading>
      ) : (
        React.cloneElement(children as any, {
          __css: styles.heading,
          noSpace: true,
          size: "heading6",
        })
      )
    ) : undefined;
    const finalTitle = useDSHeading({
      title,
      id,
    });

    return (
      <Box as="header" __css={styles} {...rest}>
        {icon}
        {children && finalTitle}
      </Box>
    );
  }
);

/**
 * NotificationContent child-component.
 */
export const NotificationContent: React.FC<any> = chakra(
  (props: React.PropsWithChildren<NotificationContentProps>) => {
    const {
      alignText,
      children,
      isCentered,
      notificationHeading,
      notificationType,
      showIcon,
      ...rest
    } = props;
    const styles = useMultiStyleConfig("NotificationContent", {
      alignText,
      isCentered,
      notificationHeading,
      notificationType,
      showIcon,
    });

    return (
      <Box __css={styles} {...rest}>
        {children && <Box __css={styles.content}>{children}</Box>}
      </Box>
    );
  }
);

/**
 * Component used to present users with three different levels of notifications:
 * standard, announcement, and warning.
 */
export const Notification: React.FC<any> = chakra(
  forwardRef<HTMLDivElement, NotificationProps>((props, ref?) => {
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
    const { colorMode } = useColorMode();
    const handleClose = () => setIsOpen(false);
    const styles = useMultiStyleConfig("Notification", {
      isCentered,
      noMargin,
      notificationHeading,
      notificationType,
      showIcon,
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
          color:
            colorMode === "dark"
              ? "dark.ui.success.primary"
              : "section.research.secondary",
          name: "speakerNotes",
          title: "Notification announcement icon",
        } as IconProps,
        standard: {
          color: colorMode === "dark" ? "ui.status.primary" : "ui.black",
          name: "alertNotificationImportant",
          title: "Notification standard icon",
        } as IconProps,
        warning: {
          color:
            colorMode === "dark" ? "dark.ui.error.primary" : "brand.primary",
          name: "errorFilled",
          title: "Notification warning icon",
        } as IconProps,
      };
      return (
        <Icon
          className="notification-icon"
          id={`${id}-notification-icon`}
          {...iconProps[notificationType]}
          {...baseIconProps}
        />
      );
    };
    /** Setting the icon color in the styles is not working, so we need to
     * explicitly override the icon color directly on the component. */
    const dismissibleButtonIconColor = useColorModeValue(
      "ui.black",
      "dark.ui.typography.heading"
    );
    const dismissibleButton = dismissible && (
      <Button
        aria-label="Close the notification"
        buttonType="text"
        id={`${id}-notification-dismissible-button`}
        onClick={handleClose}
        __css={styles.dismissibleButton}
      >
        <Icon
          fill={dismissibleButtonIconColor}
          id={`${id}-dismissible-notification-icon`}
          name="close"
          size="large"
          title="Notification close icon"
        />
      </Button>
    );
    const iconElem = iconElement();
    const childHeading = (notificationHeading || showIcon) && (
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
        isCentered={isCentered}
        notificationHeading={notificationHeading}
        notificationType={notificationType}
        showIcon={showIcon}
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
        ref={ref}
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
  })
);

export default Notification;
