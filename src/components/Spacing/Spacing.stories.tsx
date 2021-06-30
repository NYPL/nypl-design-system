import * as React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react/types-6-0";
import range from "lodash/range";

import cssVariables from "../../helpers/CSSVariablesHelper";
import Card from "../Card/Card";
import { ExampleCard } from "../Card/Card.stories";
import List from "../List/List";
import Heading from "../Heading/Heading";
import { ListTypes } from "../List/ListTypes";
import { CSSVariablesInterface } from "../../interfaces";
import { getCategory } from "../../utils/componentCategories";

export default {
  title: getCategory("Spacing"),
  decorators: [withDesign],
} as Meta;

const spaceVariables: CSSVariablesInterface = {};

for (const [key, value] of Object.entries(cssVariables)) {
  if (key.startsWith(" --space")) {
    spaceVariables[key] = value;
  }
}

const spaceDocs = [];

const spaceBoxStyle = {
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
    <p>1rem in the Design System is equal to 16px.</p>
    <List
      type={ListTypes.Unordered}
      modifiers={["no-list-styling"]}
      className="card-grid__cards"
    >
      {spaceDocs}
    </List>
  </>
);
Spacing.storyName = "Spacing";
Spacing.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17249%3A13",
  },
};

export const SpacingInContext = args => (
  <>
    <Heading level={1}>Spacing in Context</Heading>
    <p>
      Adjust the controls to see how margin-bottoms change with the CSS
      variables exported specifically for spacing.
    </p>
    <List type={ListTypes.Unordered} modifiers={["no-list-styling"]}>
      {range(8).map(i => (
        <li key={i} style={{ marginBottom: "var(" + args.marginBottom + ")" }}>
          <ExampleCard />
        </li>
      ))}
    </List>
  </>
);

const spaceVariableArgs = [];
for (const key of Object.keys(spaceVariables)) {
  const variable = key.substring(1);
  spaceVariableArgs.push(variable);
}
SpacingInContext.args = {
  marginBottom: "--space-xs",
};
SpacingInContext.argTypes = {
  marginBottom: {
    control: {
      type: "select",
      options: spaceVariableArgs,
    },
  },
};
SpacingInContext.storyName = "Spacing In Context";
SpacingInContext.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17185%3A204",
  },
};
