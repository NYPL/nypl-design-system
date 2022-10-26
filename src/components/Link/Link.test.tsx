import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Link from "./Link";
import Icon from "../Icons/Icon";

describe("Link Accessibility", () => {
  it("passes axe accessibility test for children component", async () => {
    const { container } = render(
      <Link>
        <a href="#test">Test</a>
      </Link>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for href prop", async () => {
    const { container } = render(<Link href="#test">Test</Link>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Link", () => {
  it("Can pass in an icon and text as children and url as prop", () => {
    const utils = render(
      <Link href="#passed-in-link" type="action">
        <Icon
          className="more-link"
          name="download"
          align="left"
          iconRotation="rotate0"
        />
        Download
      </Link>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(utils.container.querySelector(".more-link")).toBeInTheDocument();
  });

  it("Can pass a link with <a> tag", () => {
    render(
      <Link>
        <a href="#test">Test</a>
      </Link>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("Can pass a link with <a> tag and an icon", () => {
    const utils = render(
      <Link type="action">
        <a href="#test2">
          <Icon
            className="more-link"
            name="download"
            align="left"
            iconRotation="rotate0"
          />
          Test
        </a>
      </Link>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(utils.container.querySelector(".more-link")).toBeInTheDocument();
  });

  it("Generated back link has icon", () => {
    const utils = render(
      <Link href="#passed-in-link" type="backwards">
        content
      </Link>
    );
    expect(utils.container.querySelector(".more-link")).toBeInTheDocument();
    expect(
      utils.container.querySelector(".more-link")?.getAttribute("class")
    ).toContain("chakra-icon more-link");
  });

  it("Generated forwards link has icon", () => {
    const utils = render(
      <Link href="#passed-in-link" type="forwards">
        content
      </Link>
    );
    expect(utils.container.querySelector(".more-link")).toBeInTheDocument();
    expect(
      utils.container.querySelector(".more-link")?.getAttribute("class")
    ).toContain("chakra-icon more-link");
  });

  it("Can pass in text as child and url as props", () => {
    render(<Link href="#test">Test</Link>);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("throws an error if text is passed but no url is passed", () => {
    expect(() => render(<Link>Test</Link>)).toThrowError(
      "NYPL Reservoir Link: The `Link` component needs the `href` prop if its child element is a string."
    );
  });

  it("throws an error if more than one child element is passed", () => {
    expect(() =>
      render(
        <Link>
          <Icon name="download" align="left" iconRotation="rotate0" />
          <a href="#test">Test</a>
        </Link>
      )
    ).toThrowError(
      "NYPL Reservoir Link: Please pass only one child into the `Link` component."
    );
  });

  it("logs a deprecated warning if 'button' `type` passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Link href="#test" type="button">
        Test
      </Link>
    );

    expect(warn).toHaveBeenCalledWith(
      `NYPL Reservoir Link: The "button" type is deprecated. Instead, use either "buttonPrimary", "buttonSecondary", "buttonPill", "buttonCallout", "buttonNoBrand", or "buttonDisabled".`
    );
  });

  it("renders the UI snapshot correctly", () => {
    const standard = renderer
      .create(
        <Link href="#passed-in-link" id="standard-link" type="action">
          Standard
        </Link>
      )
      .toJSON();
    const typeForwards = renderer
      .create(
        <Link href="#passed-in-link" id="forwards-link" type="forwards">
          Forwards
        </Link>
      )
      .toJSON();
    const typeBackwards = renderer
      .create(
        <Link href="#passed-in-link" id="backwards-link" type="backwards">
          Backwards
        </Link>
      )
      .toJSON();
    const typeExternal = renderer
      .create(
        <Link href="#passed-in-link" id="external-link" type="external">
          External
        </Link>
      )
      .toJSON();
    const typeButtonPrimary = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" type="button">
          Button Primary
        </Link>
      )
      .toJSON();
    const typeButtonSecondary = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" type="button">
          Button Secondary
        </Link>
      )
      .toJSON();
    const typeButtonPill = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" type="button">
          Button Pill
        </Link>
      )
      .toJSON();
    const typeButtonCallout = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" type="button">
          Button Callout
        </Link>
      )
      .toJSON();
    const typeButtonNoBrand = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" type="button">
          Button No Brand
        </Link>
      )
      .toJSON();
    const typeButtonDisabled = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" type="button">
          Button Disabled
        </Link>
      )
      .toJSON();
    const withIconChild = renderer
      .create(
        <Link href="#passed-in-link" id="icon-link" type="action">
          <Icon
            align="left"
            className="more-link"
            iconRotation="rotate0"
            id="link-icon"
            name="download"
          />
          Download
        </Link>
      )
      .toJSON();
    const withAchorChild = renderer
      .create(
        <Link id="anchor-link" type="action">
          <a href="#existing-anchor-tag">check link</a>
        </Link>
      )
      .toJSON();
    const withAchorChildAndIcon = renderer
      .create(
        <Link id="anchor-icon-link" type="action">
          <>
            <Icon align="left" id="link-icon" name="check" size="small" />
            <a href="#existing-anchor-tag">check link</a>
          </>
        </Link>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Link
          href="#passed-in-link"
          id="chakra"
          p="20px"
          color="ui.error.primary"
        >
          Standard
        </Link>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Link href="#passed-in-link" id="props" data-testid="props">
          Standard
        </Link>
      )
      .toJSON();
    const withOtherPropsAndChild = renderer
      .create(
        <Link id="props" data-testid="props">
          <a href="#passed-in-link">Standard</a>
        </Link>
      )
      .toJSON();

    expect(standard).toMatchSnapshot();
    expect(typeForwards).toMatchSnapshot();
    expect(typeBackwards).toMatchSnapshot();
    expect(typeExternal).toMatchSnapshot();
    expect(typeButtonPrimary).toMatchSnapshot();
    expect(typeButtonSecondary).toMatchSnapshot();
    expect(typeButtonPill).toMatchSnapshot();
    expect(typeButtonCallout).toMatchSnapshot();
    expect(typeButtonNoBrand).toMatchSnapshot();
    expect(typeButtonDisabled).toMatchSnapshot();
    expect(withIconChild).toMatchSnapshot();
    expect(withAchorChild).toMatchSnapshot();
    expect(withAchorChildAndIcon).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
    expect(withOtherPropsAndChild).toMatchSnapshot();
  });

  it("passes a ref to the anchor element", () => {
    const ref = React.createRef<HTMLDivElement & HTMLAnchorElement>();
    const { container } = render(
      <Link href="/some-link" ref={ref}>
        Go to page
      </Link>
    );
    expect(container.querySelector("a")).toBe(ref.current);
  });
});
