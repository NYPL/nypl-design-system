import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";
import Card from "../Card/Card";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";

export default {
    title: "Colors",
    decorators: [(storyFn) => <div style={{ padding: "2%" }}>{storyFn()}</div>],
};

let cssVariables: {
    [k: string]: string;
} = {};

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

// console.dir(cssVariables);

const uiVariables: { [k: string]: string } = {};
const grayScaleVariables: { [k: string]: string } = {};

for (const [key, value] of Object.entries(cssVariables)) {
    if (key.startsWith(" --ui-gray")) {
        grayScaleVariables[key] = value;
    } else if (key.startsWith(" --ui")) {
        uiVariables[key] = value;
    }
}

let uiVariableDocs = [];
let grayscaleDocs = [];

for (const [key, value] of Object.entries(uiVariables)) {
    uiVariableDocs.push(
        <li style={{ textAlign: "center" }}>
            <Card className="var-docs">
                <div
                    style={{
                        alignItems: "center",
                        backgroundColor: value,
                        borderBottom: "1px solid var(--ui-gray-light)",
                        color: "white",
                        display: "flex",
                        height: "100px",
                        justifyContent: "center",
                        marginBottom: "15px",
                        width: "100%",
                    }}
                ></div>
                {key}: {value}
            </Card>
        </li>
    );
}

for (let item in grayScaleVariables) {
    grayscaleDocs.push(<li>{item}</li>);
}

export const utilityColors = () => (
    <>
        <List
            type={ListTypes.Unordered}
            modifiers={["no-list-styling"]}
            className="card-grid__cards"
        >
            {uiVariableDocs}
        </List>
        <>next</>
        <List type={ListTypes.Unordered}>{grayscaleDocs}</List>
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

export const brandFills = () => <div>cool color</div>;

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
