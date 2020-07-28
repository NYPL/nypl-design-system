import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";
import UIDocCard from "./UIDocCard";
import Card from "../Card/Card";
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
let spaceDocs = [];

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

const getCSSVariable = function (name: string) {
    let propertyValue = "";
    propertyValue = getComputedStyle(document.documentElement).getPropertyValue(
        name
    );
    return propertyValue;
};

const typeDocs = function (varPrefix: string, key, value) {
    let showFontSize =
        varPrefix === "font-size" ? `var(--${varPrefix}-${value})` : null;
    return (
        <div style={{ marginBottom: "2%" }}>
            <div>
                <span
                    style={{
                        fontSize: showFontSize,
                        marginRight: "var(--space-s)",
                    }}
                >
                    {key}
                </span>
                <span>
                    --{varPrefix}-{value}
                </span>
            </div>
            <p>{getCSSVariable(`--${varPrefix}-${value}`)}</p>
        </div>
    );
};

const breakpointSizes = {
    Desktop: "xl",
    "Tablet Landscape": "large",
    "Tablet Portrait": "medium",
    Mobile: "small",
};

let breakpointDocs = [];

for (const [key, value] of Object.entries(breakpointSizes)) {
    breakpointDocs.push(typeDocs("breakpoint", key, value));
}

export const breakpoints = () => (
    <>
        <Heading level={1}>Breakpoints</Heading>
        {breakpointDocs}
    </>
);

breakpoints.story = {
    name: "Breakpoints",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17983%3A60146",
        },
    },
};

export const colorsBrand = () => (
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
                    backgroundColor={getCSSVariable(
                        "--section-whats-on-primary"
                    )}
                >
                    --section-whats-on-primary:{" "}
                    {getCSSVariable("--section-whats-on-primary")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getCSSVariable(
                        "--section-whats-on-secondary"
                    )}
                >
                    --section-whats-on-secondary:{" "}
                    {getCSSVariable("--section-whats-on-secondary")}
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
                    backgroundColor={getCSSVariable(
                        "--section-books-and-more-primary"
                    )}
                >
                    --section-books-and-more-primary:{" "}
                    {getCSSVariable("--section-books-and-more-primary")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getCSSVariable(
                        "--section-books-and-more-secondary"
                    )}
                >
                    --section-books-and-more-secondary:{" "}
                    {getCSSVariable("--section-books-and-more-secondary")}
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
                    backgroundColor={getCSSVariable(
                        "--section-research-primary"
                    )}
                >
                    --section-research-primary:{" "}
                    {getCSSVariable("--section-research-primary")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getCSSVariable(
                        "--section-research-secondary"
                    )}
                >
                    --section-research-secondary:{" "}
                    {getCSSVariable("--section-research-secondary")}
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
                    backgroundColor={getCSSVariable(
                        "--section-locations-primary"
                    )}
                >
                    --section-locations-primary:{" "}
                    {getCSSVariable("--section-locations-primary")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getCSSVariable(
                        "--section-locations-secondary"
                    )}
                >
                    --section-locations-secondary:{" "}
                    {getCSSVariable("--section-locations-secondary")}
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
                    backgroundColor={getCSSVariable(
                        "--section-research-library-lpa"
                    )}
                >
                    --section-research-library-lpa:{" "}
                    {getCSSVariable("--section-research-library-lpa")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getCSSVariable(
                        "--section-research-library-schomburg"
                    )}
                >
                    --section-research-library-schomburg:{" "}
                    {getCSSVariable("--section-research-library-schomburg")}
                </UIDocCard>
            </li>
            <li style={{ textAlign: "center" }}>
                <UIDocCard
                    backgroundColor={getCSSVariable(
                        "--section-research-library-schwartzman"
                    )}
                >
                    --section-research-library-schwartzman:{" "}
                    {getCSSVariable("--section-research-library-schwartzman")}
                </UIDocCard>
            </li>
        </List>
    </>
);

colorsBrand.story = {
    name: "Colors—Brand",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=15454%3A47007",
        },
    },
};

export const colorsUtility = () => (
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

colorsUtility.story = {
    name: "Colors—Utility",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=14989%3A37",
        },
    },
};

let spaceBoxStyle = {
    backgroundColor: "var(--ui-focus)",
    marginBottom: "var(--space-xs)",
    padding: "2%",
    color: "var(--ui-white)",
    flex: "1 1 100%",
    height: "20px",
};

for (const [key, value] of Object.entries(spaceVariables)) {
    spaceDocs.push(
        <li style={{ textAlign: "center" }}>
            <Card>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexFlow: "row wrap",
                        alignItems: "center",
                    }}
                >
                    <div id={value} style={{ width: `${value}` }}>
                        <div style={spaceBoxStyle}></div>
                    </div>
                    <div style={{ flex: "1 1 100%" }}>
                        {key}: {value}
                    </div>
                </div>
            </Card>
        </li>
    );
}

export const Spacing = () => (
    <>
        <Heading level={1}>Spacing Variables</Heading>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            {spaceDocs}
        </List>
    </>
);

export const typefaces = () => (
    <>
        <Heading level={1}>Typefaces</Heading>
        <p>
            System Font, --typeface-body: {getCSSVariable("--typeface-body")};
        </p>
        <Heading level={1}>Weights</Heading>
        <p style={{ fontWeight: 700 }}>Bold / 700</p>
        <p style={{ fontWeight: 500 }}>Medium / 500</p>
        <p style={{ fontWeight: 400 }}>Regular / 400</p>
        <p style={{ fontWeight: 300 }}>Light / 300</p>

        <p>
            White, percolator aroma, trifecta, doppio blue mountain eu con panna
            kopi-luwak café au lait. Pumpkin spice galão breve skinny so sugar
            cream seasonal White, percolator aroma, trifecta, doppio blue
            mountain eu con panna kopi-luwak café au lait. Pumpkin spice galão
            breve skinny so sugar cream seasonal White, percolator aroma,
            trifecta, doppio blue mountain eu con panna kopi-luwak café au lait.
            Pumpkin spice galão breve con panna kopi-luwak café au lait Pumpkin
            spice galão breve Pumpkin spicePumpkin spice galão breve con panna
            kopi-luwak café au lait Pumpkin spice galão breve Pumpkin spice.
        </p>
    </>
);

typefaces.story = {
    name: "Typefaces",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A0",
        },
    },
};

let headingSizes = {
    Primary: "4",
    Secondary: "3",
    Tertiary: "2",
    Callout: "1",
};
let headings = [];
let bodySizes = { Body: "0", Caption: "-1", Tag: "-2", Mini: "-3" };
let bodyCopies = [];

for (const [key, value] of Object.entries(headingSizes)) {
    headings.push(typeDocs("font-size", key, value));
}

for (const [key, value] of Object.entries(bodySizes)) {
    bodyCopies.push(typeDocs("font-size", key, value));
}

export const typeScale = () => (
    <>
        <Heading level={1}>Type Scale</Heading>
        <Heading level={2}>Display Sizes</Heading>
        <p>
            Used for Headings on pages and callouts. These are separate from
            semantic elements—an <code>h1</code> has the "Headline Primary"
            style applied out of the box, for example, but the Headline Primary
            style can be applied to any type element on the page.
        </p>
        <>{headings}</>

        <Heading level={2}>Body Sizes</Heading>
        <p>Used for body copy, captions, and secondary captions.</p>
        <>{bodyCopies}</>
    </>
);

typefaces.story = {
    name: "Typefaces",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16",
        },
    },
};
