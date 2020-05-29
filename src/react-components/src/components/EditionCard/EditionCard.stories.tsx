import * as React from "react";
import bem from "../../utils/bem";

import { iconRotationTypes } from "../Icons/IconTypes";

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
        blockName=""
        coverUrl="https://placeimg.com/300/400/arch"
        editionHeadingElement={
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        }
        editionInfo={[
            <>Published in New York by Random House</>,
            <>Written in English</>,
            <>
                License: Creative Commons
                Attribution-NonCommercial-NoDerivatives 4.0 International
            </>,
        ]}
        readOnlineLink={
            <Link
                linkType={LinkTypes.Button}
                blockName="edition-card"
                url="blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link url="#url" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    decorative={true}
                    modifiers={["left"]}
                    iconRotation={iconRotationTypes.rotate0}
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
        editionInfo={[
            <>Published in New York by Random House</>,
            <>Written in English</>,
            <>Under Creative Commons License</>,
        ]}
        downloadLink={
            <Link url="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={iconRotationTypes.rotate0}
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
        editionInfo={[
            <>Published in New York by Random House</>,
            <>Written in English</>,
            <>Under Creative Commons License</>,
        ]}
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
        editionInfo={[
            <>Published in New York</>,
            <span>Under Creative Commons License</span>,
        ]}
        readOnlineLink={
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                url="blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link url="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={iconRotationTypes.rotate0}
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
        editionInfo={[]}
        readOnlineLink={
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                url="blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link url="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={iconRotationTypes.rotate0}
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
        editionInfo={[
            <>Publish Place: New York</>,
            <>Language: English</>,
            <>License: Creative Commons</>,
        ]}
        readOnlineLink={
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                url="#blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link url="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={iconRotationTypes.rotate0}
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
        editionInfo={[
            <>Published in New York by Random House"</>,
            <a href="find-link" className={bem("link", [], "heading")}>
                Find in a library
            </a>,
        ]}
        readOnlineLink={
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                url="blah"
            >
                Read Online
            </Link>
        }
        downloadLink={
            <Link url="#passed-in-link" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={iconRotationTypes.rotate0}
                ></Icon>
                Download
            </Link>
        }
    ></EditionCard>
);
