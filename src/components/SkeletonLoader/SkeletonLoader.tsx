import * as React from "react";
import bem from "../../utils/bem";
import {
  SkeletonLoaderImageRatios,
  SkeletonLoaderLayouts,
} from "./SkeletonLoaderTypes";

export interface SkeletonLoaderProps {
  /** Optional boolean value to control visibility of border around skeleton loader */
  border?: boolean;
  /** ClassName you can add in addition to `skeleton-loader` */
  className?: string;
  /** Optional numeric value to control the number of lines for content placeholder; default value is `3` */
  contentSize?: number;
  /** Optional numeric value to control the number of lines for heading placeholder; default value is `1` */
  headingSize?: number;
  /** Optional value to control the aspect ratio of the image placeholder; default value is `square` */
  imageAspectRatio?: SkeletonLoaderImageRatios;
  /** Optional value to control the position of the image placeholder; default value is `vertical` */
  layout?: SkeletonLoaderLayouts;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional boolean value to control visibility of button placeholder */
  showButton?: boolean;
  /** Optional boolean value to control visibility of content placeholder */
  showContent?: boolean;
  /** Optional boolean value to control visibility of image placeholder */
  showImage?: boolean;
  /** Optional boolean value to control visibility of heading placeholder */
  showHeading?: boolean;
  /** Optional width value.  This value should be entered with the same formatting as a CSS width attribute (ex. `50%`, `640px`, `20rem`).  If omitted, the skeleton loader will have a default width of 100%. */
  width?: string;
}

export default function SkeletonLoader(
  props: React.PropsWithChildren<SkeletonLoaderProps>
) {
  const {
    border,
    className,
    contentSize = 3,
    headingSize = 1,
    imageAspectRatio = SkeletonLoaderImageRatios.Square,
    layout = SkeletonLoaderLayouts.Vertical,
    showButton = false,
    showContent = true,
    showImage = true,
    showHeading = true,
    width = "auto",
    modifiers = [],
  } = props;

  modifiers.push(layout);
  {
    border && modifiers.push("border");
  }

  const imageModifiers = [imageAspectRatio];

  const headingItems = [];
  for (let i = 0; i < headingSize; i++) {
    headingItems.push(
      <div
        className={bem("skeleton-loader-heading", imageModifiers, "", [
          "skeleton-element",
        ])}
      ></div>
    );
  }

  const contentItems = [];
  for (let i = 0; i < contentSize; i++) {
    contentItems.push(
      <div
        className={bem("skeleton-loader-content", imageModifiers, "", [
          "skeleton-element",
        ])}
      ></div>
    );
  }

  return (
    <div
      className={bem("skeleton-loader", modifiers, "", [className])}
      style={{ width: width }}
    >
      {showImage && (
        <div className="skeleton-section">
          <div
            className={bem("skeleton-loader-image", imageModifiers, "", [
              "skeleton-element",
            ])}
          ></div>
        </div>
      )}
      <div style={{ width: "100%" }}>
        {showHeading && <div className="skeleton-section">{headingItems}</div>}
        {showContent && <div className="skeleton-section">{contentItems}</div>}
        {showButton && (
          <div className="skeleton-section">
            <div
              className={bem("skeleton-loader-button", imageModifiers, "", [
                "skeleton-element",
              ])}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
