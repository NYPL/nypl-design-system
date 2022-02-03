import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import {
  Template,
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
        header={header}
        breakout={breakout}
        sidebar={sidebar}
        contentTop={contentTop}
        contentSidebar={contentSidebar}
        contentPrimary={contentPrimary}
        footer={footer}
      />
    );

    expect(screen.getByText("NYPL Header")).toBeInTheDocument();
    expect(screen.getByText("Breadcrumbs")).toBeInTheDocument();
    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(screen.getByText("Content Top")).toBeInTheDocument();
    expect(screen.getByText("Left Sidebar")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
    expect(screen.getByText("More Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
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
      "`TemplateFooter`: An HTML `footer` element was passed in. Set " +
        "`renderFooterElement` to `false` to avoid nested HTML `footer` elements."
    );
  });
});

describe("Template components", () => {
  it("renders each section", () => {
    render(
      <Template>
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

    expect(screen.getByText("NYPL Header")).toBeInTheDocument();
    expect(screen.getByText("Breadcrumbs")).toBeInTheDocument();
    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(screen.getByText("Content Top")).toBeInTheDocument();
    expect(screen.getByText("Left Sidebar")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
    expect(screen.getByText("More Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("Renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(
        <Template>
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

    expect(basic).toMatchSnapshot();
  });
});
