import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import Image, { ImageProps } from "../Image/Image";
import { ImageRatios, ImageSizes } from "../Image/ImageTypes";
import generateUUID from "../../helpers/generateUUID";

export enum StructuredContentImagePosition {
  Left = "left",
  Right = "right",
  Center = "center",
}

export interface StructuredContentProps {
  calloutContent?: string | JSX.Element;
  /** Additional class name for the StructuredContent component. */
  className?: string;
  headingText?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  imageAlt?: string;
  imageAspectRatio?: ImageRatios;
  imageCaption?: string;
  imageComponent?: JSX.Element;
  imageCredit?: string;
  imagePosition?: StructuredContentImagePosition;
  imageSize?: ImageSizes;
  imageSrc?: string;
  textContent: string | JSX.Element;
}

/**
 *
 */
function StructuredContentImage(props: ImageProps) {
  const {
    additionalStyles,
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
      additionalStyles={additionalStyles}
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
 * The `StructuredContent` component.
 */
export default function StructuredContent(
  props: React.PropsWithChildren<StructuredContentProps>
) {
  const {
    calloutContent,
    className,
    headingText,
    id = generateUUID(),
    imageAlt = "",
    imageAspectRatio = ImageRatios.Original,
    imageCaption,
    imageComponent,
    imageCredit,
    imagePosition = StructuredContentImagePosition.Left,
    imageSize = ImageSizes.Medium,
    imageSrc,
    textContent,
  } = props;
  const hasImage = imageSrc || imageComponent;
  const styles = useMultiStyleConfig("StructuredContent", {
    imagePosition,
  });
  const finalTextContent =
    typeof textContent === "string" ? (
      <div dangerouslySetInnerHTML={{ __html: textContent }} />
    ) : (
      <Box>{textContent}</Box>
    );

  if (hasImage && !imageAlt) {
    console.warn(
      "StructuredContent: `imageAlt` prop is required when using an image"
    );
  }

  return (
    <Box id={id} className={className} __css={styles}>
      {headingText && (
        <Heading level={HeadingLevels.Two}>{headingText}</Heading>
      )}
      {calloutContent && (
        <Heading level={HeadingLevels.Four}>{calloutContent}</Heading>
      )}
      {hasImage && (
        <StructuredContentImage
          additionalStyles={styles.image}
          alt={imageAlt}
          component={imageComponent}
          imageAspectRatio={imageAspectRatio}
          imageCaption={imageCaption}
          imageCredit={imageCredit}
          imageSize={imageSize}
          src={imageSrc ? imageSrc : null}
        />
      )}
      {finalTextContent}
    </Box>
  );
}
