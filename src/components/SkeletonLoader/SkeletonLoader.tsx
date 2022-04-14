import {
  Box,
  chakra,
  Skeleton as ChakraSkeleton,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import { SkeletonLoaderImageRatios } from "./SkeletonLoaderTypes";
import { LayoutTypes } from "../../helpers/enums";

export interface SkeletonLoaderProps {
  /** Additional class name for the Skeleton component. */
  className?: string;
  /** Optional numeric value to control the number of lines for content
   * placeholder; default value is `3`. */
  contentSize?: number;
  /** Optional numeric value to control the number of lines for heading
   * placeholder; default value is `1`. */
  headingSize?: number;
  /** Optional value to control the aspect ratio of the image placeholder;
   * default value is `SkeletonLoaderImageRatios.Square`. */
  imageAspectRatio?: SkeletonLoaderImageRatios;
  /** Optional boolean value to control visibility of border around skeleton loader. */
  isBordered?: boolean;
  /** Optional value to control the position of the image placeholder;
   * default value is `LayoutTypes.Column`. */
  layout?: LayoutTypes;
  /** Optional boolean value to control visibility of button placeholder. */
  showButton?: boolean;
  /** Optional boolean value to control visibility of content placeholder. */
  showContent?: boolean;
  /** Optional boolean value to control visibility of heading placeholder. */
  showHeading?: boolean;
  /** Optional boolean value to control visibility of image placeholder. */
  showImage?: boolean;
  /** Optional width value. This value should be entered with the same
   * formatting as a CSS width attribute (ex. `50%`, `640px`, `20rem`).
   * If omitted, the skeleton loader will have a default width of 100%. */
  width?: string;
}

/**
 * The `SkeletonLoader` component renders a placeholder to be used while
 * dynamic content is loading.
 */
export const SkeletonLoader = chakra(
  (props: React.PropsWithChildren<SkeletonLoaderProps>) => {
    const {
      className,
      contentSize = 3,
      headingSize = 1,
      imageAspectRatio = SkeletonLoaderImageRatios.Square,
      isBordered = false,
      layout = LayoutTypes.Column,
      showButton = false,
      showContent = true,
      showHeading = true,
      showImage = true,
      width,
      ...rest
    } = props;
    const styles = useMultiStyleConfig("SkeletonLoader", {
      isBordered,
      imageAspectRatio,
      showImage,
      variant: layout,
    });

    /**
     * Generates the Chakra skeleton loader `size` number of times for the
     * "heading" and "content" areas defined by the `type` argument. The last
     * element will have width of `lastWidth`.
     */
    const getSkeletonElements = (type: string, size = 1, lastWidth = "80%") => {
      return new Array(size).fill(null).map((_, i) => {
        const width = i === size - 1 ? lastWidth : "100%";
        const marginBottomValue =
          i === size - 1 && type === "content" ? "0" : null;
        return (
          <ChakraSkeleton key={`${type}-${i}`} width={width}>
            <Box
              __css={styles[type]}
              style={{ marginBottom: marginBottomValue }}
            />
          </ChakraSkeleton>
        );
      });
    };

    return (
      <Box className={className} __css={styles} style={{ width }} {...rest}>
        {showImage && (
          <ChakraSkeleton>
            <Box __css={{ ...styles.element, ...styles.image }} />
          </ChakraSkeleton>
        )}
        <Box className={layout} __css={styles.container}>
          {showHeading && (
            <Box __css={styles.section}>
              {getSkeletonElements("heading", headingSize, "80%")}
            </Box>
          )}
          {showContent && (
            <Box __css={styles.section}>
              {getSkeletonElements("content", contentSize, "30%")}
            </Box>
          )}
          {showButton && (
            <Box __css={{ ...styles.section, ...styles.button }}>
              <ChakraSkeleton borderRadius="16px">
                <Box __css={styles.button} />
              </ChakraSkeleton>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);

export default SkeletonLoader;
