import * as React from "react";
import bem from "../../utils/bem";
import Heading from "../Heading/Heading";
// import HeadingDisplaySizes from "../Heading/HeadingDisplaySizes";
import Image from "../Image/Image";

export interface CardProps {
  /** ClassName that appears in addition to "card" */
  className?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional size used to override the default styles of the semantic HTML `<h>` elements */
  // displaySize?: HeadingDisplaySizes;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Layout **/
  layout?: "vertical" | "horizontal";
  /** Border */
  border?: boolean;
  /** Padding */
  padding?: string;
}

// CardImage child-component
export function CardImage(props) {
  const { src, alt, className } = props;
  if (src) {
    return <Image className={className} src={src} alt={alt} />;
  } else {
    return null;
  }
}

// CardHeading child-component
export function CardHeading(props) {
  const { children, id, level, url } = props;
  return (
    <Heading className="card-heading" level={level} id={id} url={url}>
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
  let childHeading;
  let childImage;
  let headingCount = 0;
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
    if (child.type === CardHeading) {
      childHeading = child;
      headingCount++;
    }

    if (child.type === CardContent) {
      cardContents.push(
        <div className={bem("text", [], baseClass)}>{child}</div>
      );
    }

    if (child.type === CardImage) {
      childImage = child;
      imageCount++;
    }

    if (child.type === CardActions) {
      cardContents.push(
        <div className={bem("ctas", [], baseClass)}>{child}</div>
      );
    }
  });

  if (headingCount > 1) {
    console.error(
      `Only one CardHeading child component may be passed to Card.`
    );
    childHeading =
      "Error: Only one CardHeading child component may be passed to Card.";
  }

  return (
    <div
      className={bem(baseClass, modifiers, blockName, [className])}
      id={id}
      style={cardStyle}
    >
      {imageCount ? (
        <div className={bem("image", [], baseClass)}>{childImage}</div>
      ) : null}
      <div className={bem("content", [], baseClass)}>
        {headingCount ? (
          <div className={bem("heading", [], baseClass)}>{childHeading}</div>
        ) : null}

        {cardContents}
      </div>
    </div>
  );
}
