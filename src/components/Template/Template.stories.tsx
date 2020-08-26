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

export const FullWidthTemplate = () => (
    <div className={bem("layout-container")}>
        <header className={bem("header")}>
            <Placeholder>Header</Placeholder>
        </header>

        <main className={"main"}>
            <div className="content-header">
                {<Placeholder>Hero</Placeholder>}
            </div>

            <div className="content-top">
                {<Placeholder>Content Top</Placeholder>}
            </div>

            <div className={"content-primary"}>
                <Placeholder>Main Content</Placeholder>
            </div>

            {/* <div className={bem("content-secondary", ["with-sidebar-left"])}>
                <Placeholder>Left Sidebar</Placeholder>
            </div> */}

            <div className="content-bottom">
                {<Placeholder>Content Bottom</Placeholder>}
            </div>
        </main>

        <footer className={bem("footer")}>
            <Placeholder>Footer</Placeholder>
        </footer>
    </div>
);

export const LeftSidebarTemplate = () => (
    <div className={bem("layout-container")}>
        <header className={bem("header")}>
            <Placeholder>Header</Placeholder>
        </header>

        <main className={bem("main", ["with-sidebar"])}>
            <div className="content-header">
                <Placeholder>Hero</Placeholder>
            </div>

            <div className="content-top">
                <Placeholder>Content Top</Placeholder>
            </div>

            <div className={bem("content-secondary", ["with-sidebar-left"])}>
                <Placeholder>Left Sidebar</Placeholder>
            </div>

            <div className={bem("content-primary", ["with-sidebar-left"])}>
                <Placeholder>Main Content</Placeholder>
                <div className="content-bottom">
                    {<Placeholder>Content Bottom</Placeholder>}
                </div>
            </div>
        </main>

        <footer className={bem("footer", ["with-sidebar"])}>
            <Placeholder>Footer</Placeholder>
        </footer>
    </div>
);

LeftSidebarTemplate.storyName = "Left Sidebar Template";
LeftSidebarTemplate.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11982%3A47778",
    },
};

export const RightSidebarTemplate = () => (
    <div className={bem("layout-container")}>
        <header className={bem("header")}>
            <Placeholder>Header</Placeholder>
        </header>

        <main className={bem("main", ["with-sidebar"])}>
            <div className="content-header">
                <Placeholder>Hero</Placeholder>
            </div>

            <div className="content-top">
                <Placeholder>Content Top</Placeholder>
            </div>

            <div className={bem("content-primary", ["with-sidebar-right"])}>
                <Placeholder>Main Content</Placeholder>
                <div className="content-bottom">
                    {<Placeholder>Content Bottom</Placeholder>}
                </div>
            </div>

            <div className={bem("content-secondary", ["with-sidebar-right"])}>
                <Placeholder>Right Sidebar</Placeholder>
            </div>
        </main>

        <footer className={bem("footer", ["with-sidebar"])}>
            <Placeholder>Footer</Placeholder>
        </footer>
    </div>
);

RightSidebarTemplate.storyName = "Right Sidebar Template";
RightSidebarTemplate.parameters = {
    design: {
        type: "figma",
        url:
            "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=16770%3A53427",
    },
};
