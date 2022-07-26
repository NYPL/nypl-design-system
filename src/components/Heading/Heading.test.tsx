import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Heading from "./Heading";

describe("Heading Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Heading id="h1" level="one" text="Heading 1" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Heading", () => {
  it("renders and HTML heading element with the correct level", () => {
    render(<Heading id="h1" level="one" text="Heading 1" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Heading 1")).toBeInTheDocument();
  });

  it("can pass heading content as child", () => {
    render(<Heading id="h1">Heading 2</Heading>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByText("Heading 2")).toBeInTheDocument();
  });

  it("renders the default level two if no `level` prop is passed", () => {
    render(<Heading id="h2">Heading 2</Heading>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("can pass a span element as a child", () => {
    render(
      <Heading id="h1" level="one">
        <span>
          Text <b>hi</b>
        </span>
      </Heading>
    );
    expect(screen.getByText(/Text/i)).toBeInTheDocument();
  });

  it("prioritizes the child when both child and the text prop are passed", () => {
    render(
      <Heading id="h1" level="one" text="prop text">
        child text
      </Heading>
    );
    expect(screen.getByText("child text")).toBeInTheDocument();
  });

  it("renders an anchor element when the `url` prop is passed", () => {
    render(<Heading id="h1" level="one" text="Heading 1" url="fake-url" />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("adds the `urlClass` prop to the anchor element as its class name", () => {
    render(
      <Heading
        id="h1"
        level="one"
        url="fake-url"
        urlClass="fake-class"
        text="Heading 1"
      />
    );
    expect(screen.getByRole("link").getAttribute("class")).toContain(
      "fake-class"
    );
  });

  it("throws error when neither child nor text is passed", () => {
    expect(() => render(<Heading id="h1" level="one" />)).toThrow(
      "NYPL Reservoir Heading: No children or value was passed to the `text` prop."
    );
  });

  it("throws error when heading with many children is passed", () => {
    expect(() =>
      render(
        <Heading id="h1" level="four">
          <span>too</span>
          <span>many</span>
        </Heading>
      )
    ).toThrow("NYPL Reservoir Heading: Only pass one child into Heading.");
  });

  it("uses custom display size", () => {
    render(
      <Heading
        id="h1"
        level="one"
        size="secondary"
        text="Heading with Secondary size"
      />
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveStyle({
      "font-size": "2em",
    });
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(<Heading id="basic" level="one" text="Heading text" />)
      .toJSON();
    const basicWithChildText = renderer
      .create(
        <Heading id="basicWithChildText" level="one">
          Heading text
        </Heading>
      )
      .toJSON();
    const customDisplaySize = renderer
      .create(
        <Heading
          id="customDisplaySize"
          level="one"
          size="secondary"
          text="Heading with Secondary size"
        />
      )
      .toJSON();
    const otherLevel = renderer
      .create(<Heading id="otherLevel" level="six" text="Heading level six" />)
      .toJSON();
    const withLink = renderer
      .create(
        <Heading
          id="withLink"
          level="one"
          text="Heading text is a link"
          url="fake-url"
        />
      )
      .toJSON();
    const withCustomLink = renderer
      .create(
        <Heading id="withCustomLink" level="one">
          <>
            Part of the heading text is
            <a href="fake-url" className="custom-link">
              <span>a link</span>
            </a>
          </>
        </Heading>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Heading id="chakra" text="Heading" p="20px" color="ui.red.primary" />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(<Heading id="props" text="Heading" data-testid="props" />)
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(basicWithChildText).toMatchSnapshot();
    expect(customDisplaySize).toMatchSnapshot();
    expect(otherLevel).toMatchSnapshot();
    expect(withLink).toMatchSnapshot();
    expect(withCustomLink).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the heading element", () => {
    const ref = React.createRef<HTMLHeadingElement>();
    const { container } = render(
      <Heading id="h1" level="one" ref={ref} text="Heading 1" />
    );

    expect(container.querySelector("h1")).toBe(ref.current);
  });
});
