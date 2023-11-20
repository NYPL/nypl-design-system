import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Heading from "../Heading/Heading";
import Image, { ComponentImageProps, ImageProps } from "../Image/Image";

export type StructuredContentImagePosition = "left" | "right" | "center";

interface StructuredContentImageProps extends ComponentImageProps {
  /** Optional value to control the positioning of the internal `Image` component.
   * Defaults to `"left"`. */
  position?: StructuredContentImagePosition;
}

export interface StructuredContentProps {
  /** Optional value to set the text for the callout heading text. */
  calloutText?: string;
  /** Additional class name for the `StructuredContent` component. */
  className?: string;
  /** Optional value to set the text for the main heading text. */
  headingText?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Object used to create and render the `Image` component. */
  imageProps?: StructuredContentImageProps;
  /** Required value to set the text for the body content. */
  bodyContent: string | JSX.Element;
}

/**
 * Internal component used in the `StructuredContent` component
 * that renders the DS `Image` component.
 */
const StructuredContentImage: React.FC<any> = chakra((props: ImageProps) => {
  const {
    additionalFigureStyles,
    additionalImageStyles,
    additionalWrapperStyles,
    alt,
    aspectRatio,
    caption,
    component,
    credit,
    size,
    src,
  } = props;
  return (
    <Image
      additionalFigureStyles={additionalFigureStyles}
      additionalImageStyles={additionalImageStyles}
      additionalWrapperStyles={additionalWrapperStyles}
      alt={alt}
      component={component}
      aspectRatio={aspectRatio}
      size={size}
      caption={caption}
      credit={credit}
      src={src}
    />
  );
});

/**
 * The `StructuredContent` component that displays a heading, callout content,
 * an image, and body content. All are optional except for body content.
 */
export const StructuredContent: React.FC<any> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<StructuredContentProps>>(
    (props, ref?) => {
      const {
        calloutText,
        className,
        headingText,
        id,
        imageProps = {
          alt: "",
          aspectRatio: "square",
          caption: undefined,
          component: undefined,
          credit: undefined,
          position: "left",
          size: "medium",
          src: "",
        },
        bodyContent,
        ...rest
      } = props;
      const hasImage = imageProps.src || imageProps.component;
      const hasFigureImage = imageProps.caption || imageProps.credit;
      const styles = useMultiStyleConfig("StructuredContent", {
        hasFigureImage,
        imageAspectRatio: imageProps.aspectRatio,
        imagePosition: imageProps.position,
      });
      const finalBodyContent =
        typeof bodyContent === "string" ? (
          <div
            className="structuredcontent-body"
            dangerouslySetInnerHTML={{ __html: bodyContent }}
          />
        ) : (
          <Box className="structuredcontent-body">{bodyContent}</Box>
        );

      if (hasImage && !imageProps.alt) {
        console.warn(
          "NYPL Reservoir StructuredContent: The `imageProps.alt` prop is required " +
            "when using an image."
        );
      }

      return (
        <Box id={id} className={className} ref={ref} __css={styles} {...rest}>
          {headingText && <Heading id={`${id}-heading`}>{headingText}</Heading>}
          {calloutText && (
            <Heading id={`${id}-callout`} level="h3" size="heading5">
              {calloutText}
            </Heading>
          )}
          {hasImage && (
            <StructuredContentImage
              additionalFigureStyles={styles.imageFigure}
              additionalImageStyles={styles.image}
              additionalWrapperStyles={styles.imageWrapper}
              alt={imageProps.alt}
              component={imageProps.component}
              aspectRatio={imageProps.aspectRatio}
              caption={imageProps.caption}
              credit={imageProps.credit}
              size={imageProps.size}
              src={imageProps.src ? imageProps.src : undefined}
            />
          )}
          {finalBodyContent}
        </Box>
      );
    }
  )
);

export default StructuredContent;
