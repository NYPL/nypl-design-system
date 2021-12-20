import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import { ImageRatios, ImageSizes, ImageTypes } from "./ImageTypes";

interface ImageWrapperProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
  /** ClassName you can add in addition to 'image' */
  className?: string;
  /** Optional value to control the aspect ratio of the cartd image; default value is `square` */
  imageAspectRatio?: ImageRatios;
  /** Optional value to control the size of the image */
  imageSize?: ImageSizes;
}

export interface ImageProps extends ImageWrapperProps {
  /** Alternate text description of the image */
  alt: string;
  /** Custom image component */
  component?: JSX.Element | null;
  /** Adding will wrap the image in a <figure> */
  imageCaption?: string;
  /** Adding will wrap the image in a <figure> */
  imageCredit?: string;
  /** Optional value to control the size of the image */
  imageSize?: ImageSizes;
  /** Optional value for the image type */
  imageType?: ImageTypes;
  /** The src attribute is required, and contains the path to the image you want to embed. */
  src: string;
}

function ImageWrapper(props: React.PropsWithChildren<ImageWrapperProps>) {
  const {
    additionalStyles = {},
    className = "",
    children,
    imageAspectRatio = ImageRatios.Original,
    imageSize = ImageSizes.Default,
  } = props;
  const styles = useMultiStyleConfig("CustomImageWrapper", {
    ratio: imageAspectRatio,
    size: imageSize,
  });
  return (
    <Box
      __css={{ ...styles, ...additionalStyles }}
      className={`the-wrap ${className}`}
    >
      <Box __css={styles.crop} className="the-crop">
        {children}
      </Box>
    </Box>
  );
}

export default function Image(props: React.ComponentProps<"img"> & ImageProps) {
  const {
    additionalStyles = {},
    alt,
    className = "",
    component,
    imageAspectRatio = ImageRatios.Original,
    imageCaption,
    imageCredit,
    imageSize = ImageSizes.Default,
    imageType = ImageTypes.Default,
    src,
  } = props;
  const useImageWrapper = imageAspectRatio !== ImageRatios.Original;
  const styles = useMultiStyleConfig("CustomImage", {
    variant: imageType,
    size: imageSize,
  });

  if (alt && alt.length > 300) {
    throw new Error("Alt Text must be less than 300 characters");
  }

  const imageComponent: JSX.Element = component ? (
    component
  ) : (
    <Box as="img" src={src} alt={alt} __css={styles.img} />
  );
  const finalImage =
    useImageWrapper && !component ? (
      <ImageWrapper
        className={className}
        imageAspectRatio={imageAspectRatio}
        imageSize={imageSize}
        additionalStyles={additionalStyles}
      >
        {imageComponent}
      </ImageWrapper>
    ) : (
      imageComponent
    );

  return imageCaption || imageCredit ? (
    <Box as="figure" __css={styles.figure}>
      {finalImage}
      <Box as="figcaption" __css={styles.figcaption}>
        {imageCaption && (
          <Box __css={styles.captionWrappers}>{imageCaption}</Box>
        )}
        {imageCredit && <Box __css={styles.captionWrappers}>{imageCredit}</Box>}
      </Box>
    </Box>
  ) : (
    finalImage
  );
}
