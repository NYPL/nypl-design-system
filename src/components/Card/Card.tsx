import * as React from "react";
import bem from "../../utils/bem";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

interface CardProps {
  /** ClassName that appears in addition to "card" */
  className?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Calls to Action for the card, such as "download" on a card for a book */
  ctas?: React.ReactNode;
  /** Heading that appears within the card but above the three columns within it */
  heading?: React.ReactNode;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** First column within the card */
  image?: React.ReactNode;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Layout **/
  layout?: "vertical" | "horizontal";
  /** Border */
  border?: false | true;
  /** Padding */
  padding?: string;
}

// CardImage child-component
export function CardImage(props) {
  const { src, alt, className } = props;
  // let imageAltText = "";
  // if (imageAlt) {
  //   imageAltText = imageAlt;
  // }
  if (src) {
    return (
      <Image src={src} alt={alt} />
    );
  } else {
    return null;
  }
}

// CardHeading child-component
export function CardHeading(props) {
  const { children, id, level } = props;
  return (
    <Heading
      level={level} id={id}
    >
      {children}
    </Heading>
  );
}

// CardContent child-component
export function CardContent(props) {
  const { children, className } = props;
  return (
    <div className={bem("text", [], "", [className])}>
      {children}
    </div>
  );
}

// CardActions child-component
export function CardActions(props) {
  const { children, className } = props;
  return (
    <div className={bem("ctas", [], "", [className])}>
      {children}
    </div>
  );
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
  const {
    blockName,
    children,
    className,
    ctas,
    id,
    layout,
    border,
    padding,
    modifiers = [],
  } = props;
  const baseClass = "card";

  let cardStyle;
  let childHeading;
  let childContent;
  let childImage;
  let childActions;
  let headingCount = 0;
  let contentCount = 0;
  let imageCount = 0;
  let actionCount = 0;

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
    if (
      child.type === CardHeading) {
      childHeading = child;
      headingCount++;
    }

    if (child.type === CardContent) {
      childContent = child;
      contentCount++;
    }

    if (child.type === CardImage) {
      childImage = child;
      imageCount++;
    }

    if (child.type === CardActions) {
      childActions = child;
      actionCount++;
    }
  });

  return (
    <div
      className={bem(baseClass, modifiers, blockName, [className])}
      id={id}
      style={cardStyle}
    >
      {/* {image && <div className={bem("image", [], baseClass)}>{image}</div>} */}
      {imageCount ? (
        <div className={bem("image", [], baseClass)}>{childImage}</div>
      ) : null}
      <div className={bem("content", [], baseClass)}>
        <div className={bem("details", [], baseClass)}>
          {headingCount ? (
            <div className={bem("heading", [], baseClass)}>
              {childHeading}
            </div>
          ) : null}

          {contentCount ? (
            <div className={bem("text", [], baseClass)}>
              <p>{childContent}</p>
            </div>
          ) : null}

        </div>
      </div>
      {ctas && <div className={bem("ctas", [], baseClass)}>{ctas}</div>}
      {/* {actionCount ? (
        {childActions}
      ) : null } */}
    </div>
  );
}
