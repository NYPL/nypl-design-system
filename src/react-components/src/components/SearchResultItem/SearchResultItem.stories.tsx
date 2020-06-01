import * as React from "react";

import SearchResultItem from "./SearchResultItem";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Icon from "../Icons/Icon";
import { iconRotationTypes } from "../Icons/IconTypes";

import bem from "../../utils/bem";

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
        <Link href="blah" blockName="edition-card" linkType={LinkTypes.Button}>
            Read Online
        </Link>
    ),
    downloadLink: (
        <Link href="#passed-in-link" linkType={LinkTypes.Action}>
            <Icon
                name="download"
                blockName="more-link"
                modifiers={["left"]}
                decorative={true}
                iconRotation={iconRotationTypes.rotate0}
            ></Icon>
            Download
        </Link>
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
        authorLinkElement={<Link href={"author-url"}>First Last</Link>}
        editionInfo={exampleEditionInfo}
        editionsLinkElement={
            <Link href={"#allEditionsUrl"}>{`View All 7 editions`}</Link>
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
        authorLinkElement={<Link href={"author-url"}>First Last</Link>}
        editionInfo={exampleEditionInfo}
        editionsLinkElement={
            <Link href={"#allEditionsUrl"}>{`View All 7 editions`}</Link>
        }
    />
);
