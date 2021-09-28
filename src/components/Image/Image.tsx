import * as React from "react";

import bem from "../../utils/bem";
import { ImageRatios, ImageSizes } from "./ImageTypes";

export interface InitProps {
  /** Alternate text description of the image */
  alt: string;
  /** Additional attributes passed to the image */
  attributes?: { [key: string]: any };
  /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ClassName you can add in addition to 'image' */
  className?: string;
  /** Custom image component */
  component?: JSX.Element | null;
  /** Optional value to control the aspect ratio of the cartd image; default value is `square` */
  imageAspectRatio?: ImageRatios;
  /** Adding will wrap the image in a <figure> */
  imageCaption?: string;
  /** Adding will wrap the image in a <figure> */
  imageCredit?: string;
  /** Optional value to control the size of the card image */
  imageSize?: ImageSizes;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** The src attribute is required, and contains the path to the image you want to embed. */
  src: string;
}
type ImageProps = React.ComponentProps<"img"> & InitProps;

export default function Image(props: ImageProps) {
  const baseClass = "image";
  const {
    alt,
    attributes,
    blockName = "",
    className = "",
    component,
    imageCaption,
    imageCredit,
    modifiers = [],
    src,
    ...imgHTMLProps
  } = props;

  if (alt && alt.length > 300) {
    throw new Error("Alt Text must be less than 300 characters");
  }

  const figureBlockName = imageCaption || imageCredit ? "figure" : blockName;

  const imageProps: ImageProps = {
    className: bem(baseClass, modifiers, figureBlockName, [className]),
    src,
    alt,
  };
  const image: JSX.Element = component ? (
    component
  ) : (
    <img
      alt={imageProps.alt}
      {...imageProps}
      {...imgHTMLProps}
      {...attributes}
    />
  );

  return imageCaption || imageCredit ? (
    <figure className={bem("figure")}>
      {image}
      <figcaption className={bem("figcaption", [], "figure", ["image"])}>
        {imageCaption && (
          <div className={bem("caption", [], "figcaption")}>{imageCaption}</div>
        )}
        {imageCredit && (
          <div className={bem("credit", [], "figcaption")}>{imageCredit}</div>
        )}
      </figcaption>
    </figure>
  ) : (
    image
  );
}
