import * as React from "react";
import bem from "../../utils/bem";
import Placeholder from "../Placeholder/Placeholder";
import { withDesign } from "storybook-addon-designs";
import { boolean, select } from "@storybook/addon-knobs";

export default {
    title: "Template",
    decorators: [withDesign],
};

let showSidebarLeft;
let showSidebarRight;
const sidebarLeftModifier = ["with-sidebar-left"];
const sidebarRightModifier = ["with-sidebar-right"];

export const Template = () => (
    <>
        {boolean("Show Sidebar Left", true)
            ? (showSidebarLeft = true)
            : (showSidebarLeft = false)}
        {boolean("Show Sidebar Right", false)
            ? (showSidebarRight = true)
            : (showSidebarRight = false)}

        <div className={bem("layout-container")}>
            <header className={bem("header")}>
                <Placeholder>Header</Placeholder>
            </header>

            <main
                className={
                    showSidebarLeft || showSidebarRight
                        ? bem("main", ["with-sidebar"])
                        : "main"
                }
            >
                <div className="content-header">
                    {<Placeholder>Hero</Placeholder>}
                </div>

                <div className="content-top">
                    {<Placeholder>Content Top</Placeholder>}
                </div>

                {showSidebarLeft && (
                    <div
                        className={bem("content-secondary", [
                            "with-sidebar-left",
                        ])}
                    >
                        <Placeholder>Left Sidebar</Placeholder>
                    </div>
                )}

                {showSidebarLeft && (
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
                {showSidebarRight && (
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
                {!showSidebarRight && !showSidebarLeft && (
                    <div className={bem("content-primary")}>
                        <p>
                            Culpa cupidatat irure exercitation qui ea pariatur
                            consequat sit exercitation nulla ea commodo. Velit
                            cupidatat mollit non est tempor aliquip est culpa
                            officia labore ullamco ex laboris. Pariatur
                            reprehenderit Lorem dolor et exercitation velit
                            consectetur deserunt laboris tempor esse anim
                            proident labore. Dolor commodo Lorem eu qui non qui
                            tempor dolore veniam. Ipsum ipsum consectetur
                            proident elit sit labore consequat velit aliquip
                            excepteur. Mollit excepteur nisi incididunt sunt
                            incididunt anim deserunt do ullamco officia eu. Est
                            aliquip enim id qui officia irure cillum minim
                            aliquip proident eu.
                        </p>
                        <div className="content-bottom">
                            {<Placeholder>Content Bottom</Placeholder>}
                        </div>
                    </div>
                )}

                {showSidebarRight && (
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
