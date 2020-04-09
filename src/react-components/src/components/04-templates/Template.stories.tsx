import * as React from "react";
import bem from "../../utils/bem";
import { LayoutTypes } from "./LayoutTypes";


import Template from "./Template";

export default {
  title: "Template",
  component: Template,
};

export const FullWidthTemplate = () => <Template
  layoutType={LayoutTypes.FullWidth}
/>;

export const LeftSidebarTemplate = () => <Template
  layoutType={LayoutTypes.SidebarLeft}
  modifiers={["beep"]}
/>;

export const RightSidebarTemplate = () => <Template
  layoutType={LayoutTypes.SidebarRight}
/>;
