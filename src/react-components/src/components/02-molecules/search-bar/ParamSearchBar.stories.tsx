import * as React from "react";

import ParamSearchBar from "./ParamSearchBar";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "ParamSearchBar",
  component: ParamSearchBar,
};

export const basicSearch = () => <ParamSearchBar searchBarId="searchBarId" dropdownId="dropdownId" searchHandler={action("searched")} dropdownBlurHandler={action("selectChanged")}/>;
