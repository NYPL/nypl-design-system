import * as React from "react";
import bem from "../../utils/bem";
import { LayoutTypes } from "./LayoutTypes";
import Placeholder from "../00-base/Placeholder";

export interface TemplateProps {
  /** Enum to control if Template has left/right sidebar or is full width. */
  layoutType: LayoutTypes;

  /** Content intended for inside <header>. */
  headerContent: JSX.Element;

  /** Primary content within <main> element. */
  primaryContent: JSX.Element;

  /** Content intended for inside <footer>. */
  footerContent: JSX.Element;

  /** Heroes appear inside <main> but extend full-width of template. */
  heroContent?: JSX.Element;

  /** Separate block for content above primary content within <main>. */
  topContent?: JSX.Element;

  /** Content intended for inside the sidebar within <main>. */
  sidebarContent?: JSX.Element;
}

export default function Template(props: TemplateProps) {
  let {
    layoutType,
    headerContent,
    heroContent,
    topContent,
    sidebarContent,
    primaryContent,
    footerContent,
  } = props;

  const templateBaseClass = "layout-container";

  let modifiers = [];
  let mainModifiers = [];
  let leftSidebar;
  let rightSidebar;

  const createSidebar = (sidebarContent: JSX.Element) => (
    <div className={bem("content-secondary", modifiers)}>{sidebarContent}</div>
  );

  if (layoutType === LayoutTypes.SidebarLeft) {
    modifiers.push("with-sidebar-left");
    leftSidebar = createSidebar(sidebarContent);
  } else if (layoutType === LayoutTypes.SidebarRight) {
    modifiers.push("with-sidebar-right");
    rightSidebar = createSidebar(sidebarContent);
  } else {
    return;
  }

  if (layoutType === LayoutTypes.SidebarLeft || LayoutTypes.SidebarRight) {
    mainModifiers.push("with-sidebar");
  }

  return (
    <div className={bem(templateBaseClass)}>
      <header className={bem("header")}>{headerContent}</header>

      <main className={bem("main", mainModifiers)}>
        <div className="content-header">{heroContent}</div>

        <div className="content-top">{topContent}</div>

        {leftSidebar}

        <div className={bem("content-primary", modifiers)}>
          {primaryContent}
        </div>

        {rightSidebar}
      </main>

      <footer className={bem("footer", modifiers)}>{footerContent}</footer>
    </div>
  );
}
