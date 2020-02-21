import * as React from "react";

import BasicLink from "./BasicLink";

export default {
  title: "Basic Link (Must be Wrapped in another component)",
  component: BasicLink,
};

export const passedInBasicLink = () =>
  <BasicLink className="passed-in-class">
    <a href="#passed-in-link">I'm cold</a>
  </BasicLink>;
export const generatedBasicLink = () =>
  <BasicLink className="passed-in-class" url="#passed-in-link">
    I'm very cold
  </BasicLink>;
