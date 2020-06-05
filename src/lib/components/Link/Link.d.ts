import * as React from "react";
import { LinkTypes } from "./LinkTypes";
export interface LinkProps {
    /** Controls the link visuals—action, button, or default. */
    linkType?: LinkTypes;
    /** Href attribute */
    href?: string;
    /** BEM specifiers */
    modifiers?: string[];
    /** BEM specifiers */
    blockName?: string;
    /** Additional attributes, such as rel=nofollow, to pass to the <a> tag */
    attributes?: {};
}
export default function Link(
    linkProps: React.PropsWithChildren<LinkProps>
): React.DetailedReactHTMLElement<
    {
        className: string;
        /** Controls the link visuals—action, button, or default. */
        linkType?: LinkTypes;
        /** Href attribute */
        href?: string;
        /** BEM specifiers */
        modifiers?: string[];
        /** BEM specifiers */
        blockName?: string;
        /** Additional attributes, such as rel=nofollow, to pass to the <a> tag */
        attributes?: {};
        children?: React.ReactNode;
    },
    HTMLElement
>;
