import * as React from "react";

import RNSectionTitle from "./RNSectionTitle";
import { action } from "@storybook/addon-actions";

export default {
  title: "Research Now Section Title",
  component: RNSectionTitle
};

export const researchNowSectionTitle = () => <RNSectionTitle titleId="hello-page-title" sectionUrl="hello" blockName="blockname" modifiers={["hi", "bye"]}/>;
