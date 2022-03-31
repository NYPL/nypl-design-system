import * as React from "react";
import {
  Box,
  LinkBox as ChakraLinkBox,
  LinkOverlay as ChakraLinkOverlay,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";

import { LayoutTypes } from "../../helpers/enums";
import Heading from "../Heading/Heading";
import Image, { ComponentImageProps, ImageProps } from "../Image/Image";
import { ImageRatios, ImageSizes } from "../Image/ImageTypes";
import useWindowSize from "../../hooks/useWindowSize";
import generateUUID from "../../helpers/generateUUID";

interface CardBaseProps {
  /** Optional value to control the alignment of the text and elements. */
  isCentered?: boolean;
  /** Optional value to render the layout in a row or column.
   * Default is `LayoutTypes.Column`. */
  layout?: LayoutTypes;
}

interface CardLinkBoxProps {
  /** Main link to use when the full `Card` component should be clickable. */
  mainActionLink?: string;
}

// Used internally only for the `imageProps` prop for the `Card` component.
interface CardImageProps extends ComponentImageProps {
  /** Optional boolean value to control the position of the `CardImage`. */
  isAtEnd?: boolean;
}

interface CardActionsProps extends CardBaseProps {
  /** Optional boolean value to control visibility of border on the bottom edge
   * of the card actions element */
  bottomBorder?: boolean;
  /** Optional boolean value to control visibility of border on the top edge of
   * the card actions element */
  topBorder?: boolean;
}

/** Used only internally for the `CardImage` component. */
interface CardImageComponentProps extends CardBaseProps, ImageProps {
  /** Optional boolean value to control the position of the `CardImage`. */
  isAtEnd?: boolean;
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
  /** Object used to create and render the `Image` component. */
  imageProps?: CardImageProps;
}

/**
 * The CardImage component is used internally in the `Card` component. It
 * renders an `Image` component but with overriding styles specific to the
 * `Card` component.
 */
function CardImage(
  props: React.ComponentProps<"img"> & CardImageComponentProps
) {
  const {
    alt,
    aspectRatio,
    caption,
    component,
    credit,
    isAtEnd,
    isCentered,
    layout,
    size,
    src,
  } = props;
  // Additional styles to add to the `Image` component.
  const styles = useStyleConfig("CardImage", {
    imageIsAtEnd: isAtEnd,
    isCentered,
    size,
    layout,
  });
  return (
    <Box __css={styles}>
      <Image
        alt={alt}
        caption={caption}
        component={component}
        credit={credit}
        aspectRatio={aspectRatio}
        size={size}
        src={src}
      />
    </Box>
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
  const { bottomBorder, children, isCentered, layout, topBorder } = props;
  const styles = useStyleConfig("CardActions", {
    bottomBorder,
    isCentered,
    layout,
    topBorder,
  });

  return children && <Box __css={styles}>{children}</Box>;
}

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

export default function Card(props: React.PropsWithChildren<CardProps>) {
  const {
    backgroundColor,
    border,
    children,
    className,
    foregroundColor,
    id = generateUUID(),
    imageProps = {
      alt: "",
      aspectRatio: ImageRatios.Square,
      caption: undefined,
      component: undefined,
      credit: undefined,
      isAtEnd: false,
      size: ImageSizes.Default,
      src: "",
    },
    isCentered = false,
    layout = LayoutTypes.Column,
    mainActionLink,
  } = props;
  const hasImage = imageProps.src || imageProps.component;
  const [finalImageSize, setFinalImageSize] = React.useState<ImageSizes>(
    imageProps.size
  );
  const finalImageAspectRatio = imageProps.component
    ? ImageRatios.Original
    : imageProps.aspectRatio;
  const customColors = {};
  const cardContents = [];
  const windowDimensions = useWindowSize();
  let cardHeadingCount = 0;

  if (imageProps.component && imageProps.aspectRatio !== ImageRatios.Square) {
    console.warn(
      "NYPL Reservoir Card: Both the `imageProps.component` and `imageProps.aspectRatio` " +
        "props were set but `imageProps.aspectRatio` will be ignored in favor " +
        "of the aspect ratio on `imageProps.component` prop."
    );
  }

  // The `Card`'s image should always display as 100% width on mobile. To
  // achieve this, we set the size to `ImageSizes.Default` only when the
  // viewport is less than "600px". Otherwise, we set the size to
  // the value passed in via `imageSize`.
  React.useEffect(() => {
    if (windowDimensions.width < 600) {
      setFinalImageSize(ImageSizes.Default);
    } else {
      setFinalImageSize(imageProps.size);
    }
  }, [windowDimensions.width, imageProps.size]);

  backgroundColor && (customColors["backgroundColor"] = backgroundColor);
  foregroundColor && (customColors["color"] = foregroundColor);

  const styles = useMultiStyleConfig("Card", {
    border,
    hasImage,
    imageIsAtEnd: imageProps.isAtEnd,
    isCentered,
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
        isCentered,
        // Override the child text with the potential `CardLinkOverlay`.
        children: newChildren,
        layout,
      });
      cardContents.push(elem);
      cardHeadingCount++;
    } else if (
      child.type === CardContent ||
      child.props.mdxType === "CardContent" ||
      child.type === CardActions ||
      child.props.mdxType === "CardActions"
    ) {
      const elem = React.cloneElement(child, { key, isCentered, layout });
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
      >
        {hasImage && (
          <CardImage
            alt={imageProps.alt}
            aspectRatio={finalImageAspectRatio}
            caption={imageProps.caption}
            component={imageProps.component}
            credit={imageProps.credit}
            isAtEnd={imageProps.isAtEnd}
            layout={layout}
            size={finalImageSize}
            src={imageProps.src ? imageProps.src : undefined}
          />
        )}
        <Box className="card-body" __css={styles.body}>
          {cardContents}
        </Box>
      </Box>
    </CardLinkBox>
  );
}
