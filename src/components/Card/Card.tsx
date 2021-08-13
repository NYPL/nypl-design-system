import * as React from "react";
import bem from "../../utils/bem";

import { CardImageRatios, CardLayouts } from "./CardTypes";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

export interface CardProps {
  /** ClassName that appears in addition to "card" */
  className?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional value to control the aspect ratio of the cartd image; default value is `square` */
  imageAspectRatio?: CardImageRatios;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional value to control the position of the image placeholder; default value is `vertical` */
  layout?: CardLayouts;
  /** Optional boolean value to control visibility of border around skeleton loader */
  border?: boolean;
  /** Optional padding value.  This value should be entered with the same formatting as a CSS padding attribute (ex. `10%`, `640px`, `20rem`).  If omitted, the Card will use the default padding. */
  padding?: string;
}

// CardImage child-component
export function CardImage(props) {
  const { src, alt, className, imageAspectRatio, component } = props;
  if (src || component) {
    const imageWrapClass = `image-wrap image-wrap--${imageAspectRatio}`;
    return (
      <div className={bem("image", [], "card", [])}>
        <div className={imageWrapClass}>
          <div className="image-crop">
            {component ? (
              component
            ) : (
              <Image className={className} src={src} alt={alt} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

// CardHeading child-component
export function CardHeading(props) {
  const { children, className, displaySize, id, level, url } = props;
  return (
    <Heading
      className={className}
      level={level}
      displaySize={displaySize}
      id={id}
      url={url}
    >
      {children}
    </Heading>
  );
}

// CardContent child-component
export function CardContent(props) {
  const { children, className } = props;
  if (children) {
    return (
      <div className={bem("card-content", [], "", [className])}>{children}</div>
    );
  } else {
    return null;
  }
}

// CardActions child-component
export function CardActions(props) {
  const { children, className } = props;
  if (children) {
    return (
      <div className={bem("card-actions", [], "", [className])}>{children}</div>
    );
  } else {
    return null;
  }
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
  const {
    blockName,
    children,
    className,
    id,
    layout,
    border,
    padding,
    modifiers = [],
  } = props;
  const baseClass = "card";

  let cardStyle;
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
    cardStyle = {
      padding: padding,
    };
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
      style={cardStyle}
    >
      {imageCount === 1 ? childImage : null}
      <div className={bem("body", [], baseClass)}>{cardContents}</div>
    </div>
  );
}
