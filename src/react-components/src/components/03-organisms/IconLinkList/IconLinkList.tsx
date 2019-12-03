// OL-32 Text Link with Icon List
import * as React from "react";
import bem from "../../../utils/bem";
import SectionTitle from "../../02-molecules/Headings/SectionTitle";
import IconLink from "../../01-atoms/Links/IconLink";

export interface IconLinkListProps {
  titleText: string;
  titleId?: string;
  linkContent: string[];
}
export default function IconLinkList(props: IconLinkListProps) {
  const { titleText, titleId, linkContent } = props;
  console.log("linkContent", linkContent);
  bem("iconlink-list");
  let links = linkContent.map((link, i) => {
    return <li key={titleId + "-li-" + i}><IconLink url="#">{link}</IconLink></li>;
  });
  console.log("links", links);
    return <div className={ bem("iconlink-list")}>
      <SectionTitle id={titleId} headingText={titleText} />
      <ul aria-labelledby={titleId} >
        {links}
      </ul>
    </div>;
}
