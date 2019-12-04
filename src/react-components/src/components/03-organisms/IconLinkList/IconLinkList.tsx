// OL-32 Text Link with Icon List
import * as React from "react";
import bem from "../../../utils/bem";
import SectionTitle from "../../02-molecules/Headings/SectionTitle";
import IconLink from "../../01-atoms/Links/IconLink";

export interface IconLinkListProps {
  titleText: string;
  modifiers?: [];
  blockName?: string;
  titleId?: string;
  textLinks?: { text: string, url: string }[];
  linkObjects?: JSX.Element[];
}
export default function IconLinkList(props: IconLinkListProps) {
  const { titleText, modifiers, blockName, titleId, textLinks, linkObjects } = props;

  if ((textLinks && linkObjects) || (!textLinks && !linkObjects)) {
    throw new Error("Please pass either an array of {text: string, url: string}, or a list of link type components");
  }

  let links: JSX.Element[];
  if (textLinks) {
    links = textLinks.map((link, i) => {
      return <li key={titleId + "-li-" + i}><IconLink url={link.url}>{link.text}</IconLink></li>;
    });
  } else {
    links = linkObjects.map((link, i) => {
      if (link.type !== "a") {
        throw new Error("Please only pass in objects of type <a>");
      }
      return <li key={titleId + "-li-" + i}><IconLink>{link}</IconLink></li>;
    });
  }

  return <div className={bem("iconlink-list", modifiers, blockName)}>
    <SectionTitle id={titleId} headingText={titleText} />
    <ul aria-labelledby={titleId} >
      {links}
    </ul>
  </div>;
}
