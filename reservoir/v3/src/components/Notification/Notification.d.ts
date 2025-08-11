import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
export declare const notificationTypesArray: readonly [
  "standard",
  "announcement",
  "warning"
];
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
type NotificationHeadingProps = Omit<BasePropsWithoutAlignText, "showIcon">;
type NotificationContentProps = Omit<BaseProps, "icon">;
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
export declare const NotificationHeading: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<NotificationHeadingProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  NotificationHeadingProps
>;
/**
 * NotificationContent child-component.
 */
export declare const NotificationContent: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<NotificationContentProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  NotificationContentProps
>;
/**
 * Component used to present users with three different levels of notifications:
 * standard, announcement, and warning.
 */
export declare const Notification: ChakraComponent<
  React.ForwardRefExoticComponent<
    NotificationProps & React.RefAttributes<HTMLDivElement>
  >,
  NotificationProps
>;
export default Notification;
