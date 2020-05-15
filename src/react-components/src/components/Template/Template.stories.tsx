import * as React from "react";
import bem from "../../utils/bem";
import { LayoutTypes } from "./LayoutTypes";


import Template from "./Template";
import Placeholder from "../00-base/Placeholder";

export default {
  title: "Template",
  component: Template,
};

export const FullWidthTemplate = () => <Template
  layoutType={LayoutTypes.FullWidth}
  headerContent={<Placeholder>Header</Placeholder>}
  primaryContent={<Placeholder>Main Content</Placeholder>}
  footerContent={<Placeholder>Footer</Placeholder>}
/>;

export const LeftSidebarTemplate = () => <Template
  layoutType={LayoutTypes.SidebarLeft}
  headerContent={<Placeholder>Header</Placeholder>}
  heroContent={<Placeholder>Hero</Placeholder>}
  topContent={<Placeholder>Content Top</Placeholder>}
  leftSidebarContent={<Placeholder>Left Sidebar</Placeholder>}
  primaryContent={<Placeholder>Main Content</Placeholder>}
  footerContent={<Placeholder>Footer</Placeholder>}
/>;

export const RightSidebarTemplate = () => <Template
  layoutType={LayoutTypes.SidebarRight}
  headerContent={<Placeholder>Header</Placeholder>}
  heroContent={<Placeholder>Hero</Placeholder>}
  topContent={<Placeholder>Content Top</Placeholder>}
  rightSidebarContent={<Placeholder>Right Sidebar</Placeholder>}
  primaryContent={<Placeholder>Main Content</Placeholder>}
  footerContent={<Placeholder>Footer</Placeholder>}
/>;
