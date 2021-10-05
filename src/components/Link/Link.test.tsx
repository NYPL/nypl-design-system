import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Link from "./Link";
import { LinkTypes } from "./LinkTypes";
import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
} from "react-router-dom";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";

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
  it("Can pass in icon, text as child and url as props", () => {
    const utils = render(
      <Link href="#passed-in-link" type={LinkTypes.Action}>
        <Icon
          name={IconNames.download}
          blockName="more-link"
          modifiers={["left"]}
          decorative={true}
          iconRotation={IconRotationTypes.rotate0}
        />
        Download
      </Link>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(
      utils.container.querySelector(".more-link__icon")
    ).toBeInTheDocument();
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
            name={IconNames.download}
            blockName="more-link"
            modifiers={["left"]}
            decorative={true}
            iconRotation={IconRotationTypes.rotate0}
          />
          Test
        </a>
      </Link>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(
      utils.container.querySelector(".more-link__icon")
    ).toBeInTheDocument();
  });

  it("Generated back link has icon", () => {
    const utils = render(
      <Link href="#passed-in-link" type={LinkTypes.Backwards}>
        content
      </Link>
    );
    expect(
      utils.container.querySelector(".more-link__icon")
    ).toBeInTheDocument();
    expect(utils.container.querySelector(".more-link__icon")).toHaveAttribute(
      "class",
      "more-link__icon more-link__icon--left more-link__icon--rotate-90 "
    );
  });

  it("Generated forwards link has icon", () => {
    const utils = render(
      <Link href="#passed-in-link" type={LinkTypes.Forwards}>
        content
      </Link>
    );
    expect(
      utils.container.querySelector(".more-link__icon")
    ).toBeInTheDocument();
    expect(utils.container.querySelector(".more-link__icon")).toHaveAttribute(
      "class",
      "more-link__icon more-link__icon--right more-link__icon--rotate-270 "
    );
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
              name={IconNames.download}
              blockName="more-link"
              modifiers={["left"]}
              decorative={true}
              iconRotation={IconRotationTypes.rotate0}
            ></Icon>
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
            name={IconNames.download}
            blockName="more-link"
            modifiers={["left"]}
            decorative={true}
            iconRotation={IconRotationTypes.rotate0}
          ></Icon>
          <a href="#test">Test</a>
        </Link>
      )
    ).toThrowError("Please pass only one child into `Link`.");
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
