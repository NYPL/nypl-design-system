import * as React from "react";
import { Box, useMultiStyleConfig, useStyleConfig } from "@chakra-ui/react";

import bem from "../../utils/bem";
import { CardLayouts } from "./CardTypes";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import { ImageRatios, ImageSizes } from "../Image/ImageTypes";
import generateUUID from "../../helpers/generateUUID";

interface CardActionsProps {
  /** Optional boolean value to control visibility of border on the bottom edge
   * of the card actions element */
  bottomBorder?: boolean;
  /** Optional boolean value to control visibility of border on the top edge of
   * the card actions element */
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
  /** Optional CSS class name to add */
  className?: string;
  /** Optional hex color value used to override the default text color */
  foregroundColor?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Text description of the image; to follow best practices for accessibility, this prop should not be left blank if `imageSrc` is passed */
  imageAlt?: string;
  /** Optional value to control the aspect ratio of the card image; default value is `square` */
  imageAspectRatio?: ImageRatios;
  /** Optional boolean value to control the position of the card image */
  imageAtEnd?: boolean;
  /** Custom image component used in place of DS `Image` component */
  imageComponent?: JSX.Element;
  /** Optional value to control the size of the card image */
  imageSize?: ImageSizes;
  /** The path to the image displayed with the card */
  imageSrc?: string;
  /** Optional value to control the position of the image placeholder; default value is `column` */
  layout?: CardLayouts;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional padding value.  This value should be entered with the same formatting as a CSS padding attribute (ex. `5%`, `20px`, `2rem`).  If omitted, the Card will use the default padding. */
  padding?: string;
}

// Not being used in any examples but available for use.
export const CardImage = Image;

// CardHeading child-component
export const CardHeading = Heading;

// CardContent child-component
export function CardContent(props: React.PropsWithChildren<{}>) {
  const { children } = props;
  const styles = useStyleConfig("CardContent");
  return (
    children && (
      <Box className="card-content" __css={styles}>
        {children}
      </Box>
    )
  );
}

// CardActions child-component
export function CardActions(props: React.PropsWithChildren<CardActionsProps>) {
  const { bottomBorder, children, topBorder } = props;
  const styles = useStyleConfig("CardActions", {
    bottomBorder,
    topBorder,
  });

  return (
    children && (
      <Box className="card-actions" __css={styles}>
        {children}
      </Box>
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
    id = generateUUID(),
    imageAtEnd,
    layout,
    border,
    padding,
    modifiers = [],
    imageAlt,
    imageComponent,
    imageAspectRatio = ImageRatios.Original,
    imageSize = ImageSizes.Default,
    imageSrc,
  } = props;
  const baseClass = "card";
  const hasImage = imageSrc || imageComponent;
  const styles = {};
  const cardContents = [];

  layout && modifiers.push(layout);
  border && modifiers.push("with-border");
  center && modifiers.push("center");
  hasImage && modifiers.push("has-image");
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

  const styles2 = useMultiStyleConfig("Card", {});

  return (
    <Box
      className={bem(baseClass, modifiers, blockName, [className])}
      id={id}
      style={styles}
      __css={styles2}
    >
      {hasImage && (
        <CardImage
          className={`card__image ${imageSize}`}
          src={imageSrc ? imageSrc : null}
          component={imageComponent}
          alt={imageAlt ? imageAlt : null}
          imageSize={imageSize}
          imageAspectRatio={imageAspectRatio}
        />
      )}
      <Box className="card-body" __css={styles2.content}>
        {cardContents}
      </Box>
    </Box>
  );
}
