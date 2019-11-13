import Breadcrumbs from "./breadcrumbs.twig";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/html";

export default {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  // decorators: [storyFn => <div style={{ backgroundColor: "grey" }}>{storyFn()}</div>],
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

export const shortBreadcrumbs = () => Breadcrumbs({
  breadcrumbs: shortItems
});

export const longBreadcrumbs = () => Breadcrumbs({
  breadcrumbs: longItems
});

