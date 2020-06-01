import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import EditionCard from "../../components/EditionCard/EditionCard";
import Link from "../../components/Link/Link";
import bem from "../../utils/bem";
import Icon from "../../components/Icons/Icon";
import { LinkTypes } from "../../components/Link/LinkTypes";

describe("EditionCard", () => {
    let regularEditionCard = (
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
                    url="blah"
                >
                    Read Online
                </Link>
            }
            downloadLink={
                <Link url="#passed-in-link">
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

    let elementEditionCard = (
        <EditionCard
            id="card#1"
            blockName=""
            coverUrl="https://placeimg.com/300/400/arch"
            editionHeadingElement={<a href="edition-link">2004 Edition</a>}
            editionInfo={[
                <span id="pub-span">Publisher</span>,
                <>"Written in English"</>,
                <a id="licenceId" href="/licence-page">
                    License
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
                <Link url="#passed-in-link">
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

    let missingLinkEditionCard = (
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

    let elementLinkEditionCard = (
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

    let missingLinkNoLinkElement = (
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

    let editionCardNoInfo = (
        <EditionCard
            id="card#1"
            blockName=""
            coverUrl="fake-link"
            editionHeadingElement={<a href="edition-link">2004 Edition</a>}
            editionInfo={[]}
        />
    );

    it("Generates an Edition Card with a Heading Link, Image and two Links", () => {
        let card = Enzyme.mount(regularEditionCard);
        expect(card.find("h3")).to.have.lengthOf(1);
        expect(card.find("h3").find("a")).to.have.lengthOf(1);
        expect(card.find("img")).to.have.lengthOf(1);
        expect(
            card.find(".edition-card__card-info-link").find("a")
        ).to.have.lengthOf(2);
    });

    it("Shows an error span if Links are missing and not passed a link element", () => {
        let card = Enzyme.mount(missingLinkEditionCard);
        expect(card.find("h3")).to.have.lengthOf(1);
        expect(card.find("h3").find("a")).to.have.lengthOf(1);
        expect(card.find("img")).to.have.lengthOf(1);
        expect(
            card.find({ className: "edition-card__missing-links" })
        ).to.have.lengthOf(1);
    });

    it("Shows an error span if Links are missing and not passed a link element", () => {
        let card = Enzyme.mount(missingLinkNoLinkElement);
        expect(card.find("#noLinkElement")).to.have.lengthOf(1);
    });

    it("Generates Edition Card if no Edition Info is passed", () => {
        let card = Enzyme.mount(editionCardNoInfo);
        expect(card.find("h3")).to.have.lengthOf(1);
        expect(card.find("h3").find("a")).to.have.lengthOf(1);
        expect(card.find("img")).to.have.lengthOf(1);
        expect(
            card.find({ className: "edition-card__missing-links" })
        ).to.have.lengthOf(1);
    });

    it("Generates Edition Card if Edition Info is passed as spans", () => {
        let card = Enzyme.mount(elementEditionCard);
        expect(card.find("h3")).to.have.lengthOf(1);
        expect(card.find("h3").find("a")).to.have.lengthOf(1);
        expect(card.find("img")).to.have.lengthOf(1);
        expect(card.find("#pub-span").text()).to.equal("Publisher");
        expect(card.find("a#licenceId").text()).to.equal("License");
    });

    it("Passes call-to-action links if it is given as span", () => {
        let card = Enzyme.mount(elementLinkEditionCard);
        expect(card.find("h3")).to.have.lengthOf(1);
        expect(card.find("h3").find("a")).to.have.lengthOf(1);
        expect(card.find("img")).to.have.lengthOf(1);
        expect(card.find("#downloadSpan").text()).to.equal("Download");
    });
});
