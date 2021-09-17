import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Heading from "./Heading";
import { HeadingDisplaySizes, HeadingLevels } from "./HeadingTypes";

describe("Heading Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Heading id="h1" level={HeadingLevels.One} text="Heading 1" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Heading", () => {
  it("Shows heading", () => {
    render(<Heading id="h1" level={HeadingLevels.One} text="Heading 1" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Heading 1")).toBeInTheDocument();
  });
  it("Can pass heading content as child", () => {
    render(
      <Heading id="h1" level={HeadingLevels.Two}>
        Heading 2
      </Heading>
    );
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByText("Heading 2")).toBeInTheDocument();
  });

  // TODO: check that header children are links
  // it("Throws error when invalid heading is passed as child", () => {
  //   expect(() => render(<Heading id="h1" level={HeadingLevels.Three}><span>oh no</span></Heading>))
  //   .to.throw("Headings can only be plain text or bold");
  // });

  it("Can pass heading content as child span", () => {
    render(
      <Heading id="h1" level={HeadingLevels.One}>
        <span>
          Text <b>hi</b>
        </span>
      </Heading>
    );
    expect(screen.getByText(/Text/i)).toBeInTheDocument();
  });

  it("uses child when both child and the text prop are passed", () => {
    render(
      <Heading id="h1" level={HeadingLevels.One} text="prop text">
        child text
      </Heading>
    );
    expect(screen.getByText("child text")).toBeInTheDocument();
  });

  it("Has <a> tag when passed URL", () => {
    render(
      <Heading
        id="h1"
        level={HeadingLevels.One}
        url="fake-url"
        text="Heading 1"
      />
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("<a> has class when passed urlClass", () => {
    render(
      <Heading
        id="h1"
        level={HeadingLevels.One}
        url="fake-url"
        urlClass="fake-class"
        text="Heading 1"
      />
    );
    expect(screen.getByRole("link").getAttribute("class")).toContain(
      "fake-class"
    );
  });

  it("Throws error when invalid heading number passed", () => {
    expect(() =>
      render(<Heading id="h1" level={9} text="Heading 9" />)
    ).toThrow("Heading only supports levels 1-6");
  });

  it("Throws error when neither child nor text is passed", () => {
    expect(() => render(<Heading id="h1" level={9} />)).toThrow(
      "Heading only supports levels 1-6"
    );
  });

  it("Throws error when heading with many children is passed", () => {
    expect(() =>
      render(
        <Heading id="h1" level={HeadingLevels.Four}>
          <span>too</span>
          <span>many</span>
        </Heading>
      )
    ).toThrow("Please only pass one child into Heading, got span, span");
  });

  it("Uses custom display size", () => {
    render(
      <Heading
        id="h1"
        level={HeadingLevels.One}
        text="Heading with Secondary displaySize"
        displaySize={HeadingDisplaySizes.Secondary}
      />
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveStyle({
      "font-size": "2em",
    });
  });
});
