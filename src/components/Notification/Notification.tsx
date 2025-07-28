import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useColorMode,
  useColorModeValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";
import useDSHeading from "../../hooks/useDSHeading";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Icon, { IconColors, IconNames, IconSizes } from "../Icons/Icon";
import { useSafeId } from "../../hooks/useSafeId";

export const notificationVariantsArray = [
  "standard",
  "announcement",
  "warning",
] as const;
export type NotificationVariants = typeof notificationVariantsArray[number];

interface BaseProps extends BoxProps {
  /** Optional prop to control text alignment in `NotificationContent` */
  alignText?: boolean;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** Optional prop to control horizontal alignment of the `Notification` content */
  isCentered?: boolean;
  /** Optional content to be rendered in a `NotificationHeading` component. A
   * string value is used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  notificationHeading?: string | JSX.Element;
  /** Optional prop to control the coloring of the `Notification` text and the
   * visibility of an applicable icon. */
  variant?: NotificationVariants;
  /** Prop to display the `Notification` icon. Defaults to `true`. */
  showIcon?: boolean;
}

// Used for `Notification`
type BasePropsWithoutAlignText = Omit<BaseProps, "alignText">;
// Used for `NotificationHeading`
type NotificationHeadingProps = Omit<BasePropsWithoutAlignText, "showIcon">;
// Used for `NotificationContent`
type NotificationContentProps = Omit<BaseProps, "icon">;

export interface NotificationProps extends BasePropsWithoutAlignText, BoxProps {
  /** Optional prop to control whether a `Notification` can be dismissed
   * (closed) by a user. */
  dismissible?: boolean;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** Content to be rendered in a `NotificationContent` component. */
  notificationContent: string | JSX.Element;
}

/**
 * NotificationHeading child-component.
 */
export const NotificationHeading: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<NotificationHeadingProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  NotificationHeadingProps
> = chakra((props: React.PropsWithChildren<NotificationHeadingProps>) => {
  const { children, icon, id, isCentered, variant, ...rest } = props;
  const styles = useMultiStyleConfig("NotificationHeading", {
    icon,
    isCentered,
    variant,
  });
  // Only if a heading child was passed, then either render the string in the
  // default NotificationHeading h4 with its default styles, or render the
  // custom `Heading` or heading child with the `NotificationHeading` styles.
  const title = children ? (
    typeof children === "string" ? (
      <Heading
        id={`${id}-heading`}
        level="h4"
        size="heading6"
        __css={styles.heading}
      >
        {children}
      </Heading>
    ) : (
      React.cloneElement(children as any, {
        __css: styles.heading,
        size: "heading6",
      })
    )
  ) : undefined;
  const finalTitle = useDSHeading({
    title,
    id,
  });

  return (
    <Box
      as="header"
      data-testid="ds-notificationHeading"
      __css={styles}
      {...rest}
    >
      {icon}
      {children && finalTitle}
    </Box>
  );
});

/**
 * NotificationContent child-component.
 */
export const NotificationContent: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<NotificationContentProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  NotificationContentProps
> = chakra((props: React.PropsWithChildren<NotificationContentProps>) => {
  const {
    alignText,
    children,
    isCentered,
    notificationHeading,
    variant,
    showIcon,
    ...rest
  } = props;
  const styles = useMultiStyleConfig("NotificationContent", {
    alignText,
    isCentered,
    notificationHeading,
    variant,
    showIcon,
  });

  return (
    <Box data-testid="ds-notificationContent" __css={styles} {...rest}>
      {children && <Box __css={styles.content}>{children}</Box>}
    </Box>
  );
});

/**
 * `Notification` is a component used to present users with three different levels
 * of notifications: standard, announcement, and warning.
 */
export const Notification: ChakraComponent<
  React.ForwardRefExoticComponent<
    NotificationProps & React.RefAttributes<HTMLDivElement>
  >,
  NotificationProps
> = chakra(
  forwardRef<HTMLDivElement, NotificationProps>((props, ref?) => {
    const {
      dismissible = false,
      icon,
      id,
      isCentered = false,
      notificationContent,
      notificationHeading,
      variant = "standard",
      showIcon = true,
      ...rest
    } = props;
    const mainId = useSafeId(id);
    const [isOpen, setIsOpen] = useState(true);
    const { colorMode } = useColorMode();
    const handleClose = () => setIsOpen(false);
    const styles = useMultiStyleConfig("Notification", {
      isCentered,
      notificationHeading,
      variant,
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
          id: `${mainId}-custom-notification-icon`,
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
              : "ui.success.primary",
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
            colorMode === "dark" ? "dark.ui.error.primary" : "ui.error.primary",
          name: "errorFilled",
          title: "Notification warning icon",
        } as IconProps,
      };
      return (
        <Icon
          id={`${mainId}-notification-icon`}
          {...iconProps[variant]}
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
        id={`${id}-notification-dismissible-button`}
        onClick={handleClose}
        variant="text"
        __css={styles.dismissibleButton}
      >
        <Icon
          fill={dismissibleButtonIconColor}
          id={`${mainId}-dismissible-icon`}
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
        id={mainId}
        isCentered={isCentered}
        variant={variant}
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
        variant={variant}
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
        as="aside"
        data-testid="ds-notification"
        data-type={variant}
        id={mainId}
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
