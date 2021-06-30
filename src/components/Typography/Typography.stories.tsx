import * as React from "react";

import cssVariables from "../../helpers/CSSVariablesHelper";
import getCSSVariable from "../../helpers/getCSSVariable";
import Heading from "../Heading/Heading";
import { CSSVariablesInterface } from "../../interfaces";
import { getCategory } from "../../utils/componentCategories";

export default {
  title: getCategory("Typography"),
};

const fontSizeVariables: CSSVariablesInterface = {};
const typefaceVariables: CSSVariablesInterface = {};

for (const [key, value] of Object.entries(cssVariables)) {
  if (key.startsWith(" --font-size")) {
    fontSizeVariables[key] = value;
  } else if (key.startsWith(" --typeface")) {
    typefaceVariables[key] = value;
  }
}

const typeDocs = function (varPrefix: string, key, value) {
  const showFontSize =
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
    <p>System Font, --typeface-body: {getCSSVariable("--typeface-body")};</p>
    <Heading level={1}>Weights</Heading>
    <p style={{ fontWeight: 700 }}>Bold / 700</p>
    <p style={{ fontWeight: 500 }}>Medium / 500</p>
    <p style={{ fontWeight: 400 }}>Regular / 400</p>
    <p style={{ fontWeight: 300 }}>Light / 300</p>
  </>
);

typefaces.storyName = "Typefaces";
typefaces.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16",
  },
};

const headingSizes = {
  Primary: "4",
  Secondary: "3",
  Tertiary: "2",
  Callout: "1",
};
const headings = [];
const bodySizes = { Body: "0", Caption: "-1", Tag: "-2", Mini: "-3" };
const bodyCopies = [];

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
      Used for Headings on pages and callouts. These are separate from semantic
      elements—an <code>h1</code> has the {'"'}Headline Primary
      {'"'} style applied out of the box, for example, but the Headline Primary
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
