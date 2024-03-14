import React from "react";
export interface HorizontalRuleProps {
    /** Optional alignment value to align the horizontal rule to one side or the
     * other when the width is less than 100%. If omitted, the horizontal rule
     * will have a default center alignment. */
    align?: "left" | "right";
    /** ClassName you can add in addition to `horizontal-rule` */
    className?: string;
}
export declare const HorizontalRule: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<HorizontalRuleProps & React.RefAttributes<HTMLDivElement & HTMLHRElement>>, {}>;
export default HorizontalRule;
