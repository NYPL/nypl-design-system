/* AT-79 Page Title - Level 1 */
import * as React from "react";
import bem from "../../../../utils/bem";
import Heading from "./Heading";

export interface RNSectionTitleProps {
  titleId: string;
  sectionUrl: string;
  modifiers?: string[];
  blockName?: string;
}

export default function RNSectionTitle(props: RNSectionTitleProps) {
    const { titleId, sectionUrl, modifiers, blockName } = props;
    const baseClass = "rn-section-title";
    return <a className={bem(baseClass, modifiers, blockName) + ' ' + baseClass} href={sectionUrl}>Research<span class={bem('emphasis', modifiers, baseClass)}>Now</span></a>;
}
