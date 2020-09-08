import * as React from "react";
import bem from "../../utils/bem";
import Placeholder from "../Placeholder/Placeholder";
import { withDesign } from "storybook-addon-designs";
import { boolean, select } from "@storybook/addon-knobs";

export default {
    title: "Template",
    decorators: [withDesign],
};

let showSidebar;
let sidebarSide;

export const Template = () => (
    <>
        {boolean("Show Sidebar", true)
            ? (showSidebar = true)
            : (showSidebar = false)}
        <div className="template-hidden">
            {(sidebarSide = select("Sidebar Side", ["left", "right"], "left"))}
        </div>

        <div className={bem("layout-container nypl-ds")}>
            <header className={bem("header")}>
                <Placeholder>Header</Placeholder>
            </header>

            <main
                className={showSidebar ? bem("main", ["with-sidebar"]) : "main"}
            >
                <div className="content-header">
                    {<Placeholder>Hero</Placeholder>}
                </div>

                <div className="content-top">
                    {<Placeholder>Content Top</Placeholder>}
                </div>

                {showSidebar && sidebarSide === "left" && (
                    <div
                        className={bem("content-secondary", [
                            "with-sidebar-left",
                        ])}
                    >
                        <Placeholder>Left Sidebar</Placeholder>
                    </div>
                )}

                {showSidebar && sidebarSide === "left" && (
                    <div
                        className={bem("content-primary", [
                            "with-sidebar-left",
                        ])}
                    >
                        <Placeholder>Main Content</Placeholder>
                        <div className="content-bottom">
                            {<Placeholder>Content Bottom</Placeholder>}
                        </div>
                    </div>
                )}
                {showSidebar && sidebarSide === "right" && (
                    <div
                        className={bem("content-primary", [
                            "with-sidebar-right",
                        ])}
                    >
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
                    <div
                        className={bem("content-secondary", [
                            "with-sidebar-right",
                        ])}
                    >
                        <Placeholder>Right Sidebar</Placeholder>
                    </div>
                )}
            </main>

            <footer className={bem("footer")}>
                <Placeholder>Footer</Placeholder>
            </footer>
        </div>
    </>
);

Template.storyName = "Template";
Template.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11982%3A47778",
    },
};
