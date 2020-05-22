import * as React from "react";

import SearchResultItem from "./SearchResultItem";
import UnderlineLink from "../UnderlineLink/UnderlineLink";

import bem from "../../utils/bem";
import BasicLink from "../BasicLink/BasicLink";
import IconLink from "../IconLink/IconLink";

export default {
    title: "Search Result Item",
    component: SearchResultItem,
};

let exampleEditionInfo = {
    editionYearHeading: (
        <a href="edition-link" className={bem("link", [], "heading")}>
            2004 Edition
        </a>
    ),
    coverUrl: "https://placeimg.com/57/81/arch",
    editionInfo: [
        <>Published in New York by Random House</>,
        <>Written in English</>,
        <>Under Creative Commons License</>,
    ],
    readOnlineLink: (
        <BasicLink
            className={bem("card-button-link", [], "edition-card")}
            url="blah"
        >
            Read Online
        </BasicLink>
    ),
    downloadLink: (
        <IconLink
            iconName="download"
            iconPosition="left"
            iconModifiers={["icon-left"]}
            url="blah"
        >
            Download
        </IconLink>
    ),
};

export const searchResultItem = () => (
    <SearchResultItem
        id="Result1"
        resultIndex={1}
        headingContent={
            <a href="title-link-url" className={bem("link", ["no-underline"])}>
                Investigation of un-American propaganda activities in the United
                States. Hear...
            </a>
        }
        subtitleContent={
            <>
                "Subtitle need max character count Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua."
            </>
        }
        authorLinkElement={
            <UnderlineLink url={"author-url"}>First Last</UnderlineLink>
        }
        editionInfo={exampleEditionInfo}
        editionsLinkElement={
            <UnderlineLink
                url={"#allEditionsUrl"}
            >{`View All 7 editions`}</UnderlineLink>
        }
    />
);

export const searchResultItemNoSubtitle = () => (
    <SearchResultItem
        id="Result1"
        resultIndex={1}
        headingContent={
            <a href="title-link-url" className={bem("link", ["no-underline"])}>
                Investigation of un-American propaganda activities in the United
                States. Hear...
            </a>
        }
        subtitleContent={<></>}
        authorLinkElement={
            <UnderlineLink url={"author-url"}>First Last</UnderlineLink>
        }
        editionInfo={exampleEditionInfo}
        editionsLinkElement={
            <UnderlineLink
                url={"#allEditionsUrl"}
            >{`View All 7 editions`}</UnderlineLink>
        }
    />
);
