import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

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
            onClick={() => {}}
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

  it("passes axe accessibility test for the full-click feature", async () => {
    const { container } = render(
      <Card
        id="cardID"
        imageSrc="https://placeimg.com/400/200/arch"
        imageAlt="Alt text"
        mainActionLink="http://nypl.org"
      >
        <CardHeading level={HeadingLevels.Three} id="heading1">
          The Card Heading
        </CardHeading>
        <CardContent>middle column content</CardContent>
        <CardActions>
          <Button
            onClick={() => {}}
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
      id="regularCard"
      imageSrc="https://placeimg.com/400/200/arch"
      imageAlt="Alt text"
    >
      <CardHeading level={HeadingLevels.Three} id="heading1">
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <Button
          onClick={() => {}}
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
      className="edition-card"
      id="cardWithExtendedStyles"
      imageAlt="Alt text"
      imageSrc="https://placeimg.com/300/400/arch"
    >
      <CardHeading id="editioncardheading1" level={HeadingLevels.Two}>
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
        <Link id="link-online" href="online" type={LinkTypes.Button}>
          Read Online
        </Link>
        <Link id="link-icon" href="#url" type={LinkTypes.Action}>
          <Icon
            align={IconAlign.Left}
            iconRotation={IconRotationTypes.Rotate0}
            id="icon-cardWithExtendedStyles"
            name={IconNames.Download}
          />
          Download
        </Link>
      </CardActions>
    </Card>
  );
  const cardWithNoCTAs = (
    <Card
      className="edition-card"
      id="cardWithNoCTAs"
      imageAlt="Alt text"
      imageSrc="https://placeimg.com/300/400/arch"
    >
      <CardHeading id="editioncardheading1" level={HeadingLevels.Two}>
        The Card Heading
      </CardHeading>
      <CardContent>
        <p>Published in New York by Random House</p>
        <p>Written in English</p>
        <p>Under Creative Commons License</p>
      </CardContent>
    </Card>
  );
  const cardWithNoContent = (
    <Card
      className="edition-card"
      id="cardWithNoContent"
      imageAlt="Alt text"
      imageSrc="https://placeimg.com/300/400/arch"
    >
      <CardHeading
        id="editioncardheading1"
        level={HeadingLevels.Two}
        url="#edition-link"
      >
        The Card Heading
      </CardHeading>
      <CardActions>
        <Link id="link-online" href="online" type={LinkTypes.Button}>
          Read Online
        </Link>
        <Link id="link-icon" href="#url" type={LinkTypes.Action}>
          <Icon
            align={IconAlign.Left}
            iconRotation={IconRotationTypes.Rotate0}
            id="icon-cardWithNoContent"
            name={IconNames.Download}
          />
          Download
        </Link>
      </CardActions>
    </Card>
  );
  const cardWithNoImage = (
    <Card id="cardWithNoImage" className="edition-card">
      <CardHeading
        id="editioncardheading1"
        level={HeadingLevels.Two}
        url="#edition-link"
      >
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <Link id="link-online" href="online" type={LinkTypes.Button}>
          Read Online
        </Link>
        <Link id="link-icon" href="#url" type={LinkTypes.Action}>
          <Icon
            align={IconAlign.Left}
            iconRotation={IconRotationTypes.Rotate0}
            id="icon-cardWithNoImage"
            name={IconNames.Download}
          />
          Download
        </Link>
      </CardActions>
    </Card>
  );
  const cardFullClick = () => (
    <Card
      id="fullclick"
      imageAlt="Alt text"
      imageSrc="https://placeimg.com/400/200/arch"
      mainActionLink="http://nypl.org"
    >
      <CardHeading level={HeadingLevels.Three} id="heading1">
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <Button
          buttonType={ButtonTypes.Primary}
          id="button1"
          onClick={() => {}}
          type="submit"
        >
          Example CTA
        </Button>
      </CardActions>
    </Card>
  );
  let container;

  it("renders a Card with a header, image, content, and CTAs", () => {
    const utils = render(regularCard);
    container = utils.container;

    expect(container.querySelector("h3")).toBeInTheDocument();
    expect(screen.getByText("The Card Heading")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("middle column content")).toBeInTheDocument();
    expect(screen.getByText("Example CTA")).toBeInTheDocument();
  });

  it("renders a Card with variable data", () => {
    const utils = render(cardWithExtendedStyles);
    container = utils.container;

    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(screen.getByText("The Card Heading")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByText(/Published in New York by Random House/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Read Online/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("Generates a card without a CTA block if one isn't provided", () => {
    render(cardWithNoCTAs);

    expect(screen.getByText("The Card Heading")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByText(/Published in New York by Random House/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/Read Online/i)).not.toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("Generates a card without a content block if one isn't provided", () => {
    render(cardWithNoContent);

    expect(screen.getByText("The Card Heading")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.queryByText(/Published in New York by Random House/i)
    ).not.toBeInTheDocument();
    expect(screen.getByText(/Read Online/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });

  it("Generates a card without an image block if no image is provided", () => {
    render(cardWithNoImage);

    expect(screen.getByText("The Card Heading")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("middle column content")).toBeInTheDocument();
    expect(screen.getByText(/Read Online/i)).toBeInTheDocument();
  });

  it("Generates a card without an image block if no image is provided", () => {
    render(cardFullClick());

    expect(screen.getAllByRole("link")[0]).toHaveAttribute(
      "href",
      "http://nypl.org"
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const regular = renderer.create(regularCard).toJSON();
    const withExtendedStyles = renderer.create(cardWithExtendedStyles).toJSON();
    const withNoCTAs = renderer.create(cardWithNoCTAs).toJSON();
    const withNoContent = renderer.create(cardWithNoContent).toJSON();
    const withNoImage = renderer.create(cardWithNoImage).toJSON();
    const withFullClick = renderer.create(cardFullClick()).toJSON();

    expect(regular).toMatchSnapshot();
    expect(withExtendedStyles).toMatchSnapshot();
    expect(withNoCTAs).toMatchSnapshot();
    expect(withNoContent).toMatchSnapshot();
    expect(withNoImage).toMatchSnapshot();
    expect(withFullClick).toMatchSnapshot();
  });
});
