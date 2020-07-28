import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";
import cssVariables from "../../helpers/CSSVariablesHelper";
import getCSSVariable from "../../helpers/getCSSVariable";
import Heading from "../Heading/Heading";

export default {
    title: "Typography",
    decorators: [(storyFn) => <div style={{ padding: "2%" }}>{storyFn()}</div>],
};

const fontSizeVariables: { [k: string]: string } = {};
const typefaceVariables: { [k: string]: string } = {};

for (const [key, value] of Object.entries(cssVariables)) {
    if (key.startsWith(" --font-size")) {
        fontSizeVariables[key] = value;
    } else if (key.startsWith(" --typeface")) {
        typefaceVariables[key] = value;
    }
}

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
        <p>1rem in the Design System is equal to 16px.</p>
        <>{headings}</>

        <Heading level={2}>Body Sizes</Heading>
        <p>Used for body copy, captions, and secondary captions.</p>
        <p>1rem in the Design System is equal to 16px.</p>
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
