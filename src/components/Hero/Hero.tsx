import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useColorModeValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Image, { ComponentImageProps } from "../Image/Image";

export const heroVariantsArray = ["primary", "tertiary", "campaign"] as const;
export type HeroVariants = typeof heroVariantsArray[number];
export interface HeroImageProps
  extends Omit<BoxProps, "onError">,
    Pick<
      ComponentImageProps,
      "alt" | "fallbackSrc" | "id" | "src" | "onError" | "component"
    > {}

export interface HeroProps extends BoxProps {
  /**
   * Optional background color for the backdrop only in the `campaign` variant.
   * When both `backdropBackgroundColor` and `backgroundImageSrc` are passed,
   * the `backgroundImageSrc` will take precedence.
   */
  backdropBackgroundColor?: string;
  /** Optional color value used to override the default background color for a
   * given `Hero` variant.
   *
   * Note: not all `Hero` variants utilize this prop. */
  backgroundColor?: string;
  /** Optional path to an image that will be used as a background image for the
   * `Hero` component.
   *
   * Note: not all `Hero` variants utilize this prop. */
  backgroundImageSrc?: string;
  /** **This prop has been deprecated in favor of the `textColor` prop.**
   *
   * Optional color value used to override the default text color for a given
   * `Hero` variant.
   *
   * Note: not all `Hero` variants utilize this prop. */
  foregroundColor?: string;
  /** Optional heading element. */
  heading?: JSX.Element;
  /** Object used to create and render the `Image` component. You can pass `component`
   * (with its own internal props, which will override) or `src`, `alt`, `id`,
   * `fallBackSrc`, and `onError`. If `imageProps.alt` is left blank, a warning
   * will be logged to the console and will cause accessibility issues. For
   * `imageProps.src`, it will only work for the "campaign" `Hero` type. */
  imageProps?: HeroImageProps;
  /** Optional boolean used to toggle the default text color from light to dark.
   * Set `isDarkText` to `true` if the `textBackgroundColor` is set to a light
   * color. */
  isDarkText?: boolean;
  /** Optional boolean used to toggle the treatment of the background image in
   * the "campaign" variant. If true, the background image will be converted to
   * black & white and darkened to 60% black. */
  isDarkBackgroundImage?: boolean;
  /** Optional string used for the subheader that displays underneath the
   * heading element. */
  subHeaderText?: string | JSX.Element;
  /** Optional color value used to override the default background color for a
   * text content area in a given `Hero` variant. */
  textBackgroundColor?: string;
  /** Optional color value used to override the default text color for a given
   * `Hero` variant. This prop should be used in lieu of the deprecated
   * `foregroundColor` prop.
   *
   * Note: not all `Hero` variants utilize this prop. */
  textColor?: string;
  /** Used to control how the `Hero` component will be rendered. */
  variant?: HeroVariants;
}

export const Hero: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<HeroProps> & React.RefAttributes<HTMLDivElement>
  >,
  HeroProps
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<HeroProps>>(
    (props, ref?) => {
      const {
        backdropBackgroundColor,
        backgroundColor,
        backgroundImageSrc,
        foregroundColor,
        heading,
        variant,
        id,
        imageProps = {
          alt: "",
          id: undefined,
          src: "",
        },
        isDarkText,
        isDarkBackgroundImage = false,
        subHeaderText,
        textBackgroundColor,
        textColor,
        ...rest
      } = props;
      const styles = useMultiStyleConfig("Hero", {
        foregroundColor,
        isDarkText,
        textColor,
        variant,
      });
      const headingStyles = styles.heading;
      // We want to add `Hero`-specific styling to the `Heading` component.
      const finalHeading =
        heading && React.cloneElement(heading, { __css: headingStyles });
      let backgroundImageStyle = {};
      let contentBoxStyling = {};

      const imageToRender = (
        <Image
          alt={imageProps.alt}
          component={imageProps.component}
          fallbackSrc={imageProps.fallbackSrc}
          id={imageProps.id}
          onError={imageProps.onError}
          src={imageProps.src}
        />
      );

      // Using the custom Image component's props to check requirements.
      if (imageProps.component) {
        const { src, alt } = imageProps.component.props;
        Object.assign(imageProps, { src, alt });
      }

      if (imageProps.src && !imageProps.alt) {
        console.warn(
          `NYPL Reservoir Hero: The "imageProps.src" prop was passed but the "imageProps.alt"` +
            ` props was not. This will make the rendered image inaccessible.`
        );
      }

      if (variant === "primary") {
        if (!backgroundImageSrc) {
          console.warn(
            "NYPL Reservoir Hero: It is recommended to use the `backgroundImageSrc` " +
              "prop for the `'primary'` variant."
          );
        }
        if (imageProps.alt && imageProps.src) {
          console.warn(
            "NYPL Reservoir Hero: The `imageProps.src` and `imageProps.alt` props have been " +
              "passed, but the `'primary'` variant will not use it."
          );
        }
      }
      if (variant === "tertiary" && (backgroundImageSrc || imageProps.src)) {
        console.warn(
          "NYPL Reservoir Hero: The `'tertiary'` variant hero " +
            "will not use any of the image props."
        );
      }
      if (
        variant === "campaign" &&
        !backdropBackgroundColor &&
        !backgroundImageSrc
      ) {
        console.warn(
          "NYPL Reservoir Hero: It is recommended to use either the" +
            "`backdropBackgroundColor` prop or the `backgroundImageSrc` " +
            "prop for the `'campaign'` variant."
        );
      }
      if (variant !== "campaign" && backdropBackgroundColor) {
        console.warn(
          "NYPL Reservoir Hero: The `backdropBackgroundColor` prop has been passed, " +
            "but the `'campaign'` variant was not set. It will be ignored."
        );
      }
      if (variant !== "campaign" && isDarkBackgroundImage) {
        console.warn(
          "NYPL Reservoir Hero: The `isDarkBackgroundImage` prop has been passed, " +
            "but the `'campaign'` variant was not set. It will be ignored."
        );
      }

      /** The _dark object in the theme file was overriding custom background
       * colors. To overcome this issue, the background color styles were moved
       * into the component file and the related styles for all variants,
       * were removed from the theme file. */
      const allDefaultBackgroundColors = {
        primary: useColorModeValue("ui.black", "dark.ui.bg.default"),
        tertiary: useColorModeValue("ui.gray.x-dark", "dark.ui.bg.default"),
        campaign: useColorModeValue("ui.black", "dark.ui.bg.default"),
        campaignBackdrop: useColorModeValue(
          "dark.ui.bg.active",
          "dark.ui.bg.active"
        ),
      };

      const defaultBackgroundColor = allDefaultBackgroundColors[variant];
      if (variant === "primary") {
        backgroundImageStyle = backgroundImageSrc
          ? {
              bgColor: defaultBackgroundColor,
              backgroundImage: `/**/url("${backgroundImageSrc}")`,
            }
          : {};
      } else if (variant === "campaign") {
        /**
         * For better control of the background image in the "campaign" variant,
         * the image and the associated styles were moved into the `:before`
         * element.
         */
        const campaignBgStyles = {
          content: `""`,
          height: { base: "100%", md: "calc(100% - var(--nypl-space-xl))" },
          minHeight: "300px",
          paddingBottom: { base: "0", md: "xl" },
          position: "absolute",
          top: 0,
          width: "100%",
        };
        backgroundImageStyle = backgroundImageSrc
          ? {
              _before: {
                ...campaignBgStyles,
                bgColor: "ui.black",
              },
              _after: {
                ...campaignBgStyles,
                backgroundBlendMode: isDarkBackgroundImage
                  ? "saturation"
                  : null,
                backgroundImage: isDarkBackgroundImage
                  ? `/**/linear-gradient(black, black), url("${backgroundImageSrc}")`
                  : `/**/url("${backgroundImageSrc}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: isDarkBackgroundImage ? "0.4" : "1.0",
                /* 3. The Visual Treatment */
                filter: "blur(40px) brightness(0.8)",

                // /* 4. Scale up to hide the "faded edge" caused by the blur */
                transform: "scale(1.2)",
              },
            }
          : backdropBackgroundColor
          ? {
              _before: {
                ...campaignBgStyles,
                bgColor: backdropBackgroundColor,
              },
            }
          : {
              _before: {
                ...campaignBgStyles,
                bgColor: allDefaultBackgroundColors["campaignBackdrop"],
              },
            };
      } else if (variant === "tertiary") {
        backgroundImageStyle =
          textBackgroundColor || backgroundColor
            ? { bgColor: textBackgroundColor || backgroundColor }
            : { bgColor: defaultBackgroundColor };
      }

      /** The "tertiary" variant doesn't have an apparent content box, so that
       * element will default to a transparent background in the "teriary"
       * variant. */
      contentBoxStyling = {
        ...((textColor || foregroundColor) && {
          color: textColor || foregroundColor,
        }),
        ...(textBackgroundColor
          ? { bgColor: textBackgroundColor }
          : {
              bgColor:
                variant !== "tertiary" ? defaultBackgroundColor : undefined,
            }),
      };

      if (foregroundColor && isDarkText) {
        console.warn(
          "NYPL Reservoir Hero: The `foregroundColor` and `isDarkText` props " +
            "have both been passed. Thse props can not be used at the same time, " +
            "so the `foregroundColor` prop will override the `isDarkText` prop."
        );
      }

      if (textColor && isDarkText) {
        console.warn(
          "NYPL Reservoir Hero: The `textColor` and `isDarkText` props " +
            "have both been passed. Thse props can not be used at the same time, " +
            "so the `textColor` prop will override the `isDarkText` prop."
        );
      }

      const childrenToRender =
        variant === "campaign" ? (
          <>
            <Box
              __css={{
                ...styles.imgWrapper,
              }}
              style={{
                backgroundImage: `/**/url("${imageProps.src}")`,
              }}
            >
              {imageToRender}
            </Box>
            <Box __css={styles.interior}>
              {finalHeading}
              {subHeaderText}
            </Box>
          </>
        ) : (
          <>
            {variant !== "primary" && variant !== "tertiary" && (
              <Box
                __css={{
                  ...styles.imgWrapper,
                }}
              >
                {imageToRender}
              </Box>
            )}
            {finalHeading}
            {variant === "tertiary" && subHeaderText ? (
              <p>{subHeaderText}</p>
            ) : (
              <Box __css={styles.bodyText}>{subHeaderText}</Box>
            )}
          </>
        );

      const contentPrep = (
        <Box
          data-testid="ds-hero-content"
          __css={{ ...styles.content, ...contentBoxStyling }}
        >
          {childrenToRender}
        </Box>
      );

      // Set final DOM structure based on variant
      // Hint: The primary variant needs a grid wrapper
      const contentFinal =
        variant === "primary" ? (
          <Box data-testid="ds-hero-grid" __css={styles.grid}>
            {contentPrep}
          </Box>
        ) : (
          contentPrep
        );

      return (
        <Box
          data-testid="ds-hero"
          data-responsive-background-image
          id={id}
          ref={ref}
          __css={{
            ...styles.base,
            ...backgroundImageStyle,
          }}
          {...rest}
        >
          {contentFinal}
        </Box>
      );
    }
  ),
  { shouldForwardProp: () => true }
);

export default Hero;
