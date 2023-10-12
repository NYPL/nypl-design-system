import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Image, { ComponentImageProps } from "../Image/Image";

export const heroTypesArray = [
  "primary",
  "secondary",
  "secondaryBooksAndMore",
  "secondaryLocations",
  "secondaryResearch",
  "secondaryWhatsOn",
  "tertiary",
  "campaign",
  "fiftyFifty",
] as const;
export type HeroTypes = typeof heroTypesArray[number];
// Only used for internal purposes.
export const heroSecondaryTypes = [
  "secondary",
  "secondaryBooksAndMore",
  "secondaryLocations",
  "secondaryResearch",
  "secondaryWhatsOn",
];
export interface HeroImageProps
  extends Pick<ComponentImageProps, "alt" | "src"> {}
export interface HeroProps {
  /**
   * Optional background color for the backdrop only in the `campaign` variant.
   * When both `backdropBackgroundColor` and `backgroundImageSrc` are passed,
   * the `backgroundImageSrc` will take precedence.
   */
  backdropBackgroundColor?: string;
  /** Optional hex color value used to override the default background
   * color for a given `Hero` variation.
   * Note: not all `Hero` variations utilize this prop. */
  backgroundColor?: string;
  /** Optional path to an image that will be used as a background image for the
   * `Hero` component.
   * Note: not all `Hero` variations utilize this prop. */
  backgroundImageSrc?: string;
  /** Optional hex color value used to override the default text color for a
   * given `Hero` variation.
   * Note: not all `Hero` variations utilize this prop. */
  foregroundColor?: string;
  /** Optional heading element. */
  heading?: JSX.Element;
  /** Used to control how the `Hero` component will be rendered. */
  heroType?: HeroTypes;
  /** Object used to create and render the `Image` component. Note that only
   * `src` and `alt` are the available attributes to pass. If `imageProps.alt`
   * is left blank, a warning will be logged to the console and will cause
   * accessibility issues. For `imageProps.src`, it will only work for the
   * "secondary", "fiftyFifty" and "campaign" `Hero` types; Note: `imageProps.src`
   * can only be used in conjunction with `backgroundImageSrc` for the "campaign"
   * `Hero` type. Note: not all `Hero` variations utilize this prop. */
  imageProps?: HeroImageProps;
  /** Optional details area that contains location data.
   * Note: not all `Hero` variations utilize this prop. */
  locationDetails?: JSX.Element;
  /** Optional string used for the subheader that displays
   * underneath the heading element. */
  subHeaderText?: string | JSX.Element;
}

export const Hero = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<HeroProps>>(
    (props, ref?) => {
      const {
        backdropBackgroundColor,
        backgroundColor,
        backgroundImageSrc,
        foregroundColor,
        heading,
        heroType,
        imageProps = {
          alt: "",
          src: "",
        },
        locationDetails,
        subHeaderText,
      } = props;
      const styles = useMultiStyleConfig("Hero", { variant: heroType });
      const headingStyles = styles.heading;
      // We want to add `Hero`-specific styling to the `Heading` component.
      const finalHeading =
        heading && React.cloneElement(heading, { __css: headingStyles });
      let backgroundImageStyle = {};
      let contentBoxStyling = {};

      if (imageProps.src && !imageProps.alt) {
        console.warn(
          `NYPL Reservoir Hero: The "imageProps.src" prop was passed but the "imageProps.alt" props was not. This will make the rendered image inaccessible.`
        );
      }

      if (heroType === "primary") {
        if (!backgroundImageSrc) {
          console.warn(
            "NYPL Reservoir Hero: It is recommended to use the `backgroundImageSrc` " +
              "prop for the `'primary'` `heroType` variant."
          );
        }
        if (imageProps.alt && imageProps.src) {
          console.warn(
            "NYPL Reservoir Hero: The `imageProps.src` and `imageProps.alt` props have been " +
              "passed, but the `'primary'` `heroType` variant will not use it."
          );
        }
      } else if (locationDetails) {
        console.warn(
          "NYPL Reservoir Hero: The `locationDetails` prop should only be used " +
            "with the `'primary'` `heroType` variant."
        );
      }
      if (heroSecondaryTypes.includes(heroType) && backgroundImageSrc) {
        console.warn(
          "NYPL Reservoir Hero: The `backgroundImageSrc` prop has been passed, " +
            "but the `'secondary'` `heroType` variant will not use it."
        );
      }
      if (heroType === "tertiary" && (backgroundImageSrc || imageProps.src)) {
        console.warn(
          "NYPL Reservoir Hero: The `'tertiary'` `heroType` variant hero " +
            "will not use any of the image props."
        );
      }
      if (
        heroType === "campaign" &&
        (!backdropBackgroundColor || !backgroundImageSrc || !imageProps.src)
      ) {
        console.warn(
          "NYPL Reservoir Hero: It is recommended to use either the " +
            "`backdropBackgroundColor`, `backgroundImageSrc`, or " +
            "`imageProps.src` prop for the `'campaign'` `heroType` variant."
        );
      }
      if (heroType === "fiftyFifty" && backgroundImageSrc) {
        console.warn(
          "NYPL Reservoir Hero: The `backgroundImageSrc` prop has been passed, " +
            "but the `'fiftyFifty'` `heroType` variant hero will not use it."
        );
      }
      if (heroType !== "campaign" && backdropBackgroundColor) {
        console.warn(
          "NYPL Reservoir Hero: The `backdropBackgroundColor` prop has been passed, " +
            "but the `'campaign'` `heroType` variant was not set. It will be ignored."
        );
      }

      if (heroType === "primary") {
        backgroundImageStyle = backgroundImageSrc
          ? { backgroundImage: `url(${backgroundImageSrc})` }
          : {};
      } else if (heroType === "campaign") {
        backgroundImageStyle = backgroundImageSrc
          ? {
              backgroundImage: `url(${backgroundImageSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              content: `" "`,
              height: "100%",
              opacity: "0.4",
              position: "absolute",
              width: "100%",
              zIndex: "0",
            }
          : backdropBackgroundColor
          ? { bgColor: backdropBackgroundColor }
          : { backgroundColor };
      } else if (heroType === "tertiary" || heroType === "fiftyFifty") {
        backgroundImageStyle = backgroundColor ? { bg: backgroundColor } : {};
      }

      if (!heroSecondaryTypes.includes(heroType)) {
        contentBoxStyling = {
          ...(foregroundColor && { color: foregroundColor }),
          ...(backgroundColor && { backgroundColor }),
        };
      } else if (
        foregroundColor ||
        backgroundColor ||
        backdropBackgroundColor
      ) {
        console.warn(
          "NYPL Reservoir Hero: The `foregroundColor`, `backgroundColor`, or " +
            "`backdropBackgroundColor` props have been passed, but the " +
            "`'secondary'` `heroType` variant will not use them."
        );
      }

      const childrenToRender =
        heroType === "campaign" ? (
          <>
            <Box
              __css={{
                ...styles.imgWrapper,
                backgroundImage: `url(${imageProps.src})`,
              }}
            >
              <Image alt={imageProps.alt} src={imageProps.src} />
            </Box>
            <Box __css={styles.interior}>
              {finalHeading}
              {subHeaderText}
            </Box>
          </>
        ) : (
          <>
            {heroType !== "primary" && heroType !== "tertiary" && (
              <Box
                __css={{
                  ...styles.imgWrapper,
                  backgroundImage:
                    heroType === "fiftyFifty"
                      ? `url(${imageProps.src})`
                      : undefined,
                }}
              >
                <Image alt={imageProps.alt} src={imageProps.src} />
              </Box>
            )}
            {finalHeading}
            {heroType === "tertiary" && subHeaderText ? (
              <p>{subHeaderText}</p>
            ) : (
              <Box __css={styles.bodyText}>{subHeaderText}</Box>
            )}
          </>
        );

      return (
        <Box
          data-testid="hero"
          data-responsive-background-image
          // style={backgroundImageSrc ? backgroundImageStyle : undefined}
          style={heroType !== "campaign" ? backgroundImageStyle : undefined}
          ref={ref}
          /** The background image for the Campaign Hero was moved into the
           * `::before` element to allow an opacity to be applied to the image
           * without affecting the opacity of the entire component. Additionally,
           * a black background behind the Campagn Hero background image was
           * also necessary and implemented in the `__css` prop below. */
          _before={heroType === "campaign" ? backgroundImageStyle : undefined}
          __css={
            heroType === "campaign"
              ? { ...styles, backgroundColor: "ui.black", position: "relative" }
              : { ...styles, ...backgroundImageStyle }
          }
        >
          <Box
            data-testid="hero-content"
            style={contentBoxStyling}
            __css={{ ...styles.content, ...contentBoxStyling }}
          >
            {childrenToRender}
          </Box>
        </Box>
      );
    }
  ),
  { shouldForwardProp: () => true }
);

export default Hero;
