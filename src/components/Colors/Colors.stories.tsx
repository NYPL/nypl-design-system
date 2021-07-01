import * as React from "react";

import { select } from "@storybook/addon-knobs";
import cssVariables from "../../helpers/CSSVariablesHelper";
import getCSSVariable from "../../helpers/getCSSVariable";
import UIDocCard from "./UIDocCard";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import List from "../List/List";
import Heading from "../Heading/Heading";
import { ListTypes } from "../List/ListTypes";
import { CSSVariablesInterface } from "../../interfaces";
import sections from "../../utils/siteSections";
import { getCategory } from "../../utils/componentCategories";

export default {
  title: getCategory("Colors"),
};

const uiVariables: CSSVariablesInterface = {};
const grayScaleVariables: CSSVariablesInterface = {};

for (const [key, value] of Object.entries(cssVariables)) {
  if (key.startsWith(" --ui-gray")) {
    grayScaleVariables[key] = value;
  } else if (key.startsWith(" --ui")) {
    uiVariables[key] = value;
  }
}

const uiVariableDocs = [];
const grayscaleDocs = [];

const makeUIDocCard = function (key, value, docArray: React.ReactElement[]) {
  docArray.push(
    <li style={{ textAlign: "center" }}>
      <UIDocCard backgroundColor={value}>
        {key}: {value}
      </UIDocCard>
    </li>
  );
};

for (const [key, value] of Object.entries(uiVariables)) {
  makeUIDocCard(key, value, uiVariableDocs);
}
for (const [key, value] of Object.entries(grayScaleVariables)) {
  makeUIDocCard(key, value, grayscaleDocs);
}

const sectionDefault = sections[3];

export const colorsBrand = () => (
  <>
    <Heading level={1}>Brand</Heading>
    <p>Brand fills are the NYPL primary and secondary colors.</p>
    <List
      type={ListTypes.Unordered}
      modifiers={["no-list-styling"]}
      className="card-grid__cards"
    >
      <li style={{ textAlign: "center" }}>
        <UIDocCard backgroundColor={getCSSVariable("--brand-primary")}>
          --brand-primary: {getCSSVariable("--brand-primary")}
        </UIDocCard>
      </li>
      <li style={{ textAlign: "center" }}>
        <UIDocCard backgroundColor={getCSSVariable("--brand-secondary")}>
          --brand-secondary: {getCSSVariable("--brand-secondary")}
        </UIDocCard>
      </li>
    </List>
    <Heading level={1}>Section Colors</Heading>
    <Heading level={2}>{"What's On"}</Heading>
    <p>
      Section colors are branding colors only in use at NYPL. Certain
      components, such as Breadcrumbs below, change color based on the modifier
      applied the body tag.
    </p>
    <div
      className={
        select("Section", sections, sectionDefault) +
        " storybook-breadcrumbsExample"
      }
      style={{ marginBottom: "2%", display: "flex", width: "100%" }}
    >
      <Breadcrumbs
        breadcrumbs={[
          { url: "#", text: "Parent" },
          { url: "#", text: "Home" },
        ]}
      />
      <div
        style={{
          flex: "1 1 50%",
          backgroundColor: "var(--ui-gray-xlight)",
          padding: "2%",
        }}
      >
        <pre>
          <code>
            {"<div className="}
            {"'" + select("Section", sections, sectionDefault) + "'"}
            {">\n"}
            {"    <Breadcrumbs...></Breadcrumbs>"}
            {"\n"}
            {"</div>"}
          </code>
        </pre>
      </div>
    </div>
    <p>What's On is used for Events, Exhibitions & Audio Guides.</p>
    <List
      type={ListTypes.Unordered}
      modifiers={["no-list-styling"]}
      className="card-grid__cards"
    >
      <li style={{ textAlign: "center" }}>
        <UIDocCard
          backgroundColor={getCSSVariable("--section-whats-on-primary")}
        >
          --section-whats-on-primary:{" "}
          {getCSSVariable("--section-whats-on-primary")}
        </UIDocCard>
      </li>
      <li style={{ textAlign: "center" }}>
        <UIDocCard
          backgroundColor={getCSSVariable("--section-whats-on-secondary")}
        >
          --section-whats-on-secondary:{" "}
          {getCSSVariable("--section-whats-on-secondary")}
        </UIDocCard>
      </li>
    </List>
    <Heading level={2}>Books and More</Heading>
    <p>
      Books and More is used for the Catalog, Staff Picks, Recommendations, New
      Arrivals, and E-Book Central.
    </p>
    <List
      type={ListTypes.Unordered}
      modifiers={["no-list-styling"]}
      className="card-grid__cards"
    >
      <li style={{ textAlign: "center" }}>
        <UIDocCard
          backgroundColor={getCSSVariable("--section-books-and-more-primary")}
        >
          --section-books-and-more-primary:{" "}
          {getCSSVariable("--section-books-and-more-primary")}
        </UIDocCard>
      </li>
      <li style={{ textAlign: "center" }}>
        <UIDocCard
          backgroundColor={getCSSVariable("--section-books-and-more-secondary")}
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
          backgroundColor={getCSSVariable("--section-research-primary")}
        >
          --section-research-primary:{" "}
          {getCSSVariable("--section-research-primary")}
        </UIDocCard>
      </li>
      <li style={{ textAlign: "center" }}>
        <UIDocCard
          backgroundColor={getCSSVariable("--section-research-secondary")}
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
          backgroundColor={getCSSVariable("--section-locations-primary")}
        >
          --section-locations-primary:{" "}
          {getCSSVariable("--section-locations-primary")}
        </UIDocCard>
      </li>
      <li style={{ textAlign: "center" }}>
        <UIDocCard
          backgroundColor={getCSSVariable("--section-locations-secondary")}
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
          backgroundColor={getCSSVariable("--section-research-library-lpa")}
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

colorsBrand.storyName = "Colors—Brand";
colorsBrand.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=15454%3A47007",
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

colorsUtility.storyName = "Colors—Utility";
colorsUtility.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=14989%3A37",
  },
};
