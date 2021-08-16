import * as React from "react";
import bem from "../../utils/bem";

import { CardImageRatios, CardLayouts } from "./CardTypes";
import Heading from "../Heading/Heading";
import { HeadingDisplaySizes } from "../Heading/HeadingDisplaySizes";
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
  /** Optional value to control the offset of the image within the card UI.  This value should be entered with the same formatting as a CSS margin attribute (ex. `5%`, `20px`, `-2rem`).  Negative values can be used. */
  imageOffset?: string;
  /** The src attribute is required, and contains the path to the image you want to embed. */
  src: string;
}

interface CardHeadingProps {
  /** Optional className that appears in addition to `heading` */
  className?: string;
  /** Optional size used to override the default styles of the semantic HTML `<h>` elements */
  displaySize?: HeadingDisplaySizes;
  /** Optional ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Number 1-6; used to create the `<h*>` tag */
  level: number;
  /** Optional URL that header points to; when `url` prop is passed to `Heading`, a child `<a>` element is created and the heading text becomes an active link */
  url?: string;
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
  /** ClassName that appears in addition to "card" */
  className?: string;
  /** Optional hex color value used to override the default text color */
  foregroundColor?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional value to control the aspect ratio of the cartd image; default value is `square` */
  imageAspectRatio?: CardImageRatios;
  /** Optional value to control the offset of the image within the card UI.  This value should be entered with the same formatting as a CSS margin attribute (ex. `5%`, `20px`, `-2rem`).  Negative values can be used. */
  imageOffset?: string;
  /** Optional value to control the position of the image placeholder; default value is `vertical` */
  layout?: CardLayouts;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional padding value.  This value should be entered with the same formatting as a CSS padding attribute (ex. `5%`, `20px`, `2rem`).  If omitted, the Card will use the default padding. */
  padding?: string;
}

// CardImage child-component
export function CardImage(props: React.PropsWithChildren<CardImageProps>) {
  const {
    src,
    alt,
    className,
    imageAspectRatio,
    // imageOffset = "-4rem",
    imageOffset,
    component,
  } = props;
  const styles = {};
  if (imageOffset) {
    styles["marginTop"] = imageOffset;
  }
  return (
    (src || component) && (
      <div className={bem("image", [], "card", [])} style={styles}>
        <div className={`image-wrap image-wrap--${imageAspectRatio}`}>
          <div className="image-crop">
            {component ? (
              component
            ) : (
              <Image className={className} src={src} alt={alt} />
            )}
          </div>
        </div>
      </div>
    )
  );
}

// CardHeading child-component
export function CardHeading(props: React.PropsWithChildren<CardHeadingProps>) {
  const { children, className, displaySize, id, level, url } = props;
  return (
    children && (
      <Heading
        className={className}
        level={level}
        displaySize={displaySize}
        id={id}
        url={url}
      >
        {children}
      </Heading>
    )
  );
}

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
    children,
    className,
    foregroundColor,
    id,
    imageOffset,
    layout,
    border,
    padding,
    modifiers = [],
  } = props;
  const baseClass = "card";

  const styles = {};
  let childImage;
  let imageCount = 0;
  const cardContents = [];

  if (layout) {
    modifiers.push(layout);
  }

  if (border) {
    modifiers.push("with-border");
  }

  if (padding) {
    styles["padding"] = padding;
  }

  if (backgroundColor) {
    styles["backgroundColor"] = backgroundColor;
  }

  if (foregroundColor) {
    styles["color"] = foregroundColor;
  }

  if (imageOffset) {
    styles["marginTop"] = imageOffset;
  }

  React.Children.map(children, (child: React.ReactElement) => {
    if (child.type === CardImage) {
      childImage = child;
      imageCount++;
    } else {
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
      {imageCount === 1 ? childImage : null}
      <div className={bem("body", [], baseClass)}>{cardContents}</div>
    </div>
  );
}
