import * as React from "react";

import Breadcrumb from "./Breadcrumbs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  decorators: [storyFn => <div style={{ backgroundColor: "grey" }}>{storyFn()}</div>],
};

const shortItems = [
  { url: "#", text: "Parent" },
  { url: "#", text: "Home" }
];

const longItems = [
  { url: "#", text: "Parent" },
  { url: "#", text: "Home" },
  { url: "#", text: "Roast Half And Half Pumpkin Spice Siphon Aroma Ristretto Cinnamon Saucer" },
  { url: "#", text: "Roast Half And Half Pumpkin Spice Siphon Aroma Ristretto Cinnamon Saucer" }
];

const components = [
  <a role="link" href="#test1"><span>Hello</span></a>, <a role="link" href="#test2">Goodbye</a>
];

export const shortBreadcrumbs = () => <Breadcrumb breadcrumbs={shortItems}></Breadcrumb>;
export const longBreadcrumbs = () => <Breadcrumb breadcrumbs={longItems}></Breadcrumb>;
export const breadcrumbWithComponents = () => <Breadcrumb breadcrumbs={components}></Breadcrumb>;
