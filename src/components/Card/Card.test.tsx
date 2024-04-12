import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Button from "../Button/Button";
import Card, { CardHeading, CardContent, CardActions } from "./Card";
import Icon from "../Icons/Icon";
import Image from "../Image/Image";
import Link from "../Link/Link";

describe("Card Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Card
        id="cardID"
        imageProps={{
          alt: "Alt text",
          src: "//loremflickr.com/400/200/new+york+public+library",
        }}
      >
        <CardHeading level="h3" id="heading1">
          The Card Heading
        </CardHeading>
        <CardContent>middle column content</CardContent>
        <CardActions>
          <Button onClick={() => {}} id="button1" type="submit">
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
        imageProps={{
          alt: "Alt text",
          src: "//loremflickr.com/400/200/new+york+public+library",
        }}
        mainActionLink="http://nypl.org"
      >
        <CardHeading level="h3" id="heading1">
          The Card Heading
        </CardHeading>
        <CardContent>middle column content</CardContent>
        <CardActions>
          <Button onClick={() => {}} id="button1" type="submit">
            Example CTA
          </Button>
        </CardActions>
      </Card>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Card", () => {
  const regularCard = (ref?: React.RefObject<HTMLDivElement>) => (
    <Card
      id="regularCard"
      imageProps={{
        alt: "Alt text",
        src: "//loremflickr.com/400/200/new+york+public+library",
      }}
      ref={ref}
    >
      <CardHeading level="h3" id="heading1">
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <Button onClick={() => {}} id="button1" type="submit">
          Example CTA
        </Button>
      </CardActions>
    </Card>
  );
  const cardWithExtendedStyles = (
    <Card
      className="edition-card"
      id="cardWithExtendedStyles"
      imageProps={{
        alt: "Alt text",
        src: "//loremflickr.com/300/400/new+york+public+library",
      }}
    >
      <CardHeading id="editioncardheading1" level="h2">
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
        <Link id="link-online" href="online" type="button">
          Read Online
        </Link>
        <Link id="link-icon" href="#url" type="action">
          <Icon
            align="left"
            iconRotation="rotate0"
            id="icon-cardWithExtendedStyles"
            name="download"
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
      imageProps={{
        alt: "Alt text",
        src: "//loremflickr.com/300/400/new+york+public+library",
      }}
    >
      <CardHeading id="editioncardheading1" level="h2">
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
      imageProps={{
        alt: "Alt text",
        src: "//loremflickr.com/300/400/new+york+public+library",
      }}
    >
      <CardHeading id="editioncardheading1" level="h2" url="#edition-link">
        The Card Heading
      </CardHeading>
      <CardActions>
        <Link id="link-online" href="online" type="button">
          Read Online
        </Link>
        <Link id="link-icon" href="#url" type="action">
          <Icon
            align="left"
            iconRotation="rotate0"
            id="icon-cardWithNoContent"
            name="download"
          />
          Download
        </Link>
      </CardActions>
    </Card>
  );
  const cardWithNoImage = (
    <Card id="cardWithNoImage" className="edition-card">
      <CardHeading id="editioncardheading1" level="h2" url="#edition-link">
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <Link id="link-online" href="online" type="button">
          Read Online
        </Link>
        <Link id="link-icon" href="#url" type="action">
          <Icon
            align="left"
            iconRotation="rotate0"
            id="icon-cardWithNoImage"
            name="download"
          />
          Download
        </Link>
      </CardActions>
    </Card>
  );
  const cardFullClick = () => (
    <Card
      id="fullclick"
      imageProps={{
        alt: "Alt text",
        src: "//loremflickr.com/400/200/new+york+public+library",
      }}
      mainActionLink="http://nypl.org"
    >
      <CardHeading level="h3" id="heading1">
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <Button id="button1" onClick={() => {}} type="submit">
          Example CTA
        </Button>
      </CardActions>
    </Card>
  );
  const cardImageComponentAndRatio = () => (
    <Card
      id="fullclick"
      imageProps={{
        aspectRatio: "threeByTwo",
        component: (
          <Image
            alt=""
            src="//loremflickr.com/400/200/new+york+public+library"
          />
        ),
      }}
    >
      <CardHeading level="h3" id="heading1">
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
    </Card>
  );
  const cardWithRightActions = () => (
    <Card
      id="cardID"
      imageProps={{
        alt: "Alt text",
        src: "//loremflickr.com/400/200/new+york+public+library",
      }}
      isAlignedRightActions
    >
      <CardHeading level="h3" id="heading1">
        The Card Heading
      </CardHeading>
      <CardContent>middle column content</CardContent>
      <CardActions>
        <Button onClick={() => {}} id="button1" type="submit">
          Example CTA
        </Button>
      </CardActions>
      <CardActions>
        <Button onClick={() => {}} id="button2" type="submit">
          Example CTA
        </Button>
      </CardActions>
    </Card>
  );
  const cardWithChakraProps = (
    <Card
      id="chakraProps"
      imageProps={{
        alt: "Alt text",
        src: "//loremflickr.com/400/200/new+york+public+library",
      }}
      p="s"
      color="ui.error.primary"
    >
      <CardHeading level="h3" id="heading1" color="ui.error.secondary">
        The Card Heading
      </CardHeading>
      <CardContent p="20px">middle column content</CardContent>
      <CardActions m="20px">
        <Button onClick={() => {}} id="button1" type="submit">
          Example CTA
        </Button>
      </CardActions>
    </Card>
  );
  const cardWithOtherProps = (
    <Card
      id="otherProps"
      imageProps={{
        alt: "Alt text",
        src: "//loremflickr.com/400/200/new+york+public+library",
      }}
      data-testid="card-testid"
    >
      <CardHeading level="h3" id="heading1" color="ui.error.secondary">
        The Card Heading
      </CardHeading>
      <CardContent data-testid="cardcontent-testid">
        middle column content
      </CardContent>
      <CardActions data-testid="cardaction-testid">
        <Button onClick={() => {}} id="button1" type="submit">
          Example CTA
        </Button>
      </CardActions>
    </Card>
  );
  let container;

  it("renders a Card with a header, image, content, and CTAs", () => {
    const utils = render(regularCard());
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

  it("Generates a card with the full-click functionality", () => {
    render(cardFullClick());

    expect(screen.getAllByRole("link")[0]).toHaveAttribute(
      "href",
      "http://nypl.org"
    );
  });

  it("Logs a warning when both `imageProps.component` and `imageProps.aspectRatio` are passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(cardImageComponentAndRatio());
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Card: Both the `imageProps.component` and `imageProps.aspectRatio` " +
        "props were set but `imageProps.aspectRatio` will be ignored in favor " +
        "of the aspect ratio on `imageProps.component` prop."
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const regular = renderer.create(regularCard()).toJSON();
    const withExtendedStyles = renderer.create(cardWithExtendedStyles).toJSON();
    const withNoCTAs = renderer.create(cardWithNoCTAs).toJSON();
    const withNoContent = renderer.create(cardWithNoContent).toJSON();
    const withNoImage = renderer.create(cardWithNoImage).toJSON();
    const withFullClick = renderer.create(cardFullClick()).toJSON();
    const withRightActions = renderer.create(cardWithRightActions()).toJSON();
    const withChakraProps = renderer.create(cardWithChakraProps).toJSON();
    const withOtherProps = renderer.create(cardWithOtherProps).toJSON();

    expect(regular).toMatchSnapshot();
    expect(withExtendedStyles).toMatchSnapshot();
    expect(withNoCTAs).toMatchSnapshot();
    expect(withNoContent).toMatchSnapshot();
    expect(withNoImage).toMatchSnapshot();
    expect(withFullClick).toMatchSnapshot();
    expect(withRightActions).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the div wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(regularCard(ref));

    expect(container.querySelector("div")).toBe(ref.current);
  });
});
