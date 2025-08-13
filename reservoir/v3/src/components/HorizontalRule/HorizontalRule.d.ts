import { ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
export interface HorizontalRuleProps {
    /** Optional alignment value to align the horizontal rule to one side or the
     * other when the width is less than 100%. If omitted, the horizontal rule
     * will have a default center alignment. */
    align?: "left" | "right";
    /** ClassName you can add in addition to `horizontal-rule` */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
}
export declare const HorizontalRule: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<HorizontalRuleProps> & React.RefAttributes<HTMLDivElement & HTMLHRElement>>, React.PropsWithChildren<HorizontalRuleProps>>;
export default HorizontalRule;
