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
  /** Optional prop to control the coloring of the `Notification` text and the
   * visibility of an applicable icon. */
  notificationType?: NotificationTypes;
}

// Used for `NotificationHeading` and `Notification`
type BasePropsWithoutAlignText = Omit<BaseProps, "alignText">;
// Used for `NotificationContent`
type BasePropsWithoutCentered = Omit<BaseProps, "centered">;

export interface NotificationProps extends BasePropsWithoutAlignText {
  /** Additional `className` to add.  */
  className?: string;
  /** Optional prop to control whether a `Notification` can be dismissed
   * (closed) by a user. */
  dismissible?: boolean;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional prop to control the margin around the `Notification` component. */
  noMargin?: boolean;
  /** Content to be rendered in a `NotificationContent` component. */
  notificationContent: string | JSX.Element;
  /** Content to be rendered in a `NotificationHeading` component. */
  notificationHeading?: string;
}

/**
 * NotificationHeading child-component.
 */
export function NotificationHeading(
  props: React.PropsWithChildren<BasePropsWithoutAlignText>
) {
  const { centered, children, icon, notificationType } = props;
  const styles = useMultiStyleConfig("NotificationHeading", {
    centered,
    notificationType,
  });
  return (
    <Box as="header" __css={styles}>
      {icon}
      <Heading level={HeadingLevels.Four} additionalStyles={styles.heading}>
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
    centered = false,
    className,
    dismissible = false,
    icon,
    id = generateUUID(),
    noMargin = false,
    notificationContent,
    notificationHeading,
    notificationType = NotificationTypes.Standard,
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  const styles = useMultiStyleConfig("Notification", {
    centered,
    noMargin,
    notificationType,
  });
  const iconElement = () => {
    const baseIconProps = {
      decorative: false,
      size: IconSizes.Large,
      additionalStyles: styles.icon,
    };
    // If a custom icon is passed, add specific `Notification` styles.
    if (icon)
      return React.cloneElement(icon, {
        id: `${id}-custom-notification-icon`,
        ...baseIconProps,
      });
    const iconProps = {
      [NotificationTypes.Announcement]: {
        name: IconNames.SpeakerNotes,
        color: IconColors.SectionResearchSecondary,
      },
      [NotificationTypes.Warning]: {
        name: IconNames.ErrorFilled,
        color: IconColors.BrandPrimary,
      },
    };
    return notificationType !== NotificationTypes.Standard ? (
      <Icon
        id={`${id}-notification-icon`}
        {...baseIconProps}
        {...iconProps[notificationType]}
      />
    ) : null;
  };
  const dismissibleButton = dismissible && (
    <Button
      buttonType={ButtonTypes.Link}
      onClick={handleClose}
      additionalStyles={styles.dismissibleButton}
    >
      <Icon
        id={`${id}-notification-dismissible-icon`}
        decorative={false}
        name={IconNames.Close}
        size={IconSizes.Large}
      />
    </Button>
  );
  const iconElem = iconElement();
  const childHeading = notificationHeading && (
    <NotificationHeading
      centered={centered}
      icon={iconElem}
      notificationType={notificationType}
    >
      {notificationHeading}
    </NotificationHeading>
  );
  // Specific alignment styles for the content.
  const alignText =
    childHeading &&
    (!!icon || (notificationType !== NotificationTypes.Standard && !centered));
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
      as="aside"
      id={id}
      className={className}
      __css={styles}
      data-type={notificationType}
    >
      <Box __css={styles.container}>
        {childHeading}
        {childContent}
      </Box>
      {dismissibleButton}
    </Box>
  );
}
