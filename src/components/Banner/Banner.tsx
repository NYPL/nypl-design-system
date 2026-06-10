import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";
import {
  messageVariantsArray,
  bgColorsArray,
  highlightColorsArray,
} from "../../theme/sharedTypes";

import Button from "../Button/Button";
import Heading, { HeadingSizes } from "../Heading/Heading";
import Icon, { IconProps } from "../Icons/Icon";
import { useSafeId } from "../../hooks/useSafeId";

export type BannerVariants = typeof messageVariantsArray[number];
export type BannerBgColors = typeof bgColorsArray[number];
export type BannerHighlightColors = typeof highlightColorsArray[number];

export interface BannerProps extends Omit<BoxProps, "content"> {
  /** Used to set the color of the background for the full component.
   * Refer to how color values are defined and typed in the DS Icon component. */
  backgroundColor?: BannerBgColors;
  /** Used to populate the body content of the component. */
  content: string | JSX.Element;
  /** Used to populate the heading element within the component.  A string
   * value can be passed to set the text for a default DS Heading component,
   * or an actual DS Heading component can be passed in. */
  heading?: string | JSX.Element;
  /** Used to set the color for the left border and icon.  Refer to how color
   * values are defined and typed in the DS Icon component. */
  highlightColor?: BannerHighlightColors;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** Optional prop to control whether a `Banner` can be dismissed
   * (closed) by a user. */
  isDismissible?: boolean;
  /** Function to call when the modal is closed. */
  onClose?: () => void;
  /** Used to control the component's semantic coloring and iconography. */
  variant?: BannerVariants;
}

const iconProps: Record<BannerVariants, IconProps> = {
  neutral: {
    name: "errorOutline",
    title: "Banner neutral icon",
    iconRotation: "rotate180",
  },
  informative: {
    name: "errorOutline",
    title: "Banner informative icon",
    iconRotation: "rotate180",
  },
  positive: {
    name: "actionCheckCircle",
    title: "Banner positive icon",
  },
  negative: {
    name: "errorOutline",
    title: "Banner negative icon",
  },
  warning: {
    name: "alertNotificationImportant",
    title: "Banner warning icon",
  },
  recommendation: {
    name: "actionLightbulb",
    title: "Banner recommendation icon",
  },
};

/**
 * The `Banner` component is a non-modal, semantic dialog used to communicate a
 * general status event or to promote a feature, providing contextual feedback
 * messages for typical user actions within a page flow.
 */
export const Banner: ChakraComponent<
  React.ForwardRefExoticComponent<
    BannerProps & React.RefAttributes<HTMLDivElement>
  >,
  BannerProps
> = chakra(
  forwardRef<HTMLDivElement, BannerProps>((props, ref?) => {
    const {
      backgroundColor,
      content,
      heading,
      highlightColor,
      icon,
      id,
      isDismissible = false,
      onClose,
      variant = "neutral",
      ...rest
    } = props;
    const mainId = useSafeId(id);
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
      onClose && onClose();
      setIsOpen(false);
    };
    const overrideVariant = !!(backgroundColor && highlightColor);
    const styles = useMultiStyleConfig("Banner", {
      // Only set the custom `backgroundColor` and `highlightColor` values
      // if they are both set.
      backgroundColor: overrideVariant ? backgroundColor : undefined,
      highlightColor: overrideVariant ? highlightColor : undefined,
      // If `backgroundColor` and `highlightColor` are set, then it
      // overrides the Banner variant.
      variant: overrideVariant ? undefined : variant,
    });
    const generalHeadingProps = {
      size: "heading6" as HeadingSizes,
      color: variant === "negative" ? "ui.error.primary" : null,
      _dark: {
        color: variant === "negative" ? "dark.ui.error.primary" : null,
      },
      paddingBottom: "xs",
    };
    // If `heading is a string, then we want the default heading,
    // otherwise, use whatever the user passed in.
    const finalHeading = heading ? (
      typeof heading === "string" ? (
        <Heading level="h2" text={heading} {...generalHeadingProps} />
      ) : (
        React.cloneElement(heading, generalHeadingProps)
      )
    ) : null;
    const dismissibleButton = (
      <Button
        aria-label="Close the banner"
        id={`${mainId}-dismissible-button`}
        onClick={handleClose}
        variant="text"
        __css={styles.dismissibleButton}
      >
        <Icon
          data-testid={`${mainId}-dismissible-icon`}
          name="close"
          size="large"
          title="Banner close icon"
        />
      </Button>
    );
    const finalIcon = icon || (
      <Icon
        data-testid={`${mainId}-banner-icon`}
        title="Banner announcement icon"
        size="large"
        {...iconProps[variant]}
        __css={finalHeading ? { marginTop: "xxxs" } : {}}
      />
    );

    // If the `Banner` is closed, don't render anything.
    if (!isOpen) {
      return null;
    }

    if (backgroundColor && !highlightColor) {
      console.warn(
        "NYPL Reservoir Banner: The `backgroundColor` prop has been passed, " +
          "but the `highlightColor` prop has not been passed. Because of " +
          "this, the `backgroundColor` prop will be ignored."
      );
    }
    if (highlightColor && !backgroundColor) {
      console.warn(
        "NYPL Reservoir Banner: The `highlightColor` prop has been passed, " +
          "but the `backgroundColor` prop has not been passed. Because of " +
          "this, the `highlightColor` prop will be ignored."
      );
    }
    if (!isDismissible && onClose)
      console.warn(
        "NYPL Reservoir Banner: The `onClose` prop has been passed, but the " +
          "banner is not dismissible, so `onClose` will be ignored."
      );

    return (
      <Box
        as="aside"
        data-testid="ds-banner"
        data-variant={variant}
        id={mainId}
        ref={ref}
        __css={styles.base}
        {...rest}
      >
        {finalIcon}
        <Box maxWidth="800px">
          {heading && finalHeading}
          {/* Render string content as div with dangerouslySetInnerHTML prop in case HTML is passed in as string
            (e.g. notification HTML stored in an environment variable. */}
          {typeof content === "string" ? (
            <Box dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <>{content}</>
          )}
        </Box>
        {isDismissible && dismissibleButton}
      </Box>
    );
  }),
  { shouldForwardProp: () => true }
);

export default Banner;
