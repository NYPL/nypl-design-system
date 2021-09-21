import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import {
  Template,
  TemplateHeader,
  TemplateContentBreakout,
  TemplateContent,
  TemplateContentTop,
  TemplateContentPrimary,
  TemplateContentSidebar,
  TemplateFooter,
  TemplateAppContainer,
} from "./Template";
import Placeholder from "../Placeholder/Placeholder";

const header = <Placeholder modifiers={["short"]}>NYPL Header</Placeholder>;
const contentBreakout = (
  <>
    <Placeholder modifiers={["short"]}>Breadcrumbs</Placeholder>
    <Placeholder modifiers={["short"]}>Hero</Placeholder>
  </>
);
const sidebar = "left";
const contentTop = <Placeholder>Content Top</Placeholder>;
const contentSidebar = <Placeholder>Left Sidebar</Placeholder>;
const contentPrimary = (
  <>
    <Placeholder>Main Content</Placeholder>
    <Placeholder modifiers={["short"]}>More Content</Placeholder>
  </>
);
const footer = <Placeholder modifiers={["short"]}>Footer</Placeholder>;

describe("Template components accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Template>
        <TemplateHeader>
          {header}
          <TemplateContentBreakout>{contentBreakout}</TemplateContentBreakout>
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

describe("TemplateAppContainer accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <TemplateAppContainer
        header={header}
        contentBreakout={contentBreakout}
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

describe("Template components", () => {
  it("renders each section", () => {
    render(
      <Template>
        <TemplateHeader>
          {header}
          <TemplateContentBreakout>{contentBreakout}</TemplateContentBreakout>
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
});

describe("TemplateAppContainer component", () => {
  it("renders each section", () => {
    render(
      <TemplateAppContainer
        header={header}
        contentBreakout={contentBreakout}
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
});
