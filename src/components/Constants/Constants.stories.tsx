import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";
import UIDocCard from "./UIDocCard";
import List from "../List/List";
import Heading from "../Heading/Heading";
import { ListTypes } from "../List/ListTypes";

export default {
    title: "Constants",
    decorators: [(storyFn) => <div style={{ padding: "2%" }}>{storyFn()}</div>],
};

let cssVariables: {
    [k: string]: string;
} = {};

console.dir(cssVariables);

var allCSS = [].slice
    .call(document.styleSheets)
    .reduce(function (prev, styleSheet) {
        if (styleSheet.cssRules) {
            return (
                prev +
                [].slice
                    .call(styleSheet.cssRules)
                    .reduce(function (prev, cssRule) {
                        // All of our global variables are applied to :root
                        if (cssRule.selectorText == ":root") {
                            var css = cssRule.cssText.split("{");
                            css = css[1].replace("}", "").split(";");
                            for (var i = 0; i < css.length; i++) {
                                var prop = css[i].split(":");
                                if (
                                    // if a valid CSS variable, i.e. --[whatever]
                                    prop.length == 2 &&
                                    prop[0].indexOf("--") == 1
                                ) {
                                    cssVariables[prop[0]] = prop[1];
                                }
                            }
                        }
                    }, "")
            );
        }
    }, "");

const uiVariables: { [k: string]: string } = {};
const grayScaleVariables: { [k: string]: string } = {};
const breakpointVariables: { [k: string]: string } = {};
const spaceVariables: { [k: string]: string } = {};
const fontSizeVariables: { [k: string]: string } = {};
const typefaceVariables: { [k: string]: string } = {};

for (const [key, value] of Object.entries(cssVariables)) {
    if (key.startsWith(" --ui-gray")) {
        grayScaleVariables[key] = value;
    } else if (key.startsWith(" --ui")) {
        uiVariables[key] = value;
    } else if (key.startsWith(" --breakpoint")) {
        breakpointVariables[key] = value;
    } else if (key.startsWith(" --space")) {
        spaceVariables[key] = value;
    } else if (key.startsWith(" --font-size")) {
        fontSizeVariables[key] = value;
    } else if (key.startsWith(" --typeface")) {
        fontSizeVariables[key] = value;
    }
}

let uiVariableDocs = [];
let grayscaleDocs = [];

for (const [key, value] of Object.entries(uiVariables)) {
    uiVariableDocs.push(
        <li style={{ textAlign: "center" }}>
            <UIDocCard backgroundColor={value}>
                {key}: {value}
            </UIDocCard>
        </li>
    );
}

for (const [key, value] of Object.entries(grayScaleVariables)) {
    grayscaleDocs.push(
        <li style={{ textAlign: "center" }}>
            <UIDocCard backgroundColor={value}>
                {key}: {value}
            </UIDocCard>
        </li>
    );
}

export const utilityColors = () => (
    <>
        <Heading level={1}>Utility Colors</Heading>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            {uiVariableDocs}
        </List>
        <Heading level={1}>Grayscale</Heading>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            {grayscaleDocs}
        </List>
    </>
);

utilityColors.story = {
    name: "Utility Colors",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=14989%3A37",
        },
    },
};

const getSetCSSVariable = function (name: string) {
    let propertyValue = "";
    propertyValue = getComputedStyle(document.documentElement).getPropertyValue(
        name
    );
    return propertyValue;
};

export const brandFills = () => (
    <>
        <Heading level={1}>Section Colors</Heading>
        <Heading level={2}>What's On</Heading>
        <p>What's On is used for Exhibitions & Events.</p>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-whats-on-primary"
                    )}
                >
                    --section-whats-on-primary:{" "}
                    {getSetCSSVariable("--section-whats-on-primary")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-whats-on-secondary"
                    )}
                >
                    --section-whats-on-secondary:{" "}
                    {getSetCSSVariable("--section-whats-on-secondary")}
                </UIDocCard>
            </li>
        </List>
        <Heading level={2}>Books and More</Heading>
        <p>
            Books and More is used for the Catalog, Staff Picks,
            Recommendations, New Arrivals, and E-Book Central.
        </p>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-books-and-more-primary"
                    )}
                >
                    --section-books-and-more-primary:{" "}
                    {getSetCSSVariable("--section-books-and-more-primary")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-books-and-more-secondary"
                    )}
                >
                    --section-books-and-more-secondary:{" "}
                    {getSetCSSVariable("--section-books-and-more-secondary")}
                </UIDocCard>
            </li>
        </List>
        <Heading level={2}>Research</Heading>
        <p>Research is used for the Research Catalog and SCC.</p>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-research-primary"
                    )}
                >
                    --section-research-primary:{" "}
                    {getSetCSSVariable("--section-research-primary")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-research-secondary"
                    )}
                >
                    --section-research-secondary:{" "}
                    {getSetCSSVariable("--section-research-secondary")}
                </UIDocCard>
            </li>
        </List>
        <Heading level={2}>Locations</Heading>
        <p>
            Locations is used for Location Finder and all branch pages with the
            exceptions of some research libraries.
        </p>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-locations-primary"
                    )}
                >
                    --section-locations-primary:{" "}
                    {getSetCSSVariable("--section-locations-primary")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-locations-secondary"
                    )}
                >
                    --section-locations-secondary:{" "}
                    {getSetCSSVariable("--section-locations-secondary")}
                </UIDocCard>
            </li>
        </List>
        <Heading level={2}>Research Libraries</Heading>
        <p>Research libraries with specific brand colors to adhere to.</p>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-research-library-lpa"
                    )}
                >
                    --section-research-library-lpa:{" "}
                    {getSetCSSVariable("--section-research-library-lpa")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-research-library-schomburg"
                    )}
                >
                    --section-research-library-schomburg:{" "}
                    {getSetCSSVariable("--section-research-library-schomburg")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getSetCSSVariable(
                        "--section-research-library-schwartzman"
                    )}
                >
                    --section-research-library-schwartzman:{" "}
                    {getSetCSSVariable(
                        "--section-research-library-schwartzman"
                    )}
                </UIDocCard>
            </li>
        </List>
    </>
);

brandFills.story = {
    name: "Brand Fills",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=15454%3A47007",
        },
    },
};
