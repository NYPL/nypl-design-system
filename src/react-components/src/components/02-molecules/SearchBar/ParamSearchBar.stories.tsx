import * as React from "react";

import ParamSearchBar from "./ParamSearchBar";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "ParamSearchBar",
  component: ParamSearchBar,
};

export const searchWithParams = () => <ParamSearchBar searchBarId="searchBarId" dropdownId="dropdownId" dropdownOptions={["hi there", "bye there"]} searchHandler={action("searched")} dropdownBlurHandler={action("selectChanged")}/>;
export const searchWithNoParams = () => <ParamSearchBar searchBarId="searchBarId" searchHandler={action("searched")} />;
