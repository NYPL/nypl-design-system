import * as Enzyme from "enzyme";
import * as React from "react";

import EditionCard from "./EditionCard";
import Link from "../Link/Link";
import Icon from "../../components/Icons/Icon";
import { LinkTypes } from "../../components/Link/LinkTypes";

describe("EditionCard", () => {
    const regularEditionCard = (
        <EditionCard
            id="card#1"
            blockName=""
            coverUrl="https://placeimg.com/300/400/arch"
            editionHeadingElement={<a href="edition-link">2004 Edition</a>}
            editionInfo={[
                <>Published in New York by Random House</>,
                <>Written in English</>,
                <>Under Creative Commons License</>,
            ]}
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
                <Link href="#passed-in-link">
                    <Icon
                        name="download"
                        blockName="more-link"
                        modifiers={["left"]}
                        decorative={true}
                    ></Icon>
                    Download
                </Link>
            }
        />
    );

    const elementEditionCard = (
        <EditionCard
            id="card#1"
            blockName=""
            coverUrl="https://placeimg.com/300/400/arch"
            editionHeadingElement={<a href="edition-link">2004 Edition</a>}
            editionInfo={[
                <span id="pub-span" key="1">
                    Publisher
                </span>,
                <>Written in English</>,
                <a id="licenceId" href="/licence-page" key="2">
                    License
                </a>,
            ]}
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
                <Link href="#passed-in-link">
                    <Icon
                        name="download"
                        blockName="more-link"
                        modifiers={["left"]}
                        decorative={true}
                    ></Icon>
                    Download
                </Link>
            }
        />
    );

    const missingLinkEditionCard = (
        <EditionCard
            id="card#1"
            blockName=""
            coverUrl="https://placeimg.com/300/400/arch"
            editionHeadingElement={<a href="edition-link">2004 Edition</a>}
            editionInfo={[
                <>Published in New York by Random House</>,
                <>Written in English</>,
                <>Under Creative Commons License</>,
            ]}
        />
    );

    const elementLinkEditionCard = (
        <EditionCard
            id="card#1"
            blockName=""
            coverUrl="https://placeimg.com/300/400/arch"
            editionHeadingElement={<a href="edition-link">2004 Edition</a>}
            editionInfo={[
                <>Published in New York by Random House</>,
                <>Written in English</>,
                <>Under Creative Commons License</>,
            ]}
            readOnlineLink={<span id="readOnlineSpan">Reading</span>}
            downloadLink={<span id="downloadSpan">Download</span>}
        />
    );

    const missingLinkNoLinkElement = (
        <EditionCard
            id="card#1"
            blockName=""
            coverUrl="https://placeimg.com/300/400/arch"
            editionHeadingElement={<a href="edition-link">2004 Edition</a>}
            editionInfo={[
                <>Published in New York by Random House</>,
                <>Written in English</>,
                <>Under Creative Commons License</>,
            ]}
            noLinkElement={<span id="noLinkElement">No Links</span>}
        />
    );

    const editionCardNoInfo = (
        <EditionCard
            id="card#1"
            blockName=""
            coverUrl="fake-link"
            editionHeadingElement={<a href="edition-link">2004 Edition</a>}
            editionInfo={[]}
        />
    );

    it("Generates an Edition Card with a Heading Link, Image and two Links", () => {
        const card = Enzyme.mount(regularEditionCard);
        expect(card.find("h3")).toHaveLength(1);
        expect(card.find("h3").find("a")).toHaveLength(1);
        expect(card.find("img")).toHaveLength(1);
        expect(
            card.find(".edition-card__card-info-link").find("a")
        ).toHaveLength(2);
    });

    it("Shows an error span if Links are missing and not passed a link element", () => {
        const card = Enzyme.mount(missingLinkEditionCard);
        expect(card.find("h3")).toHaveLength(1);
        expect(card.find("h3").find("a")).toHaveLength(1);
        expect(card.find("img")).toHaveLength(1);
        expect(
            card.find({ className: "edition-card__missing-links" })
        ).toHaveLength(1);
    });

    it("Shows an error span if Links are missing and not passed a link element", () => {
        const card = Enzyme.mount(missingLinkNoLinkElement);
        expect(card.find("#noLinkElement")).toHaveLength(1);
    });

    it("Generates Edition Card if no Edition Info is passed", () => {
        const card = Enzyme.mount(editionCardNoInfo);
        expect(card.find("h3")).toHaveLength(1);
        expect(card.find("h3").find("a")).toHaveLength(1);
        expect(card.find("img")).toHaveLength(1);
        expect(
            card.find({ className: "edition-card__missing-links" })
        ).toHaveLength(1);
    });

    it("Generates Edition Card if Edition Info is passed as spans", () => {
        const card = Enzyme.mount(elementEditionCard);
        expect(card.find("h3")).toHaveLength(1);
        expect(card.find("h3").find("a")).toHaveLength(1);
        expect(card.find("img")).toHaveLength(1);
        expect(card.find("#pub-span").text()).toBe("Publisher");
        expect(card.find("a#licenceId").text()).toBe("License");
    });

    it("Passes call-to-action links if it is given as span", () => {
        const card = Enzyme.mount(elementLinkEditionCard);
        expect(card.find("h3")).toHaveLength(1);
        expect(card.find("h3").find("a")).toHaveLength(1);
        expect(card.find("img")).toHaveLength(1);
        expect(card.find("#downloadSpan").text()).toBe("Download");
    });
});
