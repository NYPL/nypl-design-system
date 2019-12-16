import * as React from "react";

import Breadcrumbs from "./Breadcrumbs";

export default {
  title: "Breadcrumb",
  component: Breadcrumbs,
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

export const shortBreadcrumbs = () => <Breadcrumbs breadcrumbs={shortItems} />;
export const longBreadcrumbs = () => <Breadcrumbs breadcrumbs={longItems} />;
