import * as React from "react";

import RNSectionTitle from "./RNSectionTitle";
import { action } from "@storybook/addon-actions";

export default {
  title: "Research Now Section Title",
  component: RNSectionTitle
};

export const researchNowSectionTitle = () => <RNSectionTitle id="hello-page-title" url="hello"/>;
