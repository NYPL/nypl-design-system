import * as React from "react";

import Heading from "./Heading";
import { action } from "@storybook/addon-actions";
import IconLink from "../Links/IconLink";

export default {
  title: "Heading",
  component: Heading
};

export const allHeadings = () => [
  <Heading level={1} text={"Heading 1"} />,
  <Heading level={2} text={"Heading 2"} />,
  <Heading level={3} text={"Heading 3"} />,
  <Heading level={4} text={"Heading 4"} />,
  <Heading level={5} text={"Heading 5"} />,
  <Heading level={6} text={"Heading 6"} />
];
