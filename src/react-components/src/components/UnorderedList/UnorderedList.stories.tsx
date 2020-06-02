import * as React from "react";
import bem from "../../utils/bem";

import UnorderedList from "./UnorderedList";
import Icon from "../Icons/Icon";
import { IconRotationTypes } from "../Icons/IconTypes";
import EditionCard, {
    EditionDetails,
    EditionCardProps,
} from "../EditionCard/EditionCard";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import Checkbox from "../Checkbox/Checkbox";
import { action } from "@storybook/addon-actions";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";

export default {
    title: "UnorderedList",
    component: UnorderedList,
};

const links = [
    <Link href="#url1">Link1</Link>,
    <Link href="#url2">link2</Link>,
    <Link href="#url3">link3</Link>,
];
export const iconLinkList = () => (
    <UnorderedList id="link-list" blockName="list-iconLink">
        {links}
    </UnorderedList>
);

let editionData: EditionDetails = {
    editionYearHeading: (
        <a href="edition-link2" className={bem("link", [], "heading")}>
            2004 Edition
        </a>
    ),
    coverUrl: "https://placeimg.com/57/81/arch",
    editionInfo: (
        <>
            <div>Published in New York by Random House</div>
            <div>Written in English</div>
            <div>Under Creative Commons License</div>
        </>
    ),
    readOnlineLink: (
        <Link blockName="edition-card" linkType={LinkTypes.Button} href="blah">
            Read Online
        </Link>
    ),
    downloadLink: (
        <Link href="#blah" linkType={LinkTypes.Action}>
            <Icon
                name="download"
                blockName="more-link"
                modifiers={["left"]}
                decorative={true}
                iconRotation={IconRotationTypes.rotate0}
            ></Icon>
            Download
        </Link>
    ),
};

const checkboxes = [
    <Checkbox
        key="checkbox-1"
        onChange={action("changed")}
        checkboxId="checkbox-1"
        labelOptions={{ id: "checkbox-1-label", labelContent: <>Checkbox 1</> }}
    ></Checkbox>,
    <Checkbox
        key="checkbox-2"
        onChange={action("changed")}
        checkboxId="checkbox-2"
        labelOptions={{ id: "checkbox-2-label", labelContent: <>Checkbox 2</> }}
    ></Checkbox>,
    <Checkbox
        key="checkbox-3"
        onChange={action("changed")}
        checkboxId="checkbox-3"
        labelOptions={{ id: "checkbox-3-label", labelContent: <>Checkbox 3</> }}
    ></Checkbox>,
];
export const checkboxList = () => (
    <UnorderedList id="checkbox-list">{checkboxes}</UnorderedList>
);

const editions = [
    <EditionCard
        id="edition-1"
        key="edition-1"
        coverUrl={editionData.coverUrl}
        editionHeadingElement={editionData.editionYearHeading}
        editionInfo={editionData.editionInfo}
        readOnlineLink={editionData.readOnlineLink}
        downloadLink={editionData.downloadLink}
    />,
    <EditionCard
        id="edition-2"
        key="edition-2"
        coverUrl={editionData.coverUrl}
        editionHeadingElement={editionData.editionYearHeading}
        editionInfo={editionData.editionInfo}
        readOnlineLink={editionData.readOnlineLink}
        downloadLink={editionData.downloadLink}
    />,
    <EditionCard
        id="edition-3"
        key="edition-3"
        coverUrl={editionData.coverUrl}
        editionHeadingElement={editionData.editionYearHeading}
        editionInfo={editionData.editionInfo}
        readOnlineLink={editionData.readOnlineLink}
        downloadLink={editionData.downloadLink}
    />,
];

export const editionsList = () => (
    <UnorderedList id="editions-list">{editions}</UnorderedList>
);

let searchItemData = {
    titleElement: (
        <a href="title-link-url" className={bem("link", ["no-underline"])}>
            Investigation of un-American propaganda activities in the United
            States. Hear...
        </a>
    ),
    subtitle: (
        <>
            "Subtitle need max character count Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua."
        </>
    ),
    editionInfo: {
        editionYearHeading: (
            <a href="edition-link" className={bem("link", [], "heading")}>
                2004 Edition
            </a>
        ),
        publisherAndLocation: "Published in New York by Random House",
        coverUrl: "https://placeimg.com/57/81/arch",
        editionInfo: (
            <>
                <div>Published in New York by Random House</div>
                <div>Written in English</div>
                <div>Under Creative Commons License</div>
            </>
        ),
        readOnlineLink: (
            <Link
                blockName="edition-card"
                linkType={LinkTypes.Button}
                href="blah"
            >
                Read Online
            </Link>
        ),
        downloadLink: (
            <Link href="#blah4" linkType={LinkTypes.Action}>
                <Icon
                    name="download"
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
            </Link>
        ),
    },
    authorElement: <Link href={"author-url"}>First Last</Link>,
    editionsLinkElement: (
        <Link href={"#allEditionsUrl"}>{`View All 7 editions`}</Link>
    ),
};

const searchResults = [
    <SearchResultItem
        key="search-result-item-1"
        id="search-result-item-1"
        resultIndex={1}
        headingContent={searchItemData.titleElement}
        subtitleContent={searchItemData.subtitle}
        authorLinkElement={searchItemData.authorElement}
        editionInfo={searchItemData.editionInfo}
        editionsLinkElement={searchItemData.editionsLinkElement}
    />,
    <SearchResultItem
        key="search-result-item-2"
        id="search-result-item-2"
        resultIndex={2}
        headingContent={searchItemData.titleElement}
        subtitleContent={searchItemData.subtitle}
        authorLinkElement={searchItemData.authorElement}
        editionInfo={searchItemData.editionInfo}
        editionsLinkElement={searchItemData.editionsLinkElement}
    />,
];

export const searchResultsList = () => (
    <UnorderedList id="search-results-list">{searchResults}</UnorderedList>
);

let textList: JSX.Element[] = [];

for (let i = 0; i < 100; i++) {
    textList.push(<span key={i}>Hello</span>);
}
export const textListWithScroll = () => (
    <UnorderedList id="text-list-scroll" modifiers={["scroll"]}>
        {textList}
    </UnorderedList>
);
