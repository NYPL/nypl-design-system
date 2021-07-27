import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Card from "./Card";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";

describe("Card Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Card
        id="cardID"
        heading={<Heading level={3} id="heading1" text="Optional Header" />}
        image={<Image src="https://placeimg.com/400/200/arch" alt="" />}
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
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Card", () => {
  const regularCard = (
    <Card
      id="cardID"
      heading={<Heading level={3} id="heading1" text="Optional Header" />}
      image={<Image src="https://placeimg.com/400/200/arch" alt="" />}
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
        <Heading level={2} id="editioncardheading1" text="2004 Edition" />
      }
      image={<Image src="https://placeimg.com/300/400/arch" alt="" />}
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
      image={<Image src="https://placeimg.com/300/400/arch" alt="" />}
      className="edition-card"
      heading={
        <Heading level={2} id="editioncardheading1" text="2004 Edition" />
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
      image={<Image src="https://placeimg.com/300/400/arch" alt="" />}
      heading={
        <Heading
          level={2}
          id="editioncardheading1"
          url="#edition-link"
          text="2004 Edition"
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
          text="2004 Edition"
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
  let container;

  it("Generates a Card with a header, footer, image, middle content, and CTAs", () => {
    const utils = render(regularCard);
    container = utils.container;
    expect(container.querySelector(".card__heading")).toBeInTheDocument();
    expect(container.querySelector(".card__image")).toBeInTheDocument();
    expect(container.querySelector(".card__content")).toBeInTheDocument();
    expect(container.querySelector(".card__ctas")).toBeInTheDocument();
    expect(container.querySelector(".card__footer")).toBeInTheDocument();
  });

  it("Generates a Card with variable data", () => {
    const utils = render(cardWithExtendedStyles);
    container = utils.container;

    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(container.querySelector(".card__content")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("Generates a card without a CTA block if one isn't provided", () => {
    const utils = render(cardWithNoCTAs);
    container = utils.container;

    expect(container.querySelector(".card__heading")).toBeInTheDocument();
    expect(container.querySelector(".card__image")).toBeInTheDocument();
    expect(container.querySelector(".card__content")).toBeInTheDocument();
    expect(container.querySelector(".card__ctas")).not.toBeInTheDocument();
  });

  it("Generates a card without a content block if one isn't provided", () => {
    const utils = render(cardWithNoContent);
    container = utils.container;

    expect(container.querySelector(".card__heading")).toBeInTheDocument();
    expect(container.querySelector(".card__image")).toBeInTheDocument();
    expect(container.querySelector(".card__content")).not.toBeInTheDocument();
    expect(container.querySelector(".card__ctas")).toBeInTheDocument();
  });

  it("Generates a card without an image block if no image is provided", () => {
    const utils = render(cardWithNoImage);
    container = utils.container;

    expect(container.querySelector(".card__heading")).toBeInTheDocument();
    expect(container.querySelector(".card__image")).not.toBeInTheDocument();
    expect(container.querySelector(".card__content")).toBeInTheDocument();
    expect(container.querySelector(".card__ctas")).toBeInTheDocument();
  });
});
