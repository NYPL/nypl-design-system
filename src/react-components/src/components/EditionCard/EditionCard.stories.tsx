import * as React from "react";
import bem from "../../utils/bem";

import { IconRotationTypes } from "../Icons/IconTypes";

import EditionCard from "./EditionCard";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";

export default {
    title: "Edition Card",
    component: EditionCard,
};

export const editionCardWithFullData = () => (
    <EditionCard
        id="card#1"
        coverUrl="https://placeimg.com/300/400/arch"
        editionHeadingElement={
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        }
        editionInfo={
            <>
                <div>Published in New York by Random House</div>
                <div>Written in English</div>
                <div>License: Creative Commons</div>
                <div>
                    Attribution-NonCommercial-NoDerivatives 4.0 International
                </div>
            </>
        }
        readOnlineLink={
            <Link
                linkType={LinkTypes.Button}
                blockName="edition-card"
                href="blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link href="#url" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    decorative={true}
                    modifiers={["left"]}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
            </Link>
        }
    ></EditionCard>
);

export const editionCardWithOneLinks = () => (
    <EditionCard
        id="card#1"
        blockName=""
        coverUrl="https://placeimg.com/300/400/arch"
        editionHeadingElement={
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        }
        editionInfo={
            <>
                <div>Published in New York by Random House</div>
                <div>Written in English</div>
                <div>Under Creative Commons License</div>
            </>
        }
        downloadLink={
            <Link href="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
            </Link>
        }
    ></EditionCard>
);

export const editionCardMissingLinks = () => (
    <EditionCard
        id="card#1"
        blockName=""
        coverUrl="https://placeimg.com/300/400/arch"
        editionHeadingElement={
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        }
        editionInfo={
            <>
                <div>Published in New York</div>
                <div>Written in English</div>
                <div>Under Creative Commons License</div>
            </>
        }
    ></EditionCard>
);

export const editionCardWithSomeEditionInfo = () => (
    <EditionCard
        id="card#1"
        blockName=""
        coverUrl="https://placeimg.com/300/400/arch"
        editionHeadingElement={
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        }
        editionInfo={
            <>
                <div>Published in New York</div>
                <div>Under Creative Commons License</div>
            </>
        }
        readOnlineLink={
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                href="blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link href="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
            </Link>
        }
    ></EditionCard>
);

export const editionCardWithEmptyEditionInfo = () => (
    <EditionCard
        id="card#1"
        blockName=""
        coverUrl="https://placeimg.com/300/400/arch"
        editionHeadingElement={
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        }
        readOnlineLink={
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                href="blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link href="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
            </Link>
        }
    ></EditionCard>
);

export const editionCardWithAtypicalImageSize = () => (
    <EditionCard
        id="card#1"
        blockName=""
        coverUrl="https://placeimg.com/450/100/arch"
        editionHeadingElement={
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        }
        editionInfo={
            <>
                <div>Publish Place: New York</div>
                <div>Language: English</div>
                <div>License: Creative Commons</div>
            </>
        }
        readOnlineLink={
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                href="#blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link href="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
            </Link>
        }
    ></EditionCard>
);

export const instanceCard = () => (
    <EditionCard
        id="card#1"
        blockName=""
        coverUrl="https://placeimg.com/450/100/arch"
        editionHeadingElement={
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        }
        editionInfo={
            <>
                <div>Published in New York by Random House</div>
                <a href="find-link" className={bem("link", [], "heading")}>
                    Find in a library
                </a>
            </>
        }
        readOnlineLink={
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                href="blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link href="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
            </Link>
        }
    ></EditionCard>
);
