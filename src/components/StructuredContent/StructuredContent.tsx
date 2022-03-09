import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import Heading from "../Heading/Heading";
import { HeadingSizes, HeadingLevels } from "../Heading/HeadingTypes";
import Image, { ImageProps } from "../Image/Image";
import { ImageRatios, ImageSizes } from "../Image/ImageTypes";
import { StructuredContentImagePosition } from "./StructuredContentTypes";
import generateUUID from "../../helpers/generateUUID";

interface StructuredContentImageProps {
  /** String value used to populate the `alt` attribute of the internal `Image`
   * component's `img` element. @NOTE if an image is used, this value must be passed. */
  alt?: string;
  /** Optional value to control the aspect ratio of the internal `Image` component.
   * Defaults to `ImageRatios.Square`. */
  aspectRatio?: ImageRatios;
  /** Optional value to render as a caption for the internal `Image` component. */
  caption?: string;
  /** Optional DOM element to use instead of the DS `Image` component. */
  component?: JSX.Element;
  /** Optional value to render as a credit for the internal `Image` component. */
  credit?: string;
  /** Optional value to control the positioning of the internal `Image` component.
   * Defaults to `StructuredContentImagePosition.Left`. */
  position?: StructuredContentImagePosition;
  /** Optional value to control the size of the internal `Image` component.
   * Defaults to `ImageSizes.Medium`. */
  size?: ImageSizes;
  /** Optional value that contains the path to an image. If omitted, the internal
   * DS `Image` component will not render. */
  src?: string;
}

export interface StructuredContentProps {
  /** Optional value to set the text for the callout heading text. */
  calloutText?: string;
  /** Additional class name for the `StructuredContent` component. */
  className?: string;
  /** Optional value to set the text for the main heading text. */
  headingText?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Object used to create and render the `Image` component. */
  imageProps?: StructuredContentImageProps;
  /** Required value to set the text for the body content. */
  bodyContent: string | JSX.Element;
}

/**
 * Internal component used in the `StructuredContent` component
 * that renders the DS `Image` component.
 */
function StructuredContentImage(props: ImageProps) {
  const {
    additionalFigureStyles,
    additionalImageStyles,
    additionalWrapperStyles,
    alt,
    aspectRatio,
    caption,
    component,
    credit,
    size,
    src,
  } = props;
  return (
    <Image
      additionalFigureStyles={additionalFigureStyles}
      additionalImageStyles={additionalImageStyles}
      additionalWrapperStyles={additionalWrapperStyles}
      alt={alt}
      component={component}
      aspectRatio={aspectRatio}
      size={size}
      caption={caption}
      credit={credit}
      src={src}
    />
  );
}

/**
 * The `StructuredContent` component that displays a heading, callout content,
 * an image, and body content. All are optional except for body content.
 */
export default function StructuredContent(
  props: React.PropsWithChildren<StructuredContentProps>
) {
  const {
    calloutText,
    className,
    headingText,
    id = generateUUID(),
    imageProps = {
      alt: "",
      aspectRatio: ImageRatios.Square,
      caption: undefined,
      component: undefined,
      credit: undefined,
      position: StructuredContentImagePosition.Left,
      size: ImageSizes.Medium,
      src: "",
    },
    bodyContent,
  } = props;
  const hasImage = imageProps.src || imageProps.component;
  const hasFigureImage = imageProps.caption || imageProps.credit;
  const styles = useMultiStyleConfig("StructuredContent", {
    hasFigureImage,
    imageAspectRatio: imageProps.aspectRatio,
    imagePosition: imageProps.position,
  });
  const finalBodyContent =
    typeof bodyContent === "string" ? (
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    ) : (
      <Box>{bodyContent}</Box>
    );

  if (hasImage && !imageProps.alt) {
    console.warn(
      "StructuredContent: `imageProps.alt` prop is required when using an image."
    );
  }

  return (
    <Box id={id} className={className} __css={styles}>
      {headingText && (
        <Heading id={`${id}-heading`} level={HeadingLevels.Two}>
          {headingText}
        </Heading>
      )}
      {calloutText && (
        <Heading
          id={`${id}-callout`}
          level={HeadingLevels.Three}
          size={HeadingSizes.Callout}
        >
          {calloutText}
        </Heading>
      )}
      {hasImage && (
        <StructuredContentImage
          additionalFigureStyles={styles.imageFigure}
          additionalImageStyles={styles.image}
          additionalWrapperStyles={styles.imageWrapper}
          alt={imageProps.alt}
          component={imageProps.component}
          aspectRatio={imageProps.aspectRatio}
          caption={imageProps.caption}
          credit={imageProps.credit}
          size={imageProps.size}
          src={imageProps.src ? imageProps.src : null}
        />
      )}
      {finalBodyContent}
    </Box>
  );
}
