import React from "react";
interface SkipNavigationProps {
    /** Additional CSS class name to render in the `nav` element. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** The anchor target for the main skip link. The default is "#mainContent". */
    target?: string;
}
/**
 * SkipNavigation is a component that is used to provide a navigational list of
 * links. The first link is used to skip to the main content of the page using
 * the `#mainContent` id, and the second link points to accessibility information
 * on NYPL.org. These links are visually hidden but can be read by screenreaders.
 */
export declare const SkipNavigation: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<SkipNavigationProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default SkipNavigation;
