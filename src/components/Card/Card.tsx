import * as React from "react";
import bem from "../../utils/bem";

import { CardImageRatios, CardImageSizes, CardLayouts } from "./CardTypes";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

interface CardImageProps {
  /** Text description of the image */
  alt: string;
  /** Custom image component used in place of DS `Image` component */
  component?: React.ReactNode;
  /** ClassName you can add in addition to 'image' */
  className?: string;
  /** Optional value to control the aspect ratio of the cartd image; default value is `square` */
  imageAspectRatio?: CardImageRatios;
  /** Optional value to control the size of the card image */
  imageSize?: CardImageSizes;
  /** The src attribute is required, and contains the path to the image you want to embed. */
  src: string;
}

interface CardContentProps {
  /** Optional className that would be applied to the `card-content` element */
  className?: string;
}

interface CardActionsProps {
  /** Optional boolean value to control visibility of border on the bottom edge of the card actions element */
  bottomBorder?: boolean;
  /** Optional className that would be applied to the `card-actions` element */
  className?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional boolean value to control visibility of border on the top edge of the card actions element */
  topBorder?: boolean;
}

export interface CardProps {
  /** Optional hex color value used to set the card background color */
  backgroundColor?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Optional boolean value to control the visibility of a border around the card */
  border?: boolean;
  /** Optional boolean value to control the alignment of the text and elements within the card */
  center?: boolean;
  /** ClassName that appears in addition to "card" */
  className?: string;
  /** Optional hex color value used to override the default text color */
  foregroundColor?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Text description of the image; to follow best practices for accessibility, this prop should not be left blank if `imageSrc` is passed */
  imageAlt?: string;
  /** Optional value to control the aspect ratio of the card image; default value is `square` */
  imageAspectRatio?: CardImageRatios;
  /** Optional boolean value to control the position of the card image */
  imageAtEnd?: boolean;
  /** Custom image component used in place of DS `Image` component */
  imageComponent?: React.ReactNode;
  /** Optional value to control the size of the card image */
  imageSize?: CardImageSizes;
  /** The path to the image displayed with the card */
  imageSrc?: string;
  /** Optional value to control the position of the image placeholder; default value is `column` */
  layout?: CardLayouts;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional padding value.  This value should be entered with the same formatting as a CSS padding attribute (ex. `5%`, `20px`, `2rem`).  If omitted, the Card will use the default padding. */
  padding?: string;
}

// CardImage component
export function CardImage(props: React.PropsWithChildren<CardImageProps>) {
  const { src, alt, className, imageAspectRatio, imageSize, component } = props;
  const classNames = ["image-wrap"];
  imageAspectRatio && classNames.push(`image-wrap--` + imageAspectRatio);
  const imageModifiers = [];
  imageSize && imageModifiers.push(imageSize);
  return (
    (src || component) && (
      <>
        <div className={bem("image", imageModifiers, "card", [])}>
          <div className={classNames.join(" ")}>
            <div className="image-crop">
              {component ? (
                component
              ) : (
                <Image className={className} src={src} alt={alt} />
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
}

// CardHeading child-component
export const CardHeading = (props) => <Heading {...props} />;

// CardContent child-component
export function CardContent(props: React.PropsWithChildren<CardContentProps>) {
  const { children, className } = props;
  return (
    children && (
      <div className={bem("card-content", [], "", [className])}>{children}</div>
    )
  );
}

// CardActions child-component
export function CardActions(props: React.PropsWithChildren<CardActionsProps>) {
  const {
    bottomBorder,
    children,
    className,
    modifiers = [],
    topBorder,
  } = props;

  bottomBorder && modifiers.push("bottom-border");
  topBorder && modifiers.push("top-border");

  return (
    children && (
      <div className={bem("card-actions", modifiers, "", [className])}>
        {children}
      </div>
    )
  );
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
  const {
    backgroundColor,
    blockName,
    center,
    children,
    className,
    foregroundColor,
    id,
    imageAtEnd,
    layout,
    border,
    padding,
    modifiers = [],
    imageAlt,
    imageComponent,
    imageAspectRatio,
    imageSize,
    imageSrc,
  } = props;
  const baseClass = "card";

  const styles = {};
  let imageCount = 0;
  const cardContents = [];

  layout && modifiers.push(layout);
  border && modifiers.push("with-border");
  center && modifiers.push("center");
  (imageSrc || imageComponent) && modifiers.push("has-image");
  imageAtEnd && modifiers.push("at-end");

  padding && (styles["padding"] = padding);
  backgroundColor && (styles["backgroundColor"] = backgroundColor);
  foregroundColor && (styles["color"] = foregroundColor);

  React.Children.map(children, (child: React.ReactElement) => {
    if (
      child.type === CardHeading ||
      child.props.mdxType === "CardHeading" ||
      child.type === CardContent ||
      child.props.mdxType === "CardContent" ||
      child.type === CardActions ||
      child.props.mdxType === "CardActions"
    ) {
      cardContents.push(child);
    }
  });

  if (imageCount > 1) {
    console.error(`Only one CardIimage child component may be passed to Card.`);
    cardContents.length = 0;
    cardContents.push(
      "Error: Only one CardImage child component may be passed to Card."
    );
  }
  return (
    <div
      className={bem(baseClass, modifiers, blockName, [className])}
      id={id}
      style={styles}
    >
      {(imageSrc || imageComponent) && (
        <CardImage
          src={imageSrc ? imageSrc : null}
          component={imageComponent ? imageComponent : null}
          alt={imageAlt ? imageAlt : null}
          imageSize={imageSize ? imageSize : null}
          imageAspectRatio={imageAspectRatio ? imageAspectRatio : null}
        />
      )}
      <div className={bem("body", [], baseClass)}>{cardContents}</div>
    </div>
  );
}
