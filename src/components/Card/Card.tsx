import * as React from "react";
import bem from "../../utils/bem";

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

export default function Card(props: React.PropsWithChildren<CardProps>) {
  const {
    blockName,
    children,
    className,
    ctas,
    heading,
    id,
    image,
    layout,
    border,
    padding,
    modifiers = [],
  } = props;
  const baseClass = "card";

  if (layout) {
    modifiers.push(layout);
  }

  if (border) {
    modifiers.push("with-border");
  }

  let cardStyle;
  if (padding) {
    cardStyle = {
      padding: padding,
    };
  }

  return (
    <div
      className={bem(baseClass, modifiers, blockName, [className])}
      id={id}
      style={cardStyle}
    >
      {image && <div className={bem("image", [], baseClass)}>{image}</div>}
      <div className={bem("content", [], baseClass)}>
        <div className={bem("details", [], baseClass)}>
          {heading && (
            <div className={bem("heading", [], baseClass)}>{heading}</div>
          )}
          {children && (
            <div className={bem("text", [], baseClass)}>
              <p>{children}</p>
            </div>
          )}
          {ctas && <div className={bem("ctas", [], baseClass)}>{ctas}</div>}
        </div>
      </div>
    </div>
  );
}
