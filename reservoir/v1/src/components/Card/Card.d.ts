import React from "react";
import { LayoutTypes } from "../../helpers/types";
import { ComponentImageProps } from "../Image/Image";
interface CardBaseProps {
    /** Optional value to control the alignment of the text and elements. */
    isCentered?: boolean;
    /** Optional value to render the layout in a row or column.
     * Default is `"column"`. */
    layout?: LayoutTypes;
}
interface CardWrapperProps {
    /** Optional CSS class name to add. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Main link to use when the full `Card` component should be clickable. */
    mainActionLink?: string;
    /** Additional object for styling the `Card`'s `div` wrapper. */
    styles?: any;
}
interface CardImageProps extends ComponentImageProps {
    /** Optional boolean value to control the position of the `CardImage`. */
    isAtEnd?: boolean;
}
interface CardActionsProps extends CardBaseProps {
    /** Optional boolean value to control visibility of border on the bottom edge
     * of the card actions element */
    bottomBorder?: boolean;
    /** Optional boolean value to control visibility of border on the top edge of
     * the card actions element */
    topBorder?: boolean;
}
export interface CardProps extends CardBaseProps, CardWrapperProps {
    /** Optional hex color value used to set the card background color. */
    backgroundColor?: string;
    /** Optional hex color value used to override the default text color. */
    foregroundColor?: string;
    /** Optional boolean value to control the visibility of a border around
     * the card. */
    isBordered?: boolean;
    /** Object used to create and render the `Image` component. */
    imageProps?: CardImageProps;
    /** Set CardActions to the right content side. This only works in
     * the row layout. */
    isAlignedRightActions?: boolean;
}
export declare const CardHeading: import("@chakra-ui/react").ChakraComponent<import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<import("../Heading/Heading").HeadingProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLHeadingElement>>, {}>, {}>;
export declare const CardContent: import("@chakra-ui/react").ChakraComponent<(props: React.PropsWithChildren<{}>) => import("@emotion/react/jsx-runtime").JSX.Element, {}>;
export declare const CardActions: import("@chakra-ui/react").ChakraComponent<(props: React.PropsWithChildren<CardActionsProps>) => import("@emotion/react/jsx-runtime").JSX.Element, {}>;
export declare const Card: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<CardProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default Card;
