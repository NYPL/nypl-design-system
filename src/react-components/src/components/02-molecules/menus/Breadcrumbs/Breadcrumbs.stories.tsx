import * as React from "react";

import Breadcrumb from "./Breadcrumbs";

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

export const shortBreadcrumbs = () => <Breadcrumb breadcrumbs={shortItems}></Breadcrumb>;
export const longBreadcrumbs = () => <Breadcrumb breadcrumbs={longItems}></Breadcrumb>;
