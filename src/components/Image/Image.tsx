import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import {
  Box,
  chakra,
  useMergeRefs,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, ImgHTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";

export type ImageRatios =
  | "fourByThree"
  | "oneByTwo"
  | "original"
  | "sixteenByNine"
  | "square"
  | "threeByFour"
  | "threeByTwo"
  | "twoByOne";
export type ImageSizes =
  | "default"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large";
export type ImageTypes = "default" | "circle";
// Used for components that have an `imageProps` prop.
export interface ComponentImageProps extends Partial<HTMLImageElement> {
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
  /** Flag to set the internal `Image` component to `isLazy` mode. */
  isLazy?: boolean;
  /** Optional value to control the size of the internal `Image` component.
   * Defaults to `ImageSizes.Default`. */
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
  /** Optional value to control the aspect ratio of the card image; default
   * value is `"original"` */
  aspectRatio?: ImageRatios;
  /** Optional value to control the size of the image */
  size?: ImageSizes;
}

export interface ImageProps
  extends ImageWrapperProps,
    ImgHTMLAttributes<HTMLImageElement> {
  /** Optionally pass in additional Chakra-based styles only for the figure. */
  additionalFigureStyles?: { [key: string]: any };
  /** Optionally pass in additional Chakra-based styles only for the image. */
  additionalImageStyles?: { [key: string]: any };
  /** Alternate text description of the image */
  alt?: string;
  /** Adding will wrap the image in a <figure> */
  caption?: string;
  /** Custom image component */
  component?: JSX.Element | null;
  /** Adding will wrap the image in a <figure> */
  credit?: string;
  /** Optional value for the image type */
  imageType?: ImageTypes;
  /** Flag to set the internal `Image` component to `isLazy` mode. */
  isLazy?: boolean;
  /** The src attribute is required, and contains the path to the image you want to embed. */
  src?: string;
}

const ImageWrapper = chakra(
  (props: React.PropsWithChildren<ImageWrapperProps>) => {
    const {
      additionalWrapperStyles = {},
      className = "",
      children,
      aspectRatio = "original",
      size = "default",
      ...rest
    } = props;
    const styles = useMultiStyleConfig("CustomImageWrapper", {
      ratio: aspectRatio,
      size,
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

export const Image = chakra(
  forwardRef<HTMLDivElement, ImageProps>((props, ref?) => {
    const {
      additionalFigureStyles = {},
      additionalImageStyles = {},
      additionalWrapperStyles = {},
      alt,
      aspectRatio = "original",
      caption,
      className = "",
      component,
      credit,
      imageType = "default",
      isLazy = false,
      size = "default",
      src,
      ...rest
    } = props;
    // Check if the native browser lazy loading is supported.
    const supportsLazyLoading = useNativeLazyLoading();
    // If it is (mostly Chromium-based browsers), then skip creating
    // the IntersectionObserver object.
    const [inViewRef, inView] = useInView({
      triggerOnce: true,
      skip: supportsLazyLoading,
    });
    const useImageWrapper = aspectRatio !== "original";
    const styles = useMultiStyleConfig("CustomImage", {
      variant: imageType,
      size,
    });
    let imageComponent: JSX.Element | null = null;
    let lazyRef = undefined;
    let finalRefs = undefined;
    let srcProp = isLazy ? {} : { src };

    if (alt && alt.length > 300) {
      throw new Error(
        "NYPL Reservoir Image: Alt text must be less than 300 characters."
      );
    }

    // For lazying loading images, the initial `src` value is empty. Once
    // the image is loaded, the `src` prop is set and passed to the image
    // element so that it can load. This also lets it load with a gray
    // background placeholder. We also only want to add the `inViewRef` ref
    // when `isLazy` is true to keep track of when the image is visible.
    if (isLazy && (inView || supportsLazyLoading)) {
      lazyRef = inViewRef;
      srcProp = { src };
    }

    // We want to add the `ref` from the `forwardRef` function regardless of
    // whether the image is lazy or not. This is meant for usage with other
    // components such as a `Tooltip`. The `inViewRef` is only added when
    // the `isLazy` prop is true.
    finalRefs = useMergeRefs(lazyRef, ref);

    imageComponent = component ? (
      component
    ) : (
      <Box
        as="img"
        alt={alt}
        loading={isLazy ? "lazy" : undefined}
        {...srcProp}
        __css={{ ...styles.img, ...additionalImageStyles }}
        {...rest}
      />
    );
    const finalImage = useImageWrapper ? (
      <ImageWrapper
        additionalWrapperStyles={additionalWrapperStyles}
        aspectRatio={aspectRatio}
        className={className}
        size={size}
        {...(caption || credit ? {} : rest)}
      >
        {imageComponent}
      </ImageWrapper>
    ) : (
      imageComponent
    );

    return (
      <Box ref={finalRefs} data-testid="test">
        {caption || credit ? (
          <Box
            as="figure"
            __css={{ ...styles.figure, ...additionalFigureStyles }}
          >
            {finalImage}
            <Box as="figcaption" __css={styles.figcaption}>
              {caption && <Box __css={styles.captionWrappers}>{caption}</Box>}
              {credit && <Box __css={styles.captionWrappers}>{credit}</Box>}
            </Box>
          </Box>
        ) : (
          finalImage
        )}
      </Box>
    );
  }),
  { shouldForwardProp: () => true }
);

export default Image;
