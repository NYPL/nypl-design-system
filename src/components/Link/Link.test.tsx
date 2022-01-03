import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Link from "./Link";
import { LinkTypes } from "./LinkTypes";
import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
} from "react-router-dom";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames, IconAlign } from "../Icons/IconTypes";

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
      <Link href="#passed-in-link" type={LinkTypes.Action}>
        <Icon
          className="more-link"
          name={IconNames.Download}
          align={IconAlign.Left}
          iconRotation={IconRotationTypes.Rotate0}
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
      <Link type={LinkTypes.Action}>
        <a href="#test2">
          <Icon
            className="more-link"
            name={IconNames.Download}
            align={IconAlign.Left}
            iconRotation={IconRotationTypes.Rotate0}
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
      <Link href="#passed-in-link" type={LinkTypes.Backwards}>
        content
      </Link>
    );
    expect(utils.container.querySelector(".more-link")).toBeInTheDocument();
    expect(
      utils.container.querySelector(".more-link").getAttribute("class")
    ).toContain("chakra-icon more-link");
  });

  it("Generated forwards link has icon", () => {
    const utils = render(
      <Link href="#passed-in-link" type={LinkTypes.Forwards}>
        content
      </Link>
    );
    expect(utils.container.querySelector(".more-link")).toBeInTheDocument();
    expect(
      utils.container.querySelector(".more-link").getAttribute("class")
    ).toContain("chakra-icon more-link");
  });

  it("Can pass in text as child and url as props", () => {
    render(<Link href="#test">Test</Link>);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("Can pass in a ReactRouter Link", () => {
    render(
      <Router>
        <Link type={LinkTypes.Action}>
          <ReactRouterLink to="#">
            <Icon
              name={IconNames.Download}
              align={IconAlign.Left}
              iconRotation={IconRotationTypes.Rotate0}
            />
            Download
          </ReactRouterLink>
        </Link>
      </Router>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("throws an error if text is passed but no url is passed", () => {
    expect(() => render(<Link>Test</Link>)).toThrowError(
      "Link needs prop 'href'"
    );
  });

  it("throws an error if more than one child is passed", () => {
    expect(() =>
      render(
        <Link>
          <Icon
            name={IconNames.Download}
            align={IconAlign.Left}
            iconRotation={IconRotationTypes.Rotate0}
          />
          <a href="#test">Test</a>
        </Link>
      )
    ).toThrowError("Please pass only one child into `Link`.");
  });

  it("renders the UI snapshot correctly", () => {
    const standard = renderer
      .create(
        <Link href="#passed-in-link" id="standard-link" type={LinkTypes.Action}>
          Standard
        </Link>
      )
      .toJSON();
    const typeForwards = renderer
      .create(
        <Link
          href="#passed-in-link"
          id="forwards-link"
          type={LinkTypes.Forwards}
        >
          Forwards
        </Link>
      )
      .toJSON();
    const typeBackwards = renderer
      .create(
        <Link
          href="#passed-in-link"
          id="backwards-link"
          type={LinkTypes.Backwards}
        >
          Backwards
        </Link>
      )
      .toJSON();
    const typeExternal = renderer
      .create(
        <Link
          href="#passed-in-link"
          id="external-link"
          type={LinkTypes.External}
        >
          External
        </Link>
      )
      .toJSON();
    const typeButton = renderer
      .create(
        <Link href="#passed-in-link" id="button-link" type={LinkTypes.Button}>
          Button
        </Link>
      )
      .toJSON();
    const withIconChild = renderer
      .create(
        <Link href="#passed-in-link" id="icon-link" type={LinkTypes.Action}>
          <Icon
            align={IconAlign.Left}
            className="more-link"
            iconRotation={IconRotationTypes.Rotate0}
            id="link-icon"
            name={IconNames.Download}
          />
          Download
        </Link>
      )
      .toJSON();
    expect(standard).toMatchSnapshot();
    expect(typeForwards).toMatchSnapshot();
    expect(typeBackwards).toMatchSnapshot();
    expect(typeExternal).toMatchSnapshot();
    expect(typeButton).toMatchSnapshot();
    expect(withIconChild).toMatchSnapshot();
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
