import * as React from "react";

import Heading from "./Heading";
import { action } from "@storybook/addon-actions";

export default {
  title: "Heading",
  component: Heading
};

export const allHeadings = () => [
  <Heading level={1} id="heading1" text={"Heading 1"} />,
  <Heading level={2} id="heading2" text={"Heading 2"} />,
  <Heading level={3} id="heading3" text={"Heading 3"} />,
  <Heading level={4} id="heading4" text={"Heading 4"} />,
  <Heading level={5} id="heading5" text={"Heading 5"} />,
  <Heading level={6} id="heading6" text={"Heading 6"} />
];

export const headingsWithBold = () => <Heading id="heading1" level={1}><b>Head</b>ing 1</Heading> ;
