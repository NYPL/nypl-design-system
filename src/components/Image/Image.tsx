import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import { ImageRatios, ImageSizes, ImageTypes } from "./ImageTypes";

// Used for components that have an `imageProps` prop.
export interface ComponentImageProps {
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
  /** Optional value to control the size of the internal `Image` component.
   * Defaults to `ImageSizes.Medium`. */
  size?: ImageSizes;
  /** Optional value that contains the path to an image. If omitted, the internal
   * DS `Image` component will not render. */
  src?: string;
}

interface ImageWrapperProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalWrapperStyles?: { [key: string]: any };
  /** ClassName you can add in addition to 'image' */
  className?: string;
  /** Optional value to control the aspect ratio of the cartd image; default value is `square` */
  aspectRatio?: ImageRatios;
  /** Optional value to control the size of the image */
  size?: ImageSizes;
}

export interface ImageProps extends ImageWrapperProps {
  /** Optionally pass in additional Chakra-based styles only for the figure. */
  additionalFigureStyles?: { [key: string]: any };
  /** Optionally pass in additional Chakra-based styles only for the image. */
  additionalImageStyles?: { [key: string]: any };
  /** Alternate text description of the image */
  alt: string;
  /** Adding will wrap the image in a <figure> */
  caption?: string;
  /** Custom image component */
  component?: JSX.Element | null;
  /** Adding will wrap the image in a <figure> */
  credit?: string;
  /** Optional value for the image type */
  imageType?: ImageTypes;
  /** The src attribute is required, and contains the path to the image you want to embed. */
  src?: string;
}

function ImageWrapper(props: React.PropsWithChildren<ImageWrapperProps>) {
  const {
    additionalWrapperStyles = {},
    className = "",
    children,
    aspectRatio = ImageRatios.Original,
    size = ImageSizes.Default,
  } = props;
  const styles = useMultiStyleConfig("CustomImageWrapper", {
    ratio: aspectRatio,
    size,
  });
  return (
    <Box
      className={`the-wrap ${className}`}
      __css={{ ...styles, ...additionalWrapperStyles }}
    >
      <Box className="the-crop" __css={styles.crop}>
        {children}
      </Box>
    </Box>
  );
}

export default function Image(props: ImageProps) {
  const {
    additionalFigureStyles = {},
    additionalImageStyles = {},
    additionalWrapperStyles = {},
    alt,
    aspectRatio = ImageRatios.Original,
    caption,
    className = "",
    component,
    credit,
    imageType = ImageTypes.Default,
    size = ImageSizes.Default,
    src,
  } = props;
  const useImageWrapper = aspectRatio !== ImageRatios.Original;
  const styles = useMultiStyleConfig("CustomImage", {
    variant: imageType,
    size,
  });

  if (alt && alt.length > 300) {
    throw new Error(
      "NYPL Reservoir Image: Alt text must be less than 300 characters."
    );
  }

  const imageComponent: JSX.Element = component ? (
    component
  ) : (
    <Box
      as="img"
      src={src}
      alt={alt}
      __css={{ ...styles.img, ...additionalImageStyles }}
    />
  );
  const finalImage = useImageWrapper ? (
    <ImageWrapper
      additionalWrapperStyles={additionalWrapperStyles}
      aspectRatio={aspectRatio}
      className={className}
      size={size}
    >
      {imageComponent}
    </ImageWrapper>
  ) : (
    imageComponent
  );

  return caption || credit ? (
    <Box as="figure" __css={{ ...styles.figure, ...additionalFigureStyles }}>
      {finalImage}
      <Box as="figcaption" __css={styles.figcaption}>
        {caption && <Box __css={styles.captionWrappers}>{caption}</Box>}
        {credit && <Box __css={styles.captionWrappers}>{credit}</Box>}
      </Box>
    </Box>
  ) : (
    finalImage
  );
}
