import * as React from "react";
export declare type EditionDetails = {
    editionYearHeading: JSX.Element;
    coverUrl: string;
    editionInfo: JSX.Element[];
    readOnlineLink: JSX.Element;
    downloadLink: JSX.Element;
    noLinkElement?: JSX.Element;
};
export interface EditionCardProps {
    id: string;
    blockName?: string;
    modifiers?: string[];
    coverUrl: string;
    editionHeadingElement: JSX.Element;
    editionInfo: JSX.Element[];
    /** readOnlineLink and downloadLink take in either urls as a string,
     * link-type (<a>, <ReactRouter.Link>) elements
     * TODO: make it so that it only takes elements.
     * Having it take URLs is confusing and the logic shouldn't live here.*/
    readOnlineLink?: JSX.Element;
    downloadLink?: JSX.Element;
    /** Element to render when there are no links. */
    noLinkElement?: JSX.Element;
}
/**
 * EditionCard component that renders information for an edition.
 */
export default function EditionCard(
    props: React.PropsWithChildren<EditionCardProps>
): JSX.Element;
