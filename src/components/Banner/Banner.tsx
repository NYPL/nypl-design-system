import {
  Box,
  chakra,
  ChakraComponent,
  HStack,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Icon, { IconProps } from "../Icons/Icon";

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
    const styles = useMultiStyleConfig("Banner", {
      backgroundColor,
      highlightColor,
      type,
    });
    // if heading is string, then we want the default heading...
    const finalHeading =
      typeof heading === "string" ? (
        <Heading
          level="h2"
          size="heading6"
          text={heading}
          noSpace
          maxWidth="800px"
        />
      ) : (
        heading
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
          id={`${id}-dismissible-banner-icon`}
          name="close"
          size="large"
          title="Banner close icon"
        />
      </Button>
    );
    // const { colorMode } = useColorMode();
    const iconElement = () => {
      // If a custom icon is passed, add specific `Banner` styles.
      if (icon) {
        return React.cloneElement(icon, {
          id: `${id}-custom-banner-icon`,
          size: "large",
        });
      }
      const iconProps: Record<BannerTypes, IconProps> = {
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
          title: "Banner warning icon",
        },
      };
      return (
        <Icon
          className="banner-icon"
          id={`${id}-banner-icon`}
          title="Banner announcement icon"
          size="large"
          {...(iconProps[type] as IconProps)}
        />
      );
    };

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
        __css={styles.base}
        {...rest}
      >
        <HStack sx={styles.content}>
          {iconElement()}
          <Box>
            {heading && finalHeading}
            {content}
          </Box>
          {isDismissible && dismissibleButton}
        </HStack>
      </Box>
    );
  })
);

export default Banner;
