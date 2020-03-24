// OL-32 Text Link with Icon List

/** DEPRECATION WARNING, please build with <UnorderedList> component */

import * as React from "react";
import bem from "../../../utils/bem";
import SectionTitle from "../../02-molecules/Headings/SectionTitle";
import IconLink from "../../01-atoms/Links/IconLink";

export interface IconLinkListProps {
  titleText: string;
  modifiers?: [];
  blockName?: string;
  titleId: string;
  textLinks?: { text: string, url: string }[];
  linkObjects?: JSX.Element[];
}
export default function IconLinkList(props: IconLinkListProps) {
  const { titleText, modifiers, blockName, titleId, textLinks, linkObjects } = props;

  const iconLinkList__base_class = "iconlink-list";

  if ((textLinks && linkObjects) || (!textLinks && !linkObjects)) {
    throw new Error("Please pass either an array of {text: string, url: string}, or a list of link type components");
  }

  let links: JSX.Element[];
  if (textLinks) {
    links = textLinks.map((link, i) => {
      return <li className={bem("list-item", [], iconLinkList__base_class)} key={titleId + "-li-" + i}><IconLink url={link.url}>{link.text}</IconLink></li>;
    });
  } else {
    links = linkObjects.map((link, i) => {
      if (link.type !== "a") {
        throw new Error("Please only pass in objects of type <a>");
      }
      return <li className={bem("list-item", [], iconLinkList__base_class)} key={titleId + "-li-" + i}><IconLink>{link}</IconLink></li>;
    });
  }

  return <div className={bem(iconLinkList__base_class, [], blockName)}>
    <SectionTitle id={titleId} headingText={titleText} blockName={iconLinkList__base_class} />
    <ul aria-labelledby={titleId} className={bem("list", [], iconLinkList__base_class)}>
      {links}
    </ul>
  </div>;
}
