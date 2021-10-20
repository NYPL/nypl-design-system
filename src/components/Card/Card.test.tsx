import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Card, { CardHeading, CardContent, CardActions } from "./Card";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import { HeadingLevels } from "../Heading/HeadingTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames, IconAlign } from "../Icons/IconTypes";

describe("Card Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Card
        id="cardID"
        imageSrc="https://placeimg.com/400/200/arch"
        imageAlt="Alt text"
      >
        <CardHeading level={HeadingLevels.Three} id="heading1">
          The Card Heading
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
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Card", () => {
  const regularCard = (
    <Card
      id="cardID"
      imageSrc="https://placeimg.com/400/200/arch"
      imageAlt="Alt text"
    >
      <CardHeading level={HeadingLevels.Three} id="heading1">
        The Card Heading
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
    <Card
      id="card#1"
      className="edition-card"
      imageSrc="https://placeimg.com/300/400/arch"
      imageAlt="Alt text"
    >
      <CardHeading level={HeadingLevels.Two} id="editioncardheading1">
        The Card Heading
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
        <div className="edition-card-actions">
          <Link type={LinkTypes.Button} href="blah">
            Read Online
          </Link>
          <div className="edition-card__download">
            <Link href="#url" type={LinkTypes.Action}>
              <Icon
                name={IconNames.Download}
                align={IconAlign.Left}
                iconRotation={IconRotationTypes.Rotate0}
              />
              Download
            </Link>
          </div>
        </div>
      </CardActions>
    </Card>
  );
  const cardWithNoCTAs = (
    <Card
      id="card#1"
      className="edition-card"
      imageSrc="https://placeimg.com/300/400/arch"
      imageAlt="Alt text"
    >
      <CardHeading level={HeadingLevels.Two} id="editioncardheading1">
        The Card Heading
      </CardHeading>
      <CardContent>
        <div>Published in New York by Random House</div>
        <div>Written in English</div>
        <div>Under Creative Commons License</div>
      </CardContent>
    </Card>
  );
  const cardWithNoContent = (
    <Card
      id="card#1"
      className="edition-card"
      imageSrc="https://placeimg.com/300/400/arch"
      imageAlt="Alt text"
    >
      <CardHeading
        level={HeadingLevels.Two}
        id="editioncardheading1"
        url="#edition-link"
      >
        The Card Heading
      </CardHeading>
      <CardActions>
        <div className="edition-card-actions">
          <Link type={LinkTypes.Button} href="blah">
            Read Online
          </Link>
          <div className="edition-card__download">
            <Link href="#url" type={LinkTypes.Action}>
              <Icon
                name={IconNames.Download}
                align={IconAlign.Left}
                iconRotation={IconRotationTypes.Rotate0}
              />
              Download
            </Link>
          </div>
        </div>
      </CardActions>
    </Card>
  );
  const cardWithNoImage = (
    <Card id="card#1" className="edition-card">
      <CardHeading
        level={HeadingLevels.Two}
        id="editioncardheading1"
        url="#edition-link"
      >
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <div className="edition-card-actions">
          <Link type={LinkTypes.Button} href="blah">
            Read Online
          </Link>
          <div className="edition-card__download">
            <Link href="#url" type={LinkTypes.Action}>
              <Icon
                name={IconNames.Download}
                align={IconAlign.Left}
                iconRotation={IconRotationTypes.Rotate0}
              />
              Download
            </Link>
          </div>
        </div>
      </CardActions>
    </Card>
  );
  let container;

  it("Generates a Card with a header, image, content, and CTAs", () => {
    const utils = render(regularCard);
    container = utils.container;
    expect(container.querySelector(".chakra-heading")).toBeInTheDocument();
    expect(container.querySelector(".card-content")).toBeInTheDocument();
    expect(container.querySelector(".card-actions")).toBeInTheDocument();
  });

  it("Generates a Card with variable data", () => {
    const utils = render(cardWithExtendedStyles);
    container = utils.container;

    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(container.querySelector(".card-content")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("Generates a card without a CTA block if one isn't provided", () => {
    const utils = render(cardWithNoCTAs);
    container = utils.container;

    expect(container.querySelector(".chakra-heading")).toBeInTheDocument();
    expect(container.querySelector(".card-content")).toBeInTheDocument();
    expect(container.querySelector(".card-actions")).not.toBeInTheDocument();
  });

  it("Generates a card without a content block if one isn't provided", () => {
    const utils = render(cardWithNoContent);
    container = utils.container;

    expect(container.querySelector(".chakra-heading")).toBeInTheDocument();
    expect(container.querySelector(".card-content")).not.toBeInTheDocument();
    expect(container.querySelector(".card-actions")).toBeInTheDocument();
  });

  it("Generates a card without an image block if no image is provided", () => {
    const utils = render(cardWithNoImage);
    container = utils.container;

    expect(container.querySelector(".chakra-heading")).toBeInTheDocument();
    expect(container.querySelector(".card__image")).not.toBeInTheDocument();
    expect(container.querySelector(".card-content")).toBeInTheDocument();
    expect(container.querySelector(".card-actions")).toBeInTheDocument();
  });
});
