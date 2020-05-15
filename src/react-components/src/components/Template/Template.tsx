import * as React from "react";
import bem from "../../utils/bem";
import { LayoutTypes } from "./LayoutTypes"
import Placeholder from "../00-base/Placeholder"

export interface TemplateProps {
  /** Enum to control if Template has left/right sidebar or is full width. */
  layoutType: LayoutTypes;

  /** Content intended for inside <header>. */
  headerContent: JSX.Element;

  /** content in the <main> element */
  mainContent: JSX.Element;

  /** content in the <main> element */
  footerContent: JSX.Element;

  /** Heroes appear inside <main> but extend full-width of template. */
  heroContent?: JSX.Element;

  /** Separate block for content above primary content within <main>. */
  topContent?: JSX.Element;

  /** Content intended for inside the sidebar within <main>. Shows up on the left. */
  leftSidebarContent?: JSX.Element;

  /** Content intended for inside the sidebar within <main>. Shows up on the right. */
  rightSidebarContent?: JSX.Element;
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
  let mainModifiers = [];

  if (layoutType = LayoutTypes.SidebarLeft || LayoutTypes.SidebarRight) {
    mainModifiers.push("with-sidebar");

  }

  if (layoutType = LayoutTypes.SidebarLeft) {
    modifiers.push("with-sidebar-left");
  }

  return <div className={bem(templateBaseClass)}>
    <header className={bem("header")}>
      {headerContent}
    </header>

    <main className={bem("main", mainModifiers)}>
      <div className="content-header">
        {heroContent}
      </div>

      <div className="content-top">
        {topContent}
      </div>

      <div className={bem("content-secondary", modifiers)}>
        {leftSidebarContent}
      </div>

      <div className={bem("content-primary", modifiers)}>
        {mainContent}
      </div>

      <div className={bem("content-secondary", modifiers)}>
        {rightSidebarContent}
      </div>
    </main>

    <footer className={bem("footer", modifiers)}>
      {footerContent}
    </footer>
  </div>;
}
