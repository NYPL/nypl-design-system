import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { ImageProps } from "../Image/Image";

export const featuredContentWidthArray = [
  "oneQuarter",
  "oneThird",
  "oneHalf",
  "twoThirds",
  "threeQuarters",
];
export type featuredContentWidthType = typeof featuredContentWidthArray[number];

export const featuredContentPositionArray = ["start", "end"] as const;
export type featuredContentPositionType =
  typeof featuredContentPositionArray[number];

interface FeaturedContentImageProps extends ImageProps {
  /** String value that specifies the width of the image rendered within the component. */
  width?: featuredContentWidthType;
  /** String value that specifies the position of the image rendered within the component. */
  position?: featuredContentPositionType;
}

export interface FeaturedContentProps {
  /** Optional CSS class name to add. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** The text content rendered in the component.  DS components and native HTML can be passed in this prop. */
  textContent: string | JSX.Element;
  /** Whether component will fill the full width of the browser window, instead of just its parent element.
   * False by default. */
  isFullWidth: boolean;
  /** Data object that contains the props related to the image element: alt, position, src, width.  */
  imageProps: FeaturedContentImageProps;
}

/**
 * The FeaturedContentImage component is used internally in the `FeaturedContent` component. It
 * renders an `Image` component but with overriding styles specific to the
 * `FeaturedContent` component.
 */
function FeaturedContentImage(
  props: React.ComponentProps<"img"> & FeaturedContentImageProps
) {
  const { alt, src } = props;
  return <img alt={alt} src={src} style={{ display: "none" }} />;
}

export const FeaturedContent = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<FeaturedContentProps>>(
    (props) => {
      const {
        textContent,
        isFullWidth,
        imageProps = {
          alt: "",
          position: "end",
          width: "oneHalf",
          src: "",
        },
      } = props;
      const styles = useMultiStyleConfig("FeaturedContent", {
        imagePosition: imageProps.position,
        imageWidth: imageProps.width,
        isFullWidth,
      });

      if (!imageProps) {
        console.warn(
          `NYPL Reservoir FeaturedContent: The 'imageProps' prop is required.`
        );
      } else {
        if (!imageProps.src) {
          console.warn(
            `NYPL Reservoir FeaturedContent: A value for 'imageProps.src' is required.`
          );
        }
        if (!imageProps.alt) {
          console.warn(
            `NYPL Reservoir FeaturedContent: A value for 'imageProps.alt' is required.`
          );
        }
      }

      if (!textContent) {
        console.warn(
          `NYPL Reservoir FeaturedContent: The 'textContent' prop is required.`
        );
      }

      return (
        <Box data-testid="featuredcontent" __css={styles.wrapper}>
          <Box
            data-testid="bg-image"
            __css={{
              ...styles.imgWrapper,
              backgroundImage: `url(${imageProps.src})`,
            }}
          >
            <FeaturedContentImage
              alt={imageProps.alt}
              src={imageProps.src ? imageProps.src : undefined}
            />
          </Box>
          <Box __css={styles.text}>{textContent}</Box>
        </Box>
      );
    }
  )
);

export default FeaturedContent;
