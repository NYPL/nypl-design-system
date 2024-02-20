import {
  Box,
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
import Icon, { IconNames, IconSizes } from "../Icons/Icon";

export const bannerTypesArray = [
  "informative",
  "negative",
  "neutral",
  "positive",
  "recommendation",
  "warning",
] as const;
export type BannerTypes = typeof bannerTypesArray[number];
export const bannerColorsArray = [
  "brand.primary-05",
  "section.blogs.primary-05",
  "section.books-and-more.primary-05",
  "section.connect.primary-05",
  "section.education.primary-05",
  "section.locations.primary-05",
  "section.research.primary-05",
  "section.research-library-lpa.primary-05",
  "section.research-library-schomburg.primary-05",
  "section.research-library-schwarzman.primary-05",
  "section.whats-on.primary-05",
  "dark.brand.primary-05",
  "dark.section.blogs.primary-05",
  "dark.section.books-and-more.primary-05",
  "dark.section.connect.primary-05",
  "dark.section.education.primary-05",
  "dark.section.locations.primary-05",
  "dark.section.research.secondary-05",
  "dark.section.research-library-lpa.primary-05",
  "dark.section.research-library-schomburg.primary-05",
  "dark.section.research-library-schwarzman.primary-05",
  "dark.section.whats-on.primary-05",
] as const;
export type BannerColors = typeof bannerColorsArray[number];

interface IconProps {
  color: any;
  name: IconNames;
  title: string;
}

interface BannerProps {
  /** Label used to describe the `Banner`'s aside HTML element. */
  ariaLabel?: string;
  backgroundColor?: BannerColors;
  /** Additional `className` to add. */
  className?: string;
  content: string | JSX.Element;
  heading?: string | JSX.Element;
  highlightColor?: BannerColors;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional prop to control whether a `Banner` can be dismissed
   * (closed) by a user. */
  isDismissible?: boolean;
  type?: BannerTypes;
}

/**
 * BannerHeading child-component.
 */
export const BannerHeading: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<any> & React.RefAttributes<HTMLDivElement>
  >,
  any
> = chakra((props: React.PropsWithChildren<any>) => {
  const { heading, icon, id, type } = props;
  const styles = useMultiStyleConfig("BannerHeading", {
    icon,
    type,
  });
  const { colorMode } = useColorMode();
  const iconElement = () => {
    const baseIconProps = {
      size: "large" as IconSizes,
      __css: styles.icon,
    };
    // If a custom icon is passed, add specific `Banner` styles.
    if (icon)
      return React.cloneElement(icon, {
        id: `${id}-custom-banner-icon`,
        ...baseIconProps,
      });
    const iconProps = {
      announcement: {
        color:
          colorMode === "dark"
            ? "dark.ui.success.primary"
            : "section.research.secondary",
        name: "speakerNotes",
        title: "Banner announcement icon",
      } as IconProps,
      standard: {
        color: colorMode === "dark" ? "ui.status.primary" : "ui.black",
        name: "alertBannerImportant",
        title: "Banner standard icon",
      } as any,
      warning: {
        color: colorMode === "dark" ? "dark.ui.error.primary" : "brand.primary",
        name: "errorFilled",
        title: "Banner warning icon",
      } as IconProps,
    };
    return (
      <Icon
        className="banner-icon"
        id={`${id}-banner-icon`}
        {...baseIconProps}
        {...iconProps[type]}
      />
    );
  };
  // Only if a heading child was passed, then either render the string in the
  // default BannerHeading h4 with its default styles, or render the
  // custom `Heading` or heading child with the `BannerHeading` styles.
  const title = heading ? (
    typeof heading === "string" ? (
      <Heading
        id={`${id}-heading`}
        level="h4"
        noSpace
        size="heading6"
        __css={styles.heading}
      >
        {heading}
      </Heading>
    ) : (
      React.cloneElement(heading as any, {
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
    <Box as="header" __css={styles}>
      {iconElement()}
      {heading && finalTitle}
    </Box>
  );
});

/**
 * Component used to present users with different levels of banners: @TODO
 */
export const Banner: ChakraComponent<
  React.ForwardRefExoticComponent<
    BannerProps & React.RefAttributes<HTMLDivElement>
  >,
  BannerProps
> = chakra(
  forwardRef<HTMLDivElement, BannerProps>((props, ref?) => {
    const {
      ariaLabel,
      backgroundColor,
      className,
      content,
      heading,
      highlightColor,
      icon,
      id,
      isDismissible = false,
      type,
      ...rest
    } = props;
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => setIsOpen(false);
    const styles = useMultiStyleConfig("Banner", {});
    /** Setting the icon color in the styles is not working, so we need to
     * explicitly override the icon color directly on the component. */
    const dismissibleButtonIconColor = useColorModeValue(
      "ui.black",
      "dark.ui.typography.heading"
    );

    const finalHeading = (
      <BannerHeading icon={icon} heading={heading} id={id} type={type} />
    );
    const dismissibleButton = (
      <Button
        aria-label="Close the banner"
        buttonType="text"
        id={`${id}-banner-dismissible-button`}
        onClick={handleClose}
        __css={styles.dismissibleButton}
      >
        <Icon
          fill={dismissibleButtonIconColor}
          id={`${id}-dismissible-banner-icon`}
          name="close"
          size="large"
          title="Banner close icon"
        />
      </Button>
    );

    // If the `Banner` is closed, don't render anything.
    if (!isOpen) {
      return null;
    }

    return (
      <Box
        aria-label={ariaLabel}
        as="aside"
        className={className}
        data-type={type}
        id={id}
        ref={ref}
        __css={styles}
        {...rest}
      >
        <Box __css={styles.container}>
          {finalHeading}
          <Box __css={styles.content}>{content}</Box>
        </Box>
        {isDismissible && dismissibleButton}
      </Box>
    );
  })
);

export default Banner;
