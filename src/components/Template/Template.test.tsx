import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import {
  Template,
  TemplateAboveHeader,
  TemplateHeader,
  TemplateBreakout,
  TemplateContent,
  TemplateContentTop,
  TemplateContentPrimary,
  TemplateContentSidebar,
  TemplateFooter,
  TemplateAppContainer,
} from "./Template";
import Placeholder from "../Placeholder/Placeholder";

const aboveHeader = <Placeholder variant="short">Above Header</Placeholder>;
const header = <Placeholder variant="short">NYPL Header</Placeholder>;
const breakout = (
  <>
    <Placeholder variant="short">Breadcrumbs</Placeholder>
    <Placeholder variant="short">Hero</Placeholder>
  </>
);
const sidebar = "left";
const contentTop = <Placeholder>Content Top</Placeholder>;
const contentSidebar = <Placeholder>Left Sidebar</Placeholder>;
const contentPrimary = (
  <>
    <Placeholder>Main Content</Placeholder>
    <Placeholder variant="short">More Content</Placeholder>
  </>
);
const footer = <Placeholder variant="short">Footer</Placeholder>;

describe("TemplateAppContainer accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <TemplateAppContainer
        aboveHeader={aboveHeader}
        header={header}
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={footer}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Template components accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Template>
        <TemplateAboveHeader>{aboveHeader}</TemplateAboveHeader>
        <TemplateHeader>
          {header}
          <TemplateBreakout>{breakout}</TemplateBreakout>
        </TemplateHeader>
        <TemplateContent sidebar={sidebar}>
          <TemplateContentTop>{contentTop}</TemplateContentTop>
          <TemplateContentSidebar>{contentSidebar}</TemplateContentSidebar>
          <TemplateContentPrimary>{contentPrimary}</TemplateContentPrimary>
        </TemplateContent>
        <TemplateFooter>{footer}</TemplateFooter>
      </Template>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("TemplateAppContainer component", () => {
  it("renders each section", () => {
    render(
      <TemplateAppContainer
        aboveHeader={aboveHeader}
        header={header}
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={footer}
      />
    );
    expect(screen.getByText("Above Header")).toBeInTheDocument();
    expect(screen.getByText("NYPL Header")).toBeInTheDocument();
    expect(screen.getByText("Breadcrumbs")).toBeInTheDocument();
    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(screen.getByText("Content Top")).toBeInTheDocument();
    expect(screen.getByText("Left Sidebar")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
    expect(screen.getByText("More Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders a #mainContent id in the `main` DOM element", () => {
    const { container } = render(
      <TemplateAppContainer
        aboveHeader={aboveHeader}
        header={header}
        id="template-id"
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={footer}
      />
    );
    expect(container.querySelector("#mainContent")).toBeInTheDocument();
    expect(container.querySelector("#template-id")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "mainContent");
  });

  it("renders only one header in a custom header component", () => {
    const customHeader = <header>Custom header</header>;
    render(
      <TemplateAppContainer
        header={customHeader}
        renderHeaderElement={false}
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={footer}
      />
    );

    // The `<header>` HTML element has the same meaning as `role="banner"`.
    expect(screen.getAllByRole("banner")).toHaveLength(1);
  });

  it("consoles a warning when a header element was passed without setting `renderHeaderElement` to false", () => {
    const warn = jest.spyOn(console, "warn");
    const customHeader = <header>Custom header</header>;
    render(
      <TemplateAppContainer
        header={customHeader}
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={footer}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TemplateHeader: An HTML `header` element was passed " +
        "in. Set `renderHeaderElement` to `false` to avoid nested HTML " +
        "`header` elements."
    );
  });

  it("renders only one footer in a custom footer component", () => {
    const customFooter = <footer>Custom Footer</footer>;
    render(
      <TemplateAppContainer
        header={header}
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={customFooter}
        renderFooterElement={false}
      />
    );

    expect(screen.getAllByRole("contentinfo")).toHaveLength(1);
  });

  it("consoles a warning when a footer element was passed without setting `renderFooterElement` to false", () => {
    const warn = jest.spyOn(console, "warn");
    const customFooter = <footer>Custom Footer</footer>;
    render(
      <TemplateAppContainer
        header={header}
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={customFooter}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TemplateFooter: An HTML `footer` element was passed " +
        "in. Set `renderFooterElement` to `false` to avoid nested HTML " +
        "`footer` elements."
    );
  });
});

describe("Template components", () => {
  it("renders each section", () => {
    render(
      <Template>
        <TemplateAboveHeader>{aboveHeader}</TemplateAboveHeader>
        <TemplateHeader>
          {header}
          <TemplateBreakout>{breakout}</TemplateBreakout>
        </TemplateHeader>
        <TemplateContent sidebar={sidebar}>
          <TemplateContentTop>{contentTop}</TemplateContentTop>
          <TemplateContentSidebar>{contentSidebar}</TemplateContentSidebar>
          <TemplateContentPrimary>{contentPrimary}</TemplateContentPrimary>
        </TemplateContent>
        <TemplateFooter>{footer}</TemplateFooter>
      </Template>
    );

    expect(screen.getByText("Above Header")).toBeInTheDocument();
    expect(screen.getByText("NYPL Header")).toBeInTheDocument();
    expect(screen.getByText("Breadcrumbs")).toBeInTheDocument();
    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(screen.getByText("Content Top")).toBeInTheDocument();
    expect(screen.getByText("Left Sidebar")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
    expect(screen.getByText("More Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders a #mainContent id in the TemplateContent component", () => {
    const { container } = render(
      <TemplateContent>
        <TemplateContentPrimary>{contentPrimary}</TemplateContentPrimary>
      </TemplateContent>
    );

    expect(container.querySelector("#mainContent")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "mainContent");
  });

  it("renders the UI snapshot correctly", () => {
    const templateComponents = renderer
      .create(
        <Template>
          <TemplateAboveHeader>{aboveHeader}</TemplateAboveHeader>
          <TemplateHeader>
            {header}
            <TemplateBreakout>{breakout}</TemplateBreakout>
          </TemplateHeader>
          <TemplateContent sidebar={sidebar}>
            <TemplateContentTop>{contentTop}</TemplateContentTop>
            <TemplateContentSidebar>{contentSidebar}</TemplateContentSidebar>
            <TemplateContentPrimary>{contentPrimary}</TemplateContentPrimary>
          </TemplateContent>
          <TemplateFooter>{footer}</TemplateFooter>
        </Template>
      )
      .toJSON();
    const singleComponent = renderer
      .create(
        <TemplateAppContainer
          aboveHeader={aboveHeader}
          header={header}
          breakout={breakout}
          sidebar={sidebar}
          contentTop={contentTop}
          contentSidebar={contentSidebar}
          contentPrimary={contentPrimary}
          footer={footer}
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <TemplateAppContainer
          aboveHeader={aboveHeader}
          header={header}
          breakout={breakout}
          sidebar={sidebar}
          contentTop={contentTop}
          contentSidebar={contentSidebar}
          contentPrimary={contentPrimary}
          footer={footer}
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <TemplateAppContainer
          aboveHeader={aboveHeader}
          header={header}
          breakout={breakout}
          sidebar={sidebar}
          contentTop={contentTop}
          contentSidebar={contentSidebar}
          contentPrimary={contentPrimary}
          footer={footer}
          data-testid="props"
        />
      )
      .toJSON();

    expect(templateComponents).toMatchSnapshot();
    expect(singleComponent).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the div wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <TemplateAppContainer
        aboveHeader={aboveHeader}
        header={header}
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={footer}
        ref={ref}
      />
    );

    expect(container.querySelectorAll("div")[0]).toBe(ref.current);
  });
});
