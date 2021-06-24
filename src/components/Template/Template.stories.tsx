import * as React from "react";
import bem from "../../utils/bem";
import Placeholder from "../Placeholder/Placeholder";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Template",
  decorators: [withDesign],
} as Meta;

export const Template = ({ showSidebar, sidebarSide }) => (
  <>
    <div className={bem("layout-container nypl-ds")}>
      <header className={bem("header")}>
        <Placeholder modifiers={["short"]}>NYPL Header</Placeholder>

        <div className="content-header">
          {<Placeholder modifiers={["short"]}>Breadcrumbs</Placeholder>}
          {<Placeholder modifiers={["short"]}>Hero</Placeholder>}
        </div>
      </header>

      <main className={showSidebar ? bem("main", ["with-sidebar"]) : "main"}>
        <div className="content-top">
          {<Placeholder>Content Top</Placeholder>}
        </div>

        {showSidebar && sidebarSide === "left" && (
          <div className={bem("content-secondary", ["with-sidebar-left"])}>
            <Placeholder>Left Sidebar</Placeholder>
          </div>
        )}

        {showSidebar && sidebarSide === "left" && (
          <div className={bem("content-primary", ["with-sidebar-left"])}>
            <Placeholder>Main Content</Placeholder>
            <div className="content-bottom">
              {<Placeholder>Content Bottom</Placeholder>}
            </div>
          </div>
        )}
        {showSidebar && sidebarSide === "right" && (
          <div className={bem("content-primary", ["with-sidebar-right"])}>
            <Placeholder>Main Content</Placeholder>
            <div className="content-bottom">
              {<Placeholder>Content Bottom</Placeholder>}
            </div>
          </div>
        )}
        {!showSidebar && (
          <div className={bem("content-primary")}>
            <Placeholder>Main Content</Placeholder>
            <div className="content-bottom">
              {<Placeholder>Content Bottom</Placeholder>}
            </div>
          </div>
        )}

        {showSidebar && sidebarSide === "right" && (
          <div className={bem("content-secondary", ["with-sidebar-right"])}>
            <Placeholder>Right Sidebar</Placeholder>
          </div>
        )}
      </main>
    </div>
    <footer className={bem("footer")}>
      <Placeholder>Footer</Placeholder>
    </footer>
  </>
);

Template.args = { showSidebar: true, sidebarSide: "left" };
Template.argTypes = {
  sidebarSide: { control: { type: "select", options: ["left", "right"] } },
};
Template.storyName = "Template";
Template.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11982%3A47778",
  },
  layout: "fullscreen",
};
