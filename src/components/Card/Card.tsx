import {
  Box,
  chakra,
  LinkBox as ChakraLinkBox,
  LinkOverlay as ChakraLinkOverlay,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import { CardLayouts } from "./CardTypes";
import Heading from "../Heading/Heading";
import Image, { ImageProps } from "../Image/Image";
import { ImageRatios, ImageSizes } from "../Image/ImageTypes";
import generateUUID from "../../helpers/generateUUID";

interface CardBaseProps {
  /** Optional value to control the alignment of the text and elements. */
  isCentered?: boolean;
  /** Optional value to render the layout in a row or column.
   * Default is `CardLayouts.Column`. */
  layout?: CardLayouts;
}

interface CardLinkBoxProps {
  /** Main link to use when the full `Card` component should be clickable. */
  mainActionLink?: string;
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
  /** Optional CSS class name to add. */
  className?: string;
  /** Optional hex color value used to override the default text color. */
  foregroundColor?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Text description of the image; to follow best practices for accessibility,
   * this prop should not be left blank if `imageSrc` is passed. */
  imageAlt?: string;
  /** Optional value to control the aspect ratio of the `CardImage`; default
   * value is `ImageRatios.Square`. */
  imageAspectRatio?: ImageRatios;
  /** Optional boolean value to control the position of the `CardImage`. */
  imageAtEnd?: boolean;
  /** Custom image component used in place of DS `Image` component. */
  imageComponent?: JSX.Element;
  /** Optional value to control the size of the `CardImage`. Default value is
   * `ImageSizes.Default`. */
  imageSize?: ImageSizes;
  /** The path to the image displayed within the `Card` component. */
  imageSrc?: string;
  /** Optional boolean value to control the visibility of a border around
   * the card. */
  isBordered?: boolean;
}

/**
 * The CardImage component is used internally in the `Card` component. It
 * renders an `Image` component but with overriding styles specific to the
 * `Card` component.
 */
function CardImage(props: React.ComponentProps<"img"> & CardImageProps) {
  const {
    alt,
    isCentered,
    component,
    imageSize,
    imageAspectRatio,
    src,
    imageAtEnd,
    layout,
  } = props;
  // Additional styles to add to the `Image` component.
  const styles = useStyleConfig("CardImage", {
    isCentered,
    imageAtEnd,
    imageSize,
    layout,
  });
  return (
    <Box __css={styles}>
      <Image
        alt={alt}
        component={component}
        imageAspectRatio={imageAspectRatio}
        imageSize={imageSize}
        src={src}
      />
    </Box>
  );
}

// CardHeading child-component
export const CardHeading = chakra(Heading);

// CardContent child-component
export const CardContent = chakra((props: React.PropsWithChildren<{}>) => {
  const { children, ...rest } = props;
  const styles = useStyleConfig("CardContent");
  return (
    children && (
      <Box __css={styles} {...rest}>
        {children}
      </Box>
    )
  );
});

// CardActions child-component
export const CardActions = chakra(
  (props: React.PropsWithChildren<CardActionsProps>) => {
    const { bottomBorder, children, topBorder, isCentered, layout, ...rest } =
      props;
    const styles = useStyleConfig("CardActions", {
      bottomBorder,
      topBorder,
      isCentered,
      layout,
    });

    return (
      children && (
        <Box __css={styles} {...rest}>
          {children}
        </Box>
      )
    );
  }
);

/**
 * If `mainActionLink` is passed, then this adds Chakra's `LinkBox` wrapper
 * component to the entire `Card` component. This works together with the
 * `CardLinkOverlay` component to provide a clickable overlay.
 */
function CardLinkBox({
  children,
  mainActionLink,
}: React.PropsWithChildren<CardLinkBoxProps>) {
  return mainActionLink ? (
    <ChakraLinkBox>{children}</ChakraLinkBox>
  ) : (
    <>{children}</>
  );
}

/**
 * If `mainActionLink` is passed, then this adds Chakra's `LinkOverlay` around
 * text that should be linked, in this case the `CardHeading` text. This works
 * together with the `CardLinkBox` component to provide a clickable overlay to
 * the `Card` component while still allowing links in the `CardActions` to be
 * clickable.
 */
function CardLinkOverlay({
  children,
  mainActionLink,
}: React.PropsWithChildren<CardLinkBoxProps>) {
  return mainActionLink ? (
    <ChakraLinkOverlay href={mainActionLink}>{children}</ChakraLinkOverlay>
  ) : (
    <>{children}</>
  );
}

export const Card = chakra((props: React.PropsWithChildren<CardProps>) => {
  const {
    backgroundColor,
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
    isBordered,
    isCentered = false,
    layout = CardLayouts.Column,
    mainActionLink,
    ...rest
  } = props;
  const hasImage = imageSrc || imageComponent;
  const finalImageAspectRatio = imageComponent
    ? ImageRatios.Original
    : imageAspectRatio;
  const customColors = {};
  const cardContents = [];
  let cardHeadingCount = 0;

  if (imageComponent && imageAspectRatio !== ImageRatios.Square) {
    console.warn(
      "Both `imageComponent` and `imageAspectRatio` are set but `imageAspectRatio` will be ignored in favor of the aspect ratio on `imageComponent`."
    );
  }

  backgroundColor && (customColors["backgroundColor"] = backgroundColor);
  foregroundColor && (customColors["color"] = foregroundColor);

  const styles = useMultiStyleConfig("Card", {
    isBordered,
    isCentered,
    hasImage,
    imageAtEnd,
    layout,
    mainActionLink,
  });

  React.Children.map(children, (child: React.ReactElement, key) => {
    if (child.type === CardHeading || child.props.mdxType === "CardHeading") {
      // If the child is a `CardHeading` component, then we add the
      // `CardLinkOverlay` inside of the `Heading` component and wrap its text.
      // This allows other links in the `CardActions` to be clickable. This is
      // only done for the first `CardHeading` component but does not affect
      // the full-click feature.
      const newChildren =
        cardHeadingCount === 0 ? (
          <CardLinkOverlay mainActionLink={mainActionLink}>
            {child.props.children}
          </CardLinkOverlay>
        ) : (
          child.props.children
        );
      const elem = React.cloneElement(child, {
        additionalStyles: {
          ...styles.heading,
          ...child.props.additionalStyles,
        },
        key,
        // Override the child text with the potential `CardLinkOverlay`.
        children: newChildren,
        layout,
      });
      cardContents.push(elem);
      cardHeadingCount++;
    } else if (
      child.type === CardContent ||
      child.props.mdxType === "CardContent"
    ) {
      const elem = React.cloneElement(child, { key });
      cardContents.push(elem);
    } else if (
      child.type === CardActions ||
      child.props.mdxType === "CardActions"
    ) {
      const elem = React.cloneElement(child, {
        key,
        isCentered,
        layout,
      });
      cardContents.push(elem);
    }
  });

  return (
    <CardLinkBox mainActionLink={mainActionLink}>
      <Box
        id={id}
        className={className}
        __css={{
          ...styles,
          ...customColors,
        }}
        {...rest}
      >
        {hasImage && (
          <CardImage
            src={imageSrc ? imageSrc : null}
            component={imageComponent}
            alt={imageAlt}
            imageSize={imageSize}
            imageAspectRatio={finalImageAspectRatio}
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
});

export default Card;
