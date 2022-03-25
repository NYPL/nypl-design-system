import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import Heading from "../Heading/Heading";
import { HeadingDisplaySizes, HeadingLevels } from "../Heading/HeadingTypes";
import Image, { ImageProps } from "../Image/Image";
import { ImageRatios, ImageSizes } from "../Image/ImageTypes";
import { StructuredContentImagePosition } from "./StructuredContentTypes";
import generateUUID from "../../helpers/generateUUID";

export interface StructuredContentProps {
  /** Optional value to set the text for the callout heading text. */
  calloutText?: string;
  /** Additional class name for the `StructuredContent` component. */
  className?: string;
  /** Optional value to set the text for the main heading text. */
  headingText?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** String value used to populate the `alt` attribute of the internal `Image`
   * component's `img` element. @NOTE if an image is used, this value must be passed. */
  imageAlt?: string;
  /** Optional value to control the aspect ratio of the internal `Image` component.
   * Defaults to `ImageRatios.Square`. */
  imageAspectRatio?: ImageRatios;
  /** Optional value to render as a caption for the internal `Image` component. */
  imageCaption?: string;
  /** Optional DOM element to use instead of the DS `Image` component. */
  imageComponent?: JSX.Element;
  /** Optional value to render as a credit for the internal `Image` component. */
  imageCredit?: string;
  /** Optional value to control the positioning of the internal `Image` component.
   * Defaults to `StructuredContentImagePosition.Left`. */
  imagePosition?: StructuredContentImagePosition;
  /** Optional value to control the size of the internal `Image` component.
   * Defaults to `ImageSizes.Medium`. */
  imageSize?: ImageSizes;
  /** Optional value that contains the path to an image. If omitted, the internal
   * DS `Image` component will not render. */
  imageSrc?: string;
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
    component,
    imageAspectRatio,
    imageCaption,
    imageCredit,
    imageSize,
    src,
  } = props;
  return (
    <Image
      additionalFigureStyles={additionalFigureStyles}
      additionalImageStyles={additionalImageStyles}
      additionalWrapperStyles={additionalWrapperStyles}
      alt={alt}
      component={component}
      imageAspectRatio={imageAspectRatio}
      imageSize={imageSize}
      imageCaption={imageCaption}
      imageCredit={imageCredit}
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
    imageAlt = "",
    imageAspectRatio = ImageRatios.Square,
    imageCaption,
    imageComponent,
    imageCredit,
    imagePosition = StructuredContentImagePosition.Left,
    imageSize = ImageSizes.Medium,
    imageSrc,
    bodyContent,
  } = props;
  const hasImage = imageSrc || imageComponent;
  const hasFigureImage = imageCaption || imageCredit;
  const styles = useMultiStyleConfig("StructuredContent", {
    hasFigureImage,
    imageAspectRatio,
    imagePosition,
  });
  const finalBodyContent =
    typeof bodyContent === "string" ? (
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    ) : (
      <Box>{bodyContent}</Box>
    );

  if (hasImage && !imageAlt) {
    console.warn(
      "NYPL Reservoir StructuredContent: `imageAlt` prop is required when using an image."
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
          displaySize={HeadingDisplaySizes.Callout}
          id={`${id}-callout`}
          level={HeadingLevels.Three}
        >
          {calloutText}
        </Heading>
      )}
      {hasImage && (
        <StructuredContentImage
          additionalFigureStyles={styles.imageFigure}
          additionalImageStyles={styles.image}
          additionalWrapperStyles={styles.imageWrapper}
          alt={imageAlt}
          component={imageComponent}
          imageAspectRatio={imageAspectRatio}
          imageCaption={imageCaption}
          imageCredit={imageCredit}
          imageSize={imageSize}
          src={imageSrc ? imageSrc : null}
        />
      )}
      {finalBodyContent}
    </Box>
  );
}
