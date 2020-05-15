import * as React from "react";
import bem from "../../utils/bem";
import { LayoutTypes } from "./LayoutTypes"
import Placeholder from "../00-base/Placeholder"

export interface TemplateProps {
  /** Enum to control sidebar content, etc. */
  layoutType: LayoutTypes;

  /** hero content **/
  headerContent?: JSX.Element;

  /** hero content **/
  heroContent?: JSX.Element;

  /** content above main **/
  topContent?: JSX.Element;
  
  /** content in left sidebar **/
  leftSidebarContent?: JSX.Element;

  /** content in right sidebar **/
  rightSidebarContent?: JSX.Element;

  /** content in the <main> element **/
  mainContent: JSX.Element;

  /** content in the <main> element **/
  footerContent?: JSX.Element;
}

export default function Template(props: TemplateProps) {
  let {
    layoutType,
    headerContent,
    heroContent,
    topContent,
    leftSidebarContent,
    rightSidebarContent,
    mainContent,
    footerContent,
  } = props;

  const templateBaseClass = "layout-container";

  let modifiers = [];
  let blockName;

  if (layoutType === LayoutTypes.SidebarLeft || layoutType === LayoutTypes.SidebarRight) {
    // idk
  }

  let rightSidebar;

  if (layoutType === LayoutTypes.SidebarRight) {
    rightSidebar = true;
  }

  return <div className={bem(templateBaseClass)}>
    <header>
      {headerContent}
    </header>

    <main className={bem("main", modifiers, blockName)}>
      <div className="content-header">
        {heroContent}
      </div>

      {leftSidebarContent}

      {topContent}

      <div className={bem("content-primary", modifiers, blockName)}>
        {mainContent}
      </div>

      <div className={bem("content-secondary", modifiers, blockName)}>
        {rightSidebarContent}
      </div>
    </main>

    <footer>
      {footerContent}
    </footer>
  </div>;
}
