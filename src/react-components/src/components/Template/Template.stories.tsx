import * as React from "react";
import bem from "../../utils/bem";
import Placeholder from "../Placeholder/Placeholder";

export default {
    title: "Template",
};

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
            </div>
        </main>

        <footer className={bem("footer", ["with-sidebar"])}>
            <Placeholder>Footer</Placeholder>
        </footer>
    </div>
);

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
