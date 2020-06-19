import * as React from "react";
import bem from "../../utils/bem";

import UnorderedList from "./UnorderedList";
import Image from "../Image/Image";
import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import { IconRotationTypes } from "../Icons/IconTypes";
import Card from "../Card/Card";
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

let cardImage = (
    <Image src="https://placeimg.com/400/200/arch" isDecorative={true} />
);

let cardContent = (
    <>
        <div>Example content</div>
    </>
);

let cardCTAs = (
    <Link linkType={LinkTypes.Button} href="blah">
        Example CTA
    </Link>
);

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
    <Card
        id="edition-1"
        key="edition-1"
        className="edition-card"
        image={cardImage}
        ctas={cardCTAs}
    >
        {cardContent}
    </Card>,
    <Card
        id="edition-2"
        key="edition-2"
        className="edition-card"
        image={cardImage}
        ctas={cardCTAs}
    >
        {cardContent}
    </Card>,
    <Card
        id="edition-3"
        key="edition-3"
        className="edition-card"
        image={cardImage}
        ctas={cardCTAs}
    >
        {cardContent}
    </Card>,
];

export const cardList = () => (
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
            <Heading level={2} id="editioncardheading1" text={"2004 Edition"} />
        ),
        coverUrl: cardImage,
        editionInfo: cardContent,
        readOnlineLink: cardCTAs,
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
        card={
            <Card
                id="card#1"
                className="edition-card"
                heading={
                    <Heading
                        level={2}
                        id="editioncardheading1"
                        text={"2004 Edition"}
                    />
                }
                image={
                    <Image
                        src="https://placeimg.com/300/400/arch"
                        isDecorative={true}
                    />
                }
                ctas={
                    <div className="edition-card__ctas">
                        <Link linkType={LinkTypes.Button} href="blah">
                            Read Online
                        </Link>
                        <div className="edition-card__download">
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
                        </div>
                    </div>
                }
            >
                <>
                    <div>Published in New York by Random House</div>
                    <div>Written in English</div>
                    <div>
                        License: Creative Commons
                        Attribution-NonCommercial-NoDerivatives 4.0
                        International
                    </div>
                </>
            </Card>
        }
        editionsLinkElement={searchItemData.editionsLinkElement}
    />,
    <SearchResultItem
        key="search-result-item-2"
        id="search-result-item-2"
        resultIndex={2}
        headingContent={searchItemData.titleElement}
        subtitleContent={searchItemData.subtitle}
        authorLinkElement={searchItemData.authorElement}
        card={
            <Card
                id="card#1"
                className="edition-card"
                heading={
                    <Heading
                        level={2}
                        id="editioncardheading1"
                        text={"2004 Edition"}
                    />
                }
                image={
                    <Image
                        src="https://placeimg.com/300/400/arch"
                        isDecorative={true}
                    />
                }
                ctas={
                    <div className="edition-card__ctas">
                        <Link linkType={LinkTypes.Button} href="blah">
                            Read Online
                        </Link>
                        <div className="edition-card__download">
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
                        </div>
                    </div>
                }
            >
                <>
                    <div>Published in New York by Random House</div>
                    <div>Written in English</div>
                    <div>
                        License: Creative Commons
                        Attribution-NonCommercial-NoDerivatives 4.0
                        International
                    </div>
                </>
            </Card>
        }
        editionsLinkElement={searchItemData.editionsLinkElement}
    />,
];

export const searchResultsListWithEditionCards = () => (
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
