import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import {
  Template,
  TemplateBreakout,
  TemplateFull,
  TemplateMain,
  TemplateSidebar,
  TemplateVariant,
} from "./Template";
import Placeholder from "../Placeholder/Placeholder";
import { sidebarLabel } from "../../utils/utils";

const breakout = <Placeholder variant="short">Breakout</Placeholder>;
const contentTop = <Placeholder>Top content</Placeholder>;
const contentMain = (
  <>
    <Placeholder>Main content</Placeholder>
    <Placeholder variant="short">More content</Placeholder>
  </>
);
const contentBottom = <Placeholder variant="short">Bottom content</Placeholder>;

const templateComponents = (variant: TemplateVariant = "full") => (
  <Template variant={variant}>
    <TemplateBreakout>{breakout}</TemplateBreakout>
    <TemplateFull>{contentTop}</TemplateFull>
    {variant === "sidebarLeft" && (
      <TemplateSidebar>
        <Placeholder>{sidebarLabel(variant)}</Placeholder>
      </TemplateSidebar>
    )}
    <TemplateMain id="mainContent">{contentMain}</TemplateMain>
    {variant === "sidebarRight" && (
      <TemplateSidebar>
        <Placeholder>{sidebarLabel(variant)}</Placeholder>
      </TemplateSidebar>
    )}
    <TemplateFull>{contentBottom}</TemplateFull>
  </Template>
);

describe("Template components accessibility", () => {
  it("passes axe accessibility test with no sidebar", async () => {
    const { container } = render(templateComponents());
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with a sidebar on the left", async () => {
    const { container } = render(templateComponents("sidebarLeft"));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with a sidebar on the right", async () => {
    const { container } = render(templateComponents("sidebarRight"));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with the narrow container", async () => {
    const { container } = render(templateComponents("narrow"));
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Template components", () => {
  it("renders each section with left sidebar", () => {
    render(templateComponents("sidebarLeft"));

    expect(screen.getByText("Breakout")).toBeInTheDocument();
    expect(screen.getByText("Top content")).toBeInTheDocument();
    expect(screen.getByText("Left sidebar")).toBeInTheDocument();
    expect(screen.getByText("Main content")).toBeInTheDocument();
    expect(screen.getByText("More content")).toBeInTheDocument();
    expect(screen.getByText("Bottom content")).toBeInTheDocument();
  });

  it("renders each section with right sidebar", () => {
    render(templateComponents("sidebarRight"));

    expect(screen.getByText("Breakout")).toBeInTheDocument();
    expect(screen.getByText("Top content")).toBeInTheDocument();
    expect(screen.getByText("Right sidebar")).toBeInTheDocument();
    expect(screen.getByText("Main content")).toBeInTheDocument();
    expect(screen.getByText("More content")).toBeInTheDocument();
    expect(screen.getByText("Bottom content")).toBeInTheDocument();
  });

  it("renders a #mainContent id when using the full variant", () => {
    const { container } = render(templateComponents("full"));
    expect(container.querySelector("#mainContent")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "mainContent");
  });

  it("renders a #mainContent id when using the narrow variant", () => {
    const { container } = render(templateComponents("narrow"));
    expect(container.querySelector("#mainContent")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "mainContent");
  });

  it("renders a #mainContent id when using the sidebarLeft variant", () => {
    const { container } = render(templateComponents("sidebarLeft"));
    expect(container.querySelector("#mainContent")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "mainContent");
  });

  it("renders a #mainContent id when using the sidebarRight variant", () => {
    const { container } = render(templateComponents("sidebarRight"));
    expect(container.querySelector("#mainContent")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "mainContent");
  });

  it("passes a ref to the div wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Template ref={ref}>
        <TemplateMain>{contentMain}</TemplateMain>
      </Template>
    );

    expect(container.querySelectorAll("div")[0]).toBe(ref.current);
  });

  it("renders the UI snapshot correctly", () => {
    const templateComponentssidebarLeft = renderer
      .create(templateComponents("sidebarLeft"))
      .toJSON();

    const templateComponentssidebarRight = renderer
      .create(templateComponents("sidebarRight"))
      .toJSON();

    const templateComponentsNoSidebar = renderer
      .create(templateComponents("full"))
      .toJSON();

    const templateComponentsMainNarrow = renderer
      .create(templateComponents("narrow"))
      .toJSON();

    const templateWithChakraProps = renderer.create(
      <Template p="20px" color="ui.error.primary">
        <TemplateMain>{contentMain}</TemplateMain>
      </Template>
    );

    const templateWithOtherProps = renderer.create(
      <Template data-testid="props">
        <TemplateMain>{contentMain}</TemplateMain>
      </Template>
    );

    expect(templateComponentssidebarLeft).toMatchSnapshot();
    expect(templateComponentssidebarRight).toMatchSnapshot();
    expect(templateComponentsNoSidebar).toMatchSnapshot();
    expect(templateComponentsMainNarrow).toMatchSnapshot();
    expect(templateWithChakraProps).toMatchSnapshot();
    expect(templateWithOtherProps).toMatchSnapshot();
  });
});
