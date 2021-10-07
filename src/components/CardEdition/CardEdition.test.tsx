import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import CardEdition from "./CardEdition";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import Image from "../Image/Image";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames, IconAlign } from "../Icons/IconTypes";

describe("CardEdition Accessibility", () => {
  const regularCard = (
    <CardEdition
      id="cardID"
      heading={
        <Heading
          level={HeadingLevels.Three}
          id="heading1"
          text={"Optional Header"}
        />
      }
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
    </CardEdition>
  );

  it("passes axe accessibility test", async () => {
    const { container } = render(regularCard);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("CardEdition", () => {
  const regularCard = (
    <CardEdition
      id="cardID"
      heading={
        <Heading
          level={HeadingLevels.Three}
          id="heading1"
          text={"Optional Header"}
        />
      }
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
    </CardEdition>
  );

  const cardWithExtendedStyles = (
    <CardEdition
      id="card#1"
      className="edition-card"
      heading={
        <Heading
          level={HeadingLevels.Two}
          id="editioncardheading1"
          text={"2004 Edition"}
        />
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
                name={IconNames.Download}
                // blockName="more-link"
                align={IconAlign.Left}
                iconRotation={IconRotationTypes.Rotate0}
              />
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
    </CardEdition>
  );

  const cardWithNoCTAs = (
    <CardEdition
      id="card#1"
      image={<Image src="https://placeimg.com/300/400/arch" alt={""} />}
      className="edition-card"
      heading={
        <Heading
          level={HeadingLevels.Two}
          id="editioncardheading1"
          text={"2004 Edition"}
        />
      }
    >
      <>
        <div>Published in New York by Random House</div>
        <div>Written in English</div>
        <div>Under Creative Commons License</div>
      </>
    </CardEdition>
  );

  const cardWithNoContent = (
    <CardEdition
      id="card#1"
      className="edition-card"
      image={<Image src="https://placeimg.com/300/400/arch" alt={""} />}
      heading={
        <Heading
          level={HeadingLevels.Two}
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
                name={IconNames.Download}
                // blockName="more-link"
                align={IconAlign.Left}
                iconRotation={IconRotationTypes.Rotate0}
              />
              Download
            </Link>
          </div>
        </div>
      }
    ></CardEdition>
  );

  const cardWithNoImage = (
    <CardEdition
      id="card#1"
      className="edition-card"
      heading={
        <Heading
          level={HeadingLevels.Two}
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
                name={IconNames.Download}
                align={IconAlign.Left}
                iconRotation={IconRotationTypes.Rotate0}
              />
              Download
            </Link>
          </div>
        </div>
      }
    >
      middle column content
    </CardEdition>
  );

  const cardWithNoHeader = (
    <CardEdition
      id="card#1"
      className="edition-card"
      image={<Image src="https://placeimg.com/300/400/arch" alt={""} />}
      ctas={
        <div className="edition-card__ctas">
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
      }
      footer={<>Optional footer</>}
    >
      middle column content
    </CardEdition>
  );

  const cardWithNoFooter = (
    <CardEdition
      id="card#1"
      className="edition-card"
      heading={
        <Heading
          level={HeadingLevels.Two}
          id="editioncardheading1"
          url="#edition-link"
          text={"2004 Edition"}
        />
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
                name={IconNames.Download}
                align={IconAlign.Left}
                iconRotation={IconRotationTypes.Rotate0}
              />
              Download
            </Link>
          </div>
        </div>
      }
    >
      middle column content
    </CardEdition>
  );

  it("Generates a Card with a header, footer, image, middle content, and CTAs", () => {
    const card = render(regularCard);
    expect(
      card.container.querySelector(".card-edition__heading")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__image")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__content")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__ctas")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__footer")
    ).toBeInTheDocument();
  });

  it("Generates a Card with variable data", () => {
    const card = render(cardWithExtendedStyles);
    expect(card.container.querySelector("h2")).toBeInTheDocument();
    expect(
      screen.getByText("Published in New York by Random House")
    ).toBeInTheDocument();
    expect(screen.getByText("Written in English")).toBeInTheDocument();
    expect(
      screen.getByText(
        "License: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
      )
    ).toBeInTheDocument();
    // expect(screen.findAllByRole("link")).toHaveLength(2);
  });

  it("Generates a card without a CTA block if one isn't provided", () => {
    const card = render(cardWithNoCTAs);
    expect(
      card.container.querySelector(".card-edition__heading")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__image")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__content")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__ctas")
    ).not.toBeInTheDocument();
  });

  it("Generates a card without a content block if one isn't provided", () => {
    const card = render(cardWithNoContent);
    expect(
      card.container.querySelector(".card-edition__heading")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__image")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__content")
    ).not.toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__ctas")
    ).toBeInTheDocument();
  });

  it("Generates a card without an image block if no image is provided", () => {
    const card = render(cardWithNoImage);
    expect(
      card.container.querySelector(".card-edition__heading")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__image")
    ).not.toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__content")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__ctas")
    ).toBeInTheDocument();
  });

  it("Generates a card without a header block if one isn't provided", () => {
    const card = render(cardWithNoHeader);
    expect(
      card.container.querySelector(".card-edition__heading")
    ).not.toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__image")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__content")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__ctas")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__footer")
    ).toBeInTheDocument();
  });

  it("Generates a card without a footer block if one isn't provided", () => {
    const card = render(cardWithNoFooter);
    expect(
      card.container.querySelector(".card-edition__heading")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__image")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__content")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__ctas")
    ).toBeInTheDocument();
    expect(
      card.container.querySelector(".card-edition__footer")
    ).not.toBeInTheDocument();
  });
});
