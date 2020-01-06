import * as React from "react";
import { action } from "@storybook/addon-actions";

import Pagination from "./Pagination";

export default {
  title: "Pagination",
  component: Pagination,
};


export const pagination = () => <Pagination
totalPages={10}
previousPageHandler={action("goToPrevious")}
nextPageHandler={action("goToNext")}
onSelectChange={action("selectChange")}
onSelectBlur={action("selectBlur")}/>;
