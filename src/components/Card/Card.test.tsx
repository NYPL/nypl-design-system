import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Card from "./Card";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";

describe("Card", () => {
  const regularCard = (
    <Card
      id="cardID"
      heading={<Heading level={3} id="heading1" text={"Optional Header"} />}
      image={<Image src="https://placeimg.com/400/200/arch" alt={""} />}
      ctas={
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
      }
      footer={<>Optional footer</>}
    >
      middle column content
    </Card>
  );

  const cardWithExtendedStyles = (
    <Card
      id="card#1"
      className="edition-card"
      heading={
        <Heading level={2} id="editioncardheading1" text={"2004 Edition"} />
      }
      image={<Image src="https://placeimg.com/300/400/arch" alt={""} />}
      ctas={
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
      }
    >
      <>
        <div>Published in New York by Random House</div>
        <div>Written in English</div>
        <div>
          License: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
          International
        </div>
      </>
    </Card>
  );

  const cardWithNoCTAs = (
    <Card
      id="card#1"
      image={<Image src="https://placeimg.com/300/400/arch" alt={""} />}
      className="edition-card"
      heading={
        <Heading level={2} id="editioncardheading1" text={"2004 Edition"} />
      }
    >
      <>
        <div>Published in New York by Random House</div>
        <div>Written in English</div>
        <div>Under Creative Commons License</div>
      </>
    </Card>
  );

  const cardWithNoContent = (
    <Card
      id="card#1"
      className="edition-card"
      image={<Image src="https://placeimg.com/300/400/arch" alt={""} />}
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
      }
    ></Card>
  );

  const cardWithNoImage = (
    <Card
      id="card#1"
      className="edition-card"
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
      }
    >
      middle column content
    </Card>
  );

  it("Generates a Card with a header, footer, image, middle content, and CTAs", () => {
    const card = Enzyme.mount(regularCard);
    expect(card.find(".card__heading")).to.have.lengthOf(1);
    expect(card.find(".card__image")).to.have.lengthOf(1);
    expect(card.find(".card__content")).to.have.lengthOf(1);
    expect(card.find(".card__ctas")).to.have.lengthOf(1);
    expect(card.find(".card__footer")).to.have.lengthOf(1);
  });

  it("Generates a Card with variable data", () => {
    const card = Enzyme.mount(cardWithExtendedStyles);
    expect(card.find("h2")).to.have.lengthOf(1);
    expect(card.find(".card__content").find("div")).to.have.lengthOf(4);
    expect(card.find(".card__ctas").find("a")).to.have.lengthOf(2);
  });

  it("Generates a card without a CTA block if one isn't provided", () => {
    const card = Enzyme.mount(cardWithNoCTAs);
    expect(card.find(".card__heading")).to.have.lengthOf(1);
    expect(card.find(".card__image")).to.have.lengthOf(1);
    expect(card.find(".card__content")).to.have.lengthOf(1);
    expect(card.find(".card__ctas")).to.have.lengthOf(0);
  });

  it("Generates a card without a content block if one isn't provided", () => {
    const card = Enzyme.mount(cardWithNoContent);
    expect(card.find(".card__heading")).to.have.lengthOf(1);
    expect(card.find(".card__image")).to.have.lengthOf(1);
    expect(card.find(".card__content")).to.have.lengthOf(0);
    expect(card.find(".card__ctas")).to.have.lengthOf(1);
  });

  it("Generates a card without an image block if no image is provided", () => {
    const card = Enzyme.mount(cardWithNoImage);
    expect(card.find(".card__heading")).to.have.lengthOf(1);
    expect(card.find(".card__image")).to.have.lengthOf(0);
    expect(card.find(".card__content")).to.have.lengthOf(1);
    expect(card.find(".card__ctas")).to.have.lengthOf(1);
  });
});
