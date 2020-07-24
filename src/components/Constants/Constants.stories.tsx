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

const getCSSVariable = function (name: string) {
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

let headingSizes = ["Callout", "Tertiary", "Secondary", "Primary"];
let headings = [];

for (let i = headingSizes.length; i--; i >= 1) {
    headings.push(
        <p>
            <span
                style={{
                    fontSize: `var(--font-size-${i + 1})`,
                    marginRight: "var(--space-s)",
                }}
            >
                {headingSizes[i]}
            </span>
            <span>
                --font-size-{i + 1}: {getCSSVariable(`--font-size-${i}`)}
            </span>
        </p>
    );
}

let bodySizes = [0, -1, -2, -3];
let bodyCopies = [];

console.log(bodySizes.length);

for (let j = 0; j++; j < bodySizes.length) {
    bodyCopies.push(<p>asldkjf</p>);
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
