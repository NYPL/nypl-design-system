import * as React from "react";
import { action } from "@storybook/addon-actions";

import Pagination from "./Pagination";

export default {
  title: "Pagination",
  component: Pagination,
};


export const pagination = () => <Pagination
paginationDropdownOptions={["1 of 4", "2 of 4", "3 of 4", "4 of 4"]}
previousPageHandler={action("goToPrevious")}
nextPageHandler={action("goToNext")}
onSelectChange={action("selectChange")}
onSelectBlur={action("selectBlur")}/>;
