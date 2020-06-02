/* MC-14 Edition Card */
import * as React from "react";
import bem from "../../utils/bem";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

export type EditionDetails = {
    editionYearHeading: JSX.Element;
    coverUrl: string;
    editionInfo?: JSX.Element;

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
    editionInfo?: JSX.Element;

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
) {
    const {
        id,
        blockName,
        modifiers = [],
        coverUrl,
        editionHeadingElement,
        editionInfo,
        readOnlineLink,
        downloadLink,
        noLinkElement = <>Unavailable to read online</>,
    } = props;
    const baseClass = "edition-card";
    const noLinksElem = (
        <div className={bem("missing-links", [], baseClass)}>
            {noLinkElement}
        </div>
    );
    const getElem = (link: JSX.Element) => {
        return (
            <div className={bem("card-info-link", [], baseClass)}>{link}</div>
        );
    };

    const getButtonsElem = (
        readOnlineLink: JSX.Element,
        downloadLink: JSX.Element,
        baseClass: string
    ) => (
        <div className={bem("card-ctas", [], baseClass)}>
            {readOnlineLink && getElem(readOnlineLink)}
            {downloadLink && getElem(downloadLink)}
        </div>
    );

    const btns =
        readOnlineLink || downloadLink
            ? getButtonsElem(readOnlineLink, downloadLink, baseClass)
            : noLinksElem;

    return (
        <div className={bem(baseClass, modifiers, blockName)}>
            <Heading
                id={id}
                level={3}
                blockName={blockName ? blockName : baseClass}
            >
                {editionHeadingElement}
            </Heading>
            <div className={bem("card-content", [], baseClass)}>
                <div className={bem("card-image", [], baseClass)}>
                    <Image src={coverUrl} isDecorative={true}></Image>
                </div>
                <div className={bem("edition-info", [], baseClass)}>
                    {editionInfo}
                </div>
            </div>
            {btns}
        </div>
    );
}
