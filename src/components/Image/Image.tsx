import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import { ImageRatios, ImageSizes, ImageTypes } from "./ImageTypes";

interface ImageWrapperProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalWrapperStyles?: { [key: string]: any };
  /** ClassName you can add in addition to 'image' */
  className?: string;
  /** Optional value to control the aspect ratio of the cartd image; default value is `square` */
  imageAspectRatio?: ImageRatios;
  /** Optional value to control the size of the image */
  imageSize?: ImageSizes;
}

export interface ImageProps extends ImageWrapperProps {
  /** Optionally pass in additional Chakra-based styles only for the figure. */
  additionalFigureStyles?: { [key: string]: any };
  /** Optionally pass in additional Chakra-based styles only for the image. */
  additionalImageStyles?: { [key: string]: any };
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

const ImageWrapper = chakra(
  (props: React.PropsWithChildren<ImageWrapperProps>) => {
    const {
      additionalWrapperStyles = {},
      className = "",
      children,
      imageAspectRatio = ImageRatios.Original,
      imageSize = ImageSizes.Default,
      ...rest
    } = props;
    const styles = useMultiStyleConfig("CustomImageWrapper", {
      ratio: imageAspectRatio,
      size: imageSize,
    });
    return (
      <Box
        className={`the-wrap ${className}`}
        __css={{ ...styles, ...additionalWrapperStyles }}
        {...rest}
      >
        <Box className="the-crop" __css={styles.crop}>
          {children}
        </Box>
      </Box>
    );
  }
);

export const Image = chakra((props: ImageProps) => {
  const {
    additionalFigureStyles = {},
    additionalImageStyles = {},
    additionalWrapperStyles = {},
    alt,
    className = "",
    component,
    imageAspectRatio = ImageRatios.Original,
    imageCaption,
    imageCredit,
    imageSize = ImageSizes.Default,
    imageType = ImageTypes.Default,
    src,
    ...rest
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
    <Box
      as="img"
      src={src}
      alt={alt}
      __css={{ ...styles.img, ...additionalImageStyles }}
    />
  );
  const finalImage = useImageWrapper ? (
    <ImageWrapper
      className={className}
      imageAspectRatio={imageAspectRatio}
      imageSize={imageSize}
      additionalWrapperStyles={additionalWrapperStyles}
      {...rest}
    >
      {imageComponent}
    </ImageWrapper>
  ) : (
    imageComponent
  );

  return imageCaption || imageCredit ? (
    <Box as="figure" __css={{ ...styles.figure, ...additionalFigureStyles }}>
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
});

export default Image;
