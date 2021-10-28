import * as React from "react";
import {
  Box,
  LinkBox as ChakraLinkBox,
  LinkOverlay as ChakraLinkOverlay,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";

import { CardLayouts } from "./CardTypes";
import Heading from "../Heading/Heading";
import Image, { ImageProps } from "../Image/Image";
import { ImageRatios, ImageSizes } from "../Image/ImageTypes";
import generateUUID from "../../helpers/generateUUID";

interface CardBaseProps {
  /** Optional value to control the alignment of the text and elements. */
  center?: boolean;
  /** Optional value to render the layout in a row or column (default). */
  layout?: CardLayouts;
}

interface CardLinkBoxProps {
  /** Main link to use when the full `Card` component should be clickable. */
  mainActionLink?: string;
  /** Text to use as the `aria-label` for the `mainActionLink` URL. */
  mainAriaLabel?: string;
}

interface CardActionsProps extends CardBaseProps {
  /** Optional boolean value to control visibility of border on the bottom edge
   * of the card actions element */
  bottomBorder?: boolean;
  /** Optional boolean value to control visibility of border on the top edge of
   * the card actions element */
  topBorder?: boolean;
}

interface CardImageProps extends CardBaseProps, ImageProps {
  /** Optional boolean value to control the position of the `CardImage`. */
  imageAtEnd?: boolean;
}

export interface CardProps extends CardBaseProps, CardLinkBoxProps {
  /** Optional hex color value used to set the card background color. */
  backgroundColor?: string;
  /** Optional boolean value to control the visibility of a border around
   * the card. */
  border?: boolean;
  /** Optional CSS class name to add. */
  className?: string;
  /** Optional hex color value used to override the default text color. */
  foregroundColor?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Text description of the image; to follow best practices for accessibility,
   * this prop should not be left blank if `imageSrc` is passed. */
  imageAlt?: string;
  /** Optional value to control the aspect ratio of the `CardIage`; default
   * value is `square`. */
  imageAspectRatio?: ImageRatios;
  /** Optional boolean value to control the position of the `CardImage`. */
  imageAtEnd?: boolean;
  /** Custom image component used in place of DS `Image` component. */
  imageComponent?: JSX.Element;
  /** Optional value to control the size of the `CardImage`. */
  imageSize?: ImageSizes;
  /** The path to the image displayed within the `Card` component. */
  imageSrc?: string;
}

/**
 * The CardImage component is used internally in the `Card` component. It
 * renders an `Image` component but with overriding styles specific to the
 * `Card` component.
 */
export function CardImage(props: React.ComponentProps<"img"> & CardImageProps) {
  const {
    alt,
    center,
    component,
    imageSize,
    imageAspectRatio,
    src,
    imageAtEnd,
    layout,
  } = props;
  // Additional styles to add to the `Image` component.
  const styles = useStyleConfig("CardImage", {
    center,
    imageAtEnd,
    imageSize,
    layout,
  });
  return (
    <Image
      alt={alt}
      component={component}
      imageAspectRatio={imageAspectRatio}
      imageSize={imageSize}
      src={src}
      additionalStyles={styles}
    />
  );
}

// CardHeading child-component
export const CardHeading = Heading;

// CardContent child-component
export function CardContent(props: React.PropsWithChildren<{}>) {
  const { children } = props;
  const styles = useStyleConfig("CardContent");
  return children && <Box __css={styles}>{children}</Box>;
}

// CardActions child-component
export function CardActions(props: React.PropsWithChildren<CardActionsProps>) {
  const { bottomBorder, children, topBorder, center, layout } = props;
  const styles = useStyleConfig("CardActions", {
    bottomBorder,
    topBorder,
    center,
    layout,
  });

  return children && <Box __css={styles}>{children}</Box>;
}

/**
 * If `mainActionLink` is passed, then this adds Chakra's `LinkBox` wrapper
 * component and `LinkOverlay` component to allow the entire `Card` component
 * to be clickable. Otherwise, the initial `Card` component is returned. Make
 * sure to pass text in the `mainAriaLabel` to make the link accessible.
 */
export function CardLinkBox(props: React.PropsWithChildren<CardLinkBoxProps>) {
  const { children, mainActionLink, mainAriaLabel } = props;
  // This allows images in the Card to be clickable.
  const zIndex = { zIndex: "9999" };

  // Since we are adding a link with no discernable text, we must
  // add an aria-label to keep the `Card` component accessible.
  if (!mainAriaLabel) {
    console.warn(
      "Pass in text for the `mainActionLink` URL in the `mainAriaLabel` prop for accessibility."
    );
  }

  return mainActionLink ? (
    <ChakraLinkBox>
      <ChakraLinkOverlay
        href={mainActionLink}
        _before={zIndex}
        aria-label={mainAriaLabel}
      />
      {children}
    </ChakraLinkBox>
  ) : (
    <>{children}</>
  );
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
  const {
    backgroundColor,
    border,
    center = false,
    children,
    className,
    foregroundColor,
    id = generateUUID(),
    imageAlt = "",
    imageAspectRatio = ImageRatios.Square,
    imageAtEnd,
    imageComponent,
    imageSize = ImageSizes.Default,
    imageSrc,
    layout = CardLayouts.Column,
    mainActionLink,
    mainAriaLabel,
  } = props;
  const hasImage = imageSrc || imageComponent;
  const customColors = {};
  const cardContents = [];

  backgroundColor && (customColors["backgroundColor"] = backgroundColor);
  foregroundColor && (customColors["color"] = foregroundColor);

  React.Children.map(children, (child: React.ReactElement, key) => {
    if (
      child.type === CardHeading ||
      child.props.mdxType === "CardHeading" ||
      child.type === CardContent ||
      child.props.mdxType === "CardContent" ||
      child.type === CardActions ||
      child.props.mdxType === "CardActions"
    ) {
      const elem = React.cloneElement(child, { key, center, layout });
      cardContents.push(elem);
    }
  });

  const styles = useMultiStyleConfig("Card", {
    border,
    center,
    hasImage,
    imageAtEnd,
    layout,
  });

  return (
    <CardLinkBox mainActionLink={mainActionLink} mainAriaLabel={mainAriaLabel}>
      <Box
        id={id}
        className={className}
        __css={{
          ...styles,
          ...customColors,
        }}
      >
        {hasImage && (
          <CardImage
            src={imageSrc ? imageSrc : null}
            component={imageComponent}
            alt={imageAlt}
            imageSize={imageSize}
            imageAspectRatio={imageAspectRatio}
            imageAtEnd={imageAtEnd}
            layout={layout}
          />
        )}
        <Box className="card-body" __css={styles.body}>
          {cardContents}
        </Box>
      </Box>
    </CardLinkBox>
  );
}
