import * as React from "react";
import bem from "../../../utils/bem";

import EditionCard from "./EditionCard";
import IconLink from "../../01-atoms/Links/IconLink";
import BasicLink from "../../01-atoms/Links/BasicLink";

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
            <BasicLink
                className={bem("card-button-link", [], "edition-card")}
                url="blah"
            >
                Read Online
            </BasicLink>
        }
        downloadLink={
            <IconLink
                iconName="download"
                iconPosition="left"
                iconRotation="rotate-0"
                url="blah"
            >
                Download
            </IconLink>
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
            <IconLink
                iconName="download"
                iconPosition="left"
                iconRotation="rotate-0"
                url="blah"
            >
                Download
            </IconLink>
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
            <BasicLink
                className={bem("card-button-link", [], "edition-card")}
                url="blah"
            >
                Read Online
            </BasicLink>
        }
        downloadLink={
            <IconLink
                iconName="download"
                iconPosition="left"
                iconRotation="rotate-0"
                url="blah"
            >
                Download
            </IconLink>
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
            <BasicLink
                className={bem("card-button-link", [], "edition-card")}
                url="blah"
            >
                Read Online
            </BasicLink>
        }
        downloadLink={
            <IconLink
                iconName="download"
                iconPosition="left"
                iconRotation="rotate-0"
                url="blah"
            >
                Download
            </IconLink>
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
            <BasicLink
                className={bem("card-button-link", [], "edition-card")}
                url="blah"
            >
                Read Online
            </BasicLink>
        }
        downloadLink={
            <IconLink
                iconName="download"
                iconPosition="left"
                iconRotation="rotate-0"
                url="blah"
            >
                Download
            </IconLink>
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
            <BasicLink
                className={bem("card-button-link", [], "edition-card")}
                url="blah"
            >
                Read Online
            </BasicLink>
        }
        downloadLink={
            <IconLink
                iconName="download"
                iconPosition="left"
                iconRotation="rotate-0"
                url="blah"
            >
                Download
            </IconLink>
        }
    ></EditionCard>
);
