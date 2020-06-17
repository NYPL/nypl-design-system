import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import bem from "../../utils/bem";

import Card from "./Card";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes } from "../Icons/IconTypes";

describe("Card", () => {
    let regularCard = (
        <Card
            id="cardID"
            heading={
                <Heading level={3} id="heading1" text={"Optional Header"} />
            }
            image={
                <Image
                    src="https://placeimg.com/400/200/arch"
                    isDecorative={true}
                />
            }
            content={<div>Required middle column content</div>}
            ctas={
                <Button
                    callback={function () {
                        console.log(this);
                    }}
                    id="button1"
                    buttonType={ButtonTypes.Filled}
                    type="submit"
                >
                    Example CTA
                </Button>
            }
        ></Card>
    );

    let cardWithExtendedStyles = (
        <Card
            id="card#1"
            extraClassName={["edition-card"]}
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
            content={
                <>
                    <div>Published in New York by Random House</div>
                    <div>Written in English</div>
                    <div>
                        License: Creative Commons
                        Attribution-NonCommercial-NoDerivatives 4.0
                        International
                    </div>
                </>
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
        ></Card>
    );

    let cardWithNoCTAs = (
        <Card
            id="card#1"
            image={
                <Image
                    src="https://placeimg.com/300/400/arch"
                    isDecorative={true}
                />
            }
            extraClassName={["edition-card"]}
            heading={
                <Heading
                    level={2}
                    id="editioncardheading1"
                    text={"2004 Edition"}
                />
            }
            content={
                <>
                    <div>Published in New York by Random House</div>
                    <div>Written in English</div>
                    <div>Under Creative Commons License</div>
                </>
            }
        ></Card>
    );

    let cardWithNoContent = (
        <Card
            id="card#1"
            extraClassName={["edition-card"]}
            image={
                <Image
                    src="https://placeimg.com/300/400/arch"
                    isDecorative={true}
                />
            }
            heading={
                <Heading
                    level={2}
                    id="editioncardheading1"
                    url="#edition-link"
                    text={"2004 Edition"}
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
        ></Card>
    );

    let cardWithNoImage = (
        <Card
            id="card#1"
            extraClassName={["edition-card"]}
            heading={
                <Heading
                    level={2}
                    id="editioncardheading1"
                    url="#edition-link"
                    text={"2004 Edition"}
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
        ></Card>
    );

    it("Generates a Card with an optional header, image, middle content, and CTAs", () => {
        let card = Enzyme.mount(regularCard);
        expect(card.find(".card__heading")).to.have.lengthOf(1);
        expect(card.find(".card__image")).to.have.lengthOf(1);
        expect(card.find(".card__content")).to.have.lengthOf(1);
        expect(card.find(".card__ctas")).to.have.lengthOf(1);
    });

    it("Generates a Card with variable data", () => {
        let card = Enzyme.mount(cardWithExtendedStyles);
        expect(card.find("h2")).to.have.lengthOf(1);
        expect(card.find(".card__content").find("div")).to.have.lengthOf(3);
        expect(card.find(".card__ctas").find("a")).to.have.lengthOf(2);
    });

    it("Generates a card without a CTA block if one isn't provided", () => {
        let card = Enzyme.mount(cardWithNoCTAs);
        expect(card.find(".card__heading")).to.have.lengthOf(1);
        expect(card.find(".card__image")).to.have.lengthOf(1);
        expect(card.find(".card__content")).to.have.lengthOf(1);
        expect(card.find(".card__ctas")).to.have.lengthOf(0);
    });

    it("Generates a card without a content block if one isn't provided", () => {
        let card = Enzyme.mount(cardWithNoCTAs);
        expect(card.find(".card__heading")).to.have.lengthOf(1);
        expect(card.find(".card__image")).to.have.lengthOf(1);
        expect(card.find(".card__content")).to.have.lengthOf(0);
        expect(card.find(".card__ctas")).to.have.lengthOf(1);
    });

    it("Generates a card without an image block if no image is provided", () => {
        let card = Enzyme.mount(cardWithNoCTAs);
        expect(card.find(".card__heading")).to.have.lengthOf(1);
        expect(card.find(".card__image")).to.have.lengthOf(0);
        expect(card.find(".card__content")).to.have.lengthOf(1);
        expect(card.find(".card__ctas")).to.have.lengthOf(1);
    });
});
