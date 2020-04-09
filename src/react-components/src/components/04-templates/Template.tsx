import * as React from "react";
import bem from "../../utils/bem";
import { LayoutTypes } from "./LayoutTypes"

export interface TemplateProps {
  /** Enum to control sidebar content, etc. */
  layoutType: LayoutTypes;

  modifiers?: [];
  blockName?: string;

}
export default function Template(props: TemplateProps) {
  let {
    layoutType,
    modifiers,
    blockName
  } = props;

  const templateBaseClass = "template";

  if (layoutType === LayoutTypes.SidebarLeft || layoutType === LayoutTypes.SidebarRight) {
    // modifiers.push("error");
    console.log(modifiers);
  }

  return <div className={bem(templateBaseClass, modifiers, blockName)}>
    <p>Wowee, that's wild</p>
  </div>;
}
