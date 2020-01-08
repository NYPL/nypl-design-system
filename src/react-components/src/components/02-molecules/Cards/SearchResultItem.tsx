/* MC-25 Search Results Item */
import * as React from "react";
import bem from "../../../utils/bem";
import IconLink from "../../01-atoms/Links/IconLink";
import Heading from "../../01-atoms/Text/Headings/Heading";
import EditionCard from "./EditionCard";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";

export type EditionInfo = {
  editionYearHeading: string,
  publisherAndLocation: string,
  coverUrl: string,
  language: string,
  license: string,
  readOnlineLink: string,
  downloadLink: string
};

export interface SectionTitleProps {
  id: string;

  resultIndex: number;
  totalEditions: number;

  modifiers?: [];
  blockName?: string;

  headingText: string;

  subtitleText: string;

  authorUrl: string;
  authorName: string;

  editionInfo: EditionInfo;
  allEditionsUrl: string;
}

export default class SectionTitle extends React.Component<SectionTitleProps, {}> {
  constructor(props: SectionTitleProps) {
    super(props);
  }

  render(): JSX.Element {
    const { id,
      resultIndex, totalEditions,
      modifiers, blockName, headingText,
      subtitleText,
      authorUrl, authorName,
      editionInfo, allEditionsUrl} = this.props;
    const baseClass = "search-result-item";

    if (headingText.length > 80) {
      throw new Error("Section Title (h2) Text must be fewer than 80 characters");
    } else if (headingText.length > 60) {
      console.warn("Section Title (h2) Text should be fewer than 60 characters");
    }

    return (
      <div className={bem(baseClass, modifiers, blockName)}>
        <Heading id={id} level={2} text={headingText} blockName={blockName ? blockName : baseClass} />
        <div className={bem("subtitle", [], baseClass)}>{subtitleText}</div>
        <div className={bem("author", [], baseClass)}>
          By <UnderlineLink url={authorUrl}>{authorName}</UnderlineLink>
        </div>
        <EditionCard
          id={`card-${resultIndex}`}
          coverUrl={editionInfo.coverUrl}
          editionHeadingText={editionInfo.editionYearHeading}
          editionInfo={[editionInfo.publisherAndLocation, editionInfo.language, editionInfo.license]}
          readOnlineLink={editionInfo.readOnlineLink}
          downloadLink={editionInfo.downloadLink}
        ></EditionCard>
        <div className={bem("all-editions", [], baseClass)}>
          <UnderlineLink url={allEditionsUrl}>{`View All ${totalEditions} editions`}</UnderlineLink>
        </div>
      </div>
    );
  }
}
