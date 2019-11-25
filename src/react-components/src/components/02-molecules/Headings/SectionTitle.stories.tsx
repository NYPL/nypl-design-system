import * as React from "react";

import SectionTitle from "./SectionTitle";
import { action } from "@storybook/addon-actions";

export default {
  title: "Section Title",
  component: SectionTitle
};

export const headingsWithLinks = () => [
  <SectionTitle headingText={"Heading 2"} linkUrl="#heading2" linkText="see more"/>,
];
