import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Link from "./Link";
import Icon from "../Icons/Icon";

describe("Link Accessibility", () => {
  it("passes axe accessibility test for screenreader only text", async () => {
    const { container } = render(
      <Link href="#test" screenreaderOnlyText="hidden text">
        Test
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
  it("should not render an id if none is passed", () => {
    render(<Link href="#test">Test</Link>);
    expect(screen.getByRole("link")).not.toHaveAttribute("id");
  });

  it("can pass in an icon and text as children and url as prop", () => {
    const utils = render(
      <Link href="#passed-in-link" variant="action">
        <Icon name="download" align="left" iconRotation="rotate0" />
        Download
      </Link>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(utils.container.querySelector(".chakra-icon")).toBeInTheDocument();
  });

  it("generates a back link has icon", () => {
    const utils = render(
      <Link href="#passed-in-link" variant="backwards">
        link text
      </Link>
    );
    expect(utils.container.querySelector(".chakra-icon")).toBeInTheDocument();
    expect(
      utils.container.querySelector("#link-link-text-direction-icon")
    ).toBeInTheDocument();
  });

  it("generates a forwards link has icon", () => {
    const utils = render(
      <Link href="#passed-in-link" variant="forwards">
        link text
      </Link>
    );
    expect(utils.container.querySelector(".chakra-icon")).toBeInTheDocument();
    expect(
      utils.container.querySelector("#link-link-text-direction-icon")
    ).toBeInTheDocument();
  });

  it("generates an external link has icon", () => {
    const utils = render(
      <Link href="https://nypl.org" variant="external">
        link text
      </Link>
    );
    expect(utils.container.querySelector(".chakra-icon")).toBeInTheDocument();
    expect(
      utils.container.querySelector("#link-link-text-external-icon")
    ).toBeInTheDocument();
  });

  it("generates a standalone link has icon", () => {
    const utils = render(
      <Link href="#passed-in-link" variant="standalone">
        link text
      </Link>
    );
    expect(utils.container.querySelector(".chakra-icon")).toBeInTheDocument();
    expect(
      utils.container.querySelector("#link-link-text-standalone-icon")
    ).toBeInTheDocument();
  });

  it("can pass in text as child and url as props", () => {
    render(<Link href="#test">Test</Link>);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("updates the target prop", () => {
    const { rerender } = render(<Link href="#test">Test</Link>);
    expect(screen.getByRole("link")).not.toHaveAttribute("target");

    rerender(
      <Link href="#test" target="_blank">
        Test
      </Link>
    );
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
    rerender(
      <Link href="#test" variant="external">
        Test
      </Link>
    );
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
    rerender(
      <Link href="#test" target="_parent">
        Test
      </Link>
    );
    expect(screen.getByRole("link")).toHaveAttribute("target", "_parent");
    rerender(
      <Link href="#test" target="_top">
        Test
      </Link>
    );
    expect(screen.getByRole("link")).toHaveAttribute("target", "_top");
    rerender(
      <Link href="#test" target="_self">
        Test
      </Link>
    );
    expect(screen.getByRole("link")).toHaveAttribute("target", "_self");
  });

  it("renders the UI snapshot correctly", () => {
    const standard = renderer
      .create(
        <Link href="#passed-in-link" id="standard-link" variant="action">
          Standard
        </Link>
      )
      .toJSON();
    const typeForwards = renderer
      .create(
        <Link href="#passed-in-link" id="forwards-link" variant="forwards">
          Forwards
        </Link>
      )
      .toJSON();
    const typeBackwards = renderer
      .create(
        <Link href="#passed-in-link" id="backwards-link" variant="backwards">
          Backwards
        </Link>
      )
      .toJSON();
    const typeExternal = renderer
      .create(
        <Link href="#passed-in-link" id="external-link" variant="external">
          External
        </Link>
      )
      .toJSON();
    const typeStandalone = renderer
      .create(
        <Link href="#passed-in-link" id="standalone-link" variant="standalone">
          Standalone
        </Link>
      )
      .toJSON();
    const typeButtonPrimary = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" variant="buttonPrimary">
          Button Primary
        </Link>
      )
      .toJSON();
    const typeButtonSecondary = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" variant="buttonSecondary">
          Button Secondary
        </Link>
      )
      .toJSON();
    const typeButtonPill = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" variant="buttonPill">
          Button Pill
        </Link>
      )
      .toJSON();
    const typeButtonCallout = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" variant="buttonCallout">
          Button Callout
        </Link>
      )
      .toJSON();
    const typeButtonNoBrand = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" variant="buttonNoBrand">
          Button No Brand
        </Link>
      )
      .toJSON();
    const typeButtonDisabled = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" variant="buttonDisabled">
          Button Disabled
        </Link>
      )
      .toJSON();
    const withIconChild = renderer
      .create(
        <Link href="#passed-in-link" id="icon-link" variant="action">
          <Icon
            align="left"
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
        <Link id="anchor-link" variant="action">
          <a href="#existing-anchor-tag">check link</a>
        </Link>
      )
      .toJSON();
    const withAchorChildAndIcon = renderer
      .create(
        <Link id="anchor-icon-link" variant="action">
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
    expect(typeStandalone).toMatchSnapshot();
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
