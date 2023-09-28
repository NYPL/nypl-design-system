import {
  Box,
  chakra,
  useMultiStyleConfig,
  Text,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Image, { ImageProps } from "../Image/Image";

export type featuredContentWidthType =
  | "oneQuarter"
  | "oneThird"
  | "oneHalf"
  | "twoThirds"
  | "threeQuarters";

export const featuredContentPositionArray = ["start", "end"] as const;
export type featuredContentPositionType =
  typeof featuredContentPositionArray[number];

interface FeaturedContentImageProps extends Pick<ImageProps, "alt" | "src"> {
  /** String value that specifies the width of the image rendered within the component. */
  width?: featuredContentWidthType;
  /** String value that specifies the position of the image rendered within the component. */
  position?: featuredContentPositionType;
}

export interface FeaturedContentProps {
  /** Optional CSS class name to add. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id: string;
  /** The text content rendered in the component.  DS components and native HTML can be passed in this prop. */
  textContent: string | JSX.Element;
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
  const { alt, width, position, src } = props;
  return <Image alt={alt} width={width} src={src} />;
}

export const FeaturedContent = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<FeaturedContentProps>>(
    (props) => {
      const {
        className,
        id,
        textContent,
        imageProps = {
          alt: "",
          position: "end",
          width: "oneHalf",
          src: "",
        },
        ...rest
      } = props;

      const styles = useMultiStyleConfig("FeaturedContent", {
        imagePosition: imageProps.position,
        imageWidth: imageProps.width,
      });

      return (
        <Box id={id} className={className} __css={styles} {...rest}>
          {textContent}
          <FeaturedContentImage
            alt={imageProps.alt}
            position={imageProps.position}
            width={imageProps.width}
            src={imageProps.src ? imageProps.src : undefined}
          />
        </Box>
      );
    }
  )
);

export default FeaturedContent;
