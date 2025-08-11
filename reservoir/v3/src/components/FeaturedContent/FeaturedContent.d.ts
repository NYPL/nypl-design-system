import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
import { ImageProps } from "../Image/Image";
export declare const featuredContentWidthArray: string[];
export type FeaturedContentWidthType = typeof featuredContentWidthArray[number];
export declare const featuredContentPositionArray: readonly ["start", "end"];
export type FeaturedContentPositionType =
  typeof featuredContentPositionArray[number];
export interface FeaturedContentImageProps extends ImageProps {
  /** String value that specifies the width of the image rendered within the component. */
  width?: FeaturedContentWidthType;
  /** String value that specifies the position of the image rendered within the component. */
  position?: FeaturedContentPositionType;
}
export interface FeaturedContentProps {
  /** Optional CSS class name to add. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** The text content rendered in the component.  DS components and native HTML can be passed in this prop. */
  textContent: string | JSX.Element;
  /** Whether component will fill the full width of the browser window, instead of just its parent element.
   * False by default. */
  isFullWidth: boolean;
  /** Data object that contains the props related to the image element: alt, position, src, width.  */
  imageProps: FeaturedContentImageProps;
}
export declare const FeaturedContent: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FeaturedContentProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FeaturedContentProps
>;
export default FeaturedContent;
