import * as React from "react";

import Breadcrumb from "../src/components/Breadcrumb/Breadcrumb";
import { action } from "@storybook/addon-actions";

export default {
  title: "Breadcrumb",
};

export const regular = () => <Breadcrumb items={[{ url:'#', text:"Home"}, { url:'#', text:"Parent"}]}></Breadcrumb>;

