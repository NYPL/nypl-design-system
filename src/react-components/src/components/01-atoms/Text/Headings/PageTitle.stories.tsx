import * as React from "react";

import PageTitle from "./PageTitle";
import { action } from "@storybook/addon-actions";

export default {
  title: "PageTitle",
  component: PageTitle
};

export const pageTitle = () => <PageTitle headerId="hello-page-title" text="hello"></PageTitle>;
