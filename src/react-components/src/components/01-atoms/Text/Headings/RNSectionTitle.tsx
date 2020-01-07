/* AT-79 Page Title - Level 1
  This is the ResearchNow Variant, which isn't a semantic heading.*/

import * as React from "react";
import bem from "../../../../utils/bem";
import Heading from "./Heading";

export interface RNSectionTitleProps {
  id: string;
  url: string;
  modifiers?: string[];
  blockName?: string;
}

export default function RNSectionTitle(props: RNSectionTitleProps) {
  const { id, url, modifiers, blockName } = props;
  const baseClass = "rn-section-title";
  return <a className={`${bem(baseClass, modifiers, blockName)} ${baseClass}`} href={url}>
    <span id={id}>
      Research<span className={bem("emphasis", modifiers, baseClass)}>Now</span>
    </span>
  </a>;
}
