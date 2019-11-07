import * as React from "react";

import Breadcrumb from "./breadcrumbs.twig";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/html";

// export default {
//   title: "Breadcrumb",
//   component: Breadcrumb
// };

// const shortItems = [{ url: "#", text: "Parent" }, { url: "#", text: "Home" }];
// const longItems = [{ url: "#", text: "Parent" }, { url: "#", text: "Home" }, { url: "#", text: "Roast Half And Half Pumpkin Spice Siphon Aroma Ristretto Cinnamon Saucer" }, { url: "#", text: "Roast Half And Half Pumpkin Spice Siphon Aroma Ristretto Cinnamon Saucer" }];

// export const shortBreadcrumbs = () => Breadcrumb();

// shortBreadcrumbs.story = {
//   decorators: [storyFn => <div style={{ border: '5px solid red' }}>{storyFn()}</div>],
// };

storiesOf('breadcrumb', module)
  .add('shortBreadcrumbst', () => Breadcrumb())
  .addDecorator(storyFn =>  <div style={{ border: '5px solid red' }}>{storyFn()}</div>);;

