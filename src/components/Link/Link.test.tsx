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
      "`Link` needs the `href` prop."
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
    ).toThrowError("Please pass only one child into `Link`.");
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
    const typeButton = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" type="button">
          Button
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

    expect(standard).toMatchSnapshot();
    expect(typeForwards).toMatchSnapshot();
    expect(typeBackwards).toMatchSnapshot();
    expect(typeExternal).toMatchSnapshot();
    expect(typeButton).toMatchSnapshot();
    expect(withIconChild).toMatchSnapshot();
    expect(withAchorChild).toMatchSnapshot();
    expect(withAchorChildAndIcon).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  // TODO:
  // it("Passes the ref to the input element", () => {
  //   const ref = React.createRef<HTMLAnchorElement>();
  //   const container = render(
  //     <Link href="/some-link" ref={ref}>
  //       Go to page
  //     </Link>
  //   );
  //   expect(container.find("a").instance()).toEqual(ref.current);
  // });
});
