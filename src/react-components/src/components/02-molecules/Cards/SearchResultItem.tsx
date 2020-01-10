/* MC-25 Search Results Item */
import * as React from "react";
import bem from "../../../utils/bem";
import IconLink from "../../01-atoms/Links/IconLink";
import Heading from "../../01-atoms/Text/Headings/Heading";
import EditionCard from "./EditionCard";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";

export type EditionInfo = {
  editionYearHeading: JSX.Element,
  publisherAndLocation: string,
  coverUrl: string,
  language: string,
  license: string,
  readOnlineLink: string,
  downloadLink: string
};

export interface SearchResultItemProps {
  id: string;

  resultIndex: number;

  modifiers?: [];
  blockName?: string;

  headingContent: JSX.Element;

  subtitleText: string;

  authorLinkElement: JSX.Element;

  editionInfo: EditionInfo;
  editionsLinkElement: JSX.Element;
}

export default class SearchResultItem extends React.Component<SearchResultItemProps, {}> {
  constructor(props: SearchResultItemProps) {
    super(props);
  }

  render(): JSX.Element {
    const { id,
      resultIndex,
      modifiers, blockName, headingContent,
      subtitleText,
      authorLinkElement,
      editionInfo, editionsLinkElement} = this.props;
    const baseClass = "search-result-item";

    try {
      React.Children.only(headingContent as React.ReactElement);
    } catch (e) {
      const children = React.Children.map(this.props.children, child =>
        (child as JSX.Element).type);
      // Catching the error because React's error isn't as helpful.
      throw new Error(`Please only pass one child into SearchResultItem, got ${children.join(", ")}`);
    }

    // TODO: Decide whether this needs to be in DS, and write/find utilities for us to count text within child components
    // if (headingContent.innerText > 80) {
    //   throw new Error("Section Title (h2) Text must be fewer than 80 characters");
    // } else if (headingContent.textContent > 60) {
    //   console.warn("Section Title (h2) Text should be fewer than 60 characters");
    // }

    return (
      <div className={bem(baseClass, modifiers, blockName)}>
        <Heading id={id} level={2} blockName={blockName ? blockName : baseClass} >{headingContent}</Heading>
        <div className={bem("subtitle", [], baseClass)}>{subtitleText}</div>
        <div className={bem("author", [], baseClass)}>
          {authorLinkElement}
        </div>
        <EditionCard
          id={`card-${resultIndex}`}
          coverUrl={editionInfo.coverUrl}
          editionHeadingElement={editionInfo.editionYearHeading}
          editionInfo={[editionInfo.publisherAndLocation, editionInfo.language, editionInfo.license]}
          readOnlineLink={editionInfo.readOnlineLink}
          downloadLink={editionInfo.downloadLink}
        ></EditionCard>
        <div className={bem("all-editions", [], baseClass)}>
          {editionsLinkElement}
        </div>
      </div>
    );
  }
}
