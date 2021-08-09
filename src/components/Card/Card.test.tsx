import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Card, { CardImage, CardHeading, CardContent, CardActions } from "./Card";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";

describe("Card", () => {
  const regularCard = (
    <Card id="cardID">
      <CardImage src="https://placeimg.com/400/200/arch" alt="" />
      <CardHeading level={3} id="heading1">
        Optional Header
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <Button
          onClick={function () {
            console.log(this);
          }}
          id="button1"
          buttonType={ButtonTypes.Primary}
          type="submit"
        >
          Example CTA
        </Button>
      </CardActions>
    </Card>
  );

  const cardWithExtendedStyles = (
    <Card id="card#1" className="edition-card">
      <CardImage src="https://placeimg.com/300/400/arch" alt="Alt text" />
      <CardHeading level={2} id="editioncardheading1">
        Optional Header
      </CardHeading>
      <CardContent>
        <div>Published in New York by Random House</div>
        <div>Written in English</div>
        <div>
          License: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
          International
        </div>
      </CardContent>
      <CardActions>
        <div className="edition-card__ctas">
          <Link type={LinkTypes.Button} href="blah">
            Read Online
          </Link>
          <div className="edition-card__download">
            <Link href="#url" type={LinkTypes.Action}>
              <Icon
                name={IconNames.download}
                blockName="more-link"
                decorative={true}
                modifiers={["left"]}
                iconRotation={IconRotationTypes.rotate0}
              ></Icon>
              Download
            </Link>
          </div>
        </div>
      </CardActions>
    </Card>
  );

  const cardWithNoCTAs = (
    <Card id="card#1" className="edition-card">
      <CardImage src="https://placeimg.com/300/400/arch" alt={""} />
      <CardHeading level={2} id="editioncardheading1">
        2004 Edition
      </CardHeading>
      <CardContent>
        <div>Published in New York by Random House</div>
        <div>Written in English</div>
        <div>Under Creative Commons License</div>
      </CardContent>
    </Card>
  );

  const cardWithNoContent = (
    <Card id="card#1" className="edition-card">
      <CardImage src="https://placeimg.com/300/400/arch" alt={""} />
      <CardHeading level={2} id="editioncardheading1" url="#edition-link">
        2004 Edition
      </CardHeading>
      <CardActions>
        <div className="edition-card__ctas">
          <Link type={LinkTypes.Button} href="blah">
            Read Online
          </Link>
          <div className="edition-card__download">
            <Link href="#url" type={LinkTypes.Action}>
              <Icon
                name={IconNames.download}
                blockName="more-link"
                decorative={true}
                modifiers={["left"]}
                iconRotation={IconRotationTypes.rotate0}
              ></Icon>
              Download
            </Link>
          </div>
        </div>
      </CardActions>
    </Card>
  );

  const cardWithNoImage = (
    <Card id="card#1" className="edition-card">
      <CardHeading level={2} id="editioncardheading1" url="#edition-link">
        2004 Edition
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <div className="edition-card__ctas">
          <Link type={LinkTypes.Button} href="blah">
            Read Online
          </Link>
          <div className="edition-card__download">
            <Link href="#url" type={LinkTypes.Action}>
              <Icon
                name={IconNames.download}
                blockName="more-link"
                decorative={true}
                modifiers={["left"]}
                iconRotation={IconRotationTypes.rotate0}
              ></Icon>
              Download
            </Link>
          </div>
        </div>
      </CardActions>
    </Card>
  );

  it("Generates a Card with a header, image, middle content, and CTAs", () => {
    const card = Enzyme.mount(regularCard);
    expect(card.find(".card__heading")).to.have.lengthOf(1);
    expect(card.find(".card__image")).to.have.lengthOf(1);
    expect(card.find(".card__text")).to.have.lengthOf(1);
    expect(card.find(".card__ctas")).to.have.lengthOf(1);
  });

  it("Generates a Card with variable data", () => {
    const card = Enzyme.mount(cardWithExtendedStyles);
    expect(card.find("h2")).to.have.lengthOf(1);
    expect(card.find(".card__text").find("div")).to.have.lengthOf(5);
    expect(card.find(".card__ctas").find("a")).to.have.lengthOf(2);
  });

  it("Generates a card without a CTA block if one isn't provided", () => {
    const card = Enzyme.mount(cardWithNoCTAs);
    expect(card.find(".card__heading")).to.have.lengthOf(1);
    expect(card.find(".card__image")).to.have.lengthOf(1);
    expect(card.find(".card__text")).to.have.lengthOf(1);
    expect(card.find(".card__ctas")).to.have.lengthOf(0);
  });

  it("Generates a card without a content block if one isn't provided", () => {
    const card = Enzyme.mount(cardWithNoContent);
    expect(card.find(".card__heading")).to.have.lengthOf(1);
    expect(card.find(".card__image")).to.have.lengthOf(1);
    expect(card.find(".card__text")).to.have.lengthOf(0);
    expect(card.find(".card__ctas")).to.have.lengthOf(1);
  });

  it("Generates a card without an image block if no image is provided", () => {
    const card = Enzyme.mount(cardWithNoImage);
    expect(card.find(".card__heading")).to.have.lengthOf(1);
    expect(card.find(".card__image")).to.have.lengthOf(0);
    expect(card.find(".card__text")).to.have.lengthOf(1);
    expect(card.find(".card__ctas")).to.have.lengthOf(1);
  });
});
