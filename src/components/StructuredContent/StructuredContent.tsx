import * as React from "react";
import { Box, useMultiStyleConfig, useStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import Image, { ImageProps } from "../Image/Image";
import { ImageRatios, ImageSizes } from "../Image/ImageTypes";

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
  imageAspectRatio?: ImageRatios;
  imageCaption?: string;
  imageComponent?: JSX.Element;
  imageCredit?: string;
  imagePosition?: StructuredContentImagePosition;
  imageSize?: ImageSizes;
  imageSrc?: string;
  textContent: string | JSX.Element;
}

function StructuredContentImage(props: ImageProps) {
  const { alt, component, imageSize, imageAspectRatio, src } = props;
  // Additional styles to add to the `Image` component.
  const styles = useStyleConfig("CardImage", {
    imageSize,
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

/**
 * The `StructuredContent` component renders a singular value StructuredContent or a range StructuredContent
 * with a min and max value. The value(s) can be updated through the StructuredContent
 * thumb(s) or through the text input(s) elements.
 */
export default function StructuredContent(
  props: React.PropsWithChildren<StructuredContentProps>
) {
  const {
    calloutContent,
    className,
    headingText,
    id = generateUUID(),
    imageAspectRatio,
    imageCaption,
    imageComponent,
    imageCredit,
    imagePosition,
    imageSize,
    imageSrc,
    textContent,
  } = props;
  const hasImage = imageSrc || imageComponent;

  const styles = useMultiStyleConfig("StructuredContent", {
    hasImage,
  });

  return (
    <Box id={id} className={className} __css={styles}>
      <Heading level={HeadingLevels.Two}>{headingText}</Heading>
      <Heading level={HeadingLevels.Four}>{calloutContent}</Heading>
      <StructuredContentImage
        alt=""
        imageAspectRatio={imageAspectRatio}
        imageCaption={imageCaption}
        imageCredit={imageCredit}
        imageSize={imageSize}
        src={imageSrc}
      />
      <Box _dangerouslySetInnerHTML={{ __html: textContent }} />
    </Box>
  );
}
