import { ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
export interface SkipNavigationProps {
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
export declare const SkipNavigation: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<SkipNavigationProps> & React.RefAttributes<HTMLDivElement>>, React.PropsWithChildren<SkipNavigationProps>>;
export default SkipNavigation;
