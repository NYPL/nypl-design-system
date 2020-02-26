// OL-24 Editions List
import * as React from "react";
import bem from "../../../utils/bem";
import EditionCard, { EditionDetails } from "../../02-molecules/Cards/EditionCard";

export interface EditionsListProps {
  baseClass?: string;
  modifiers?: string[];
  blockName?: string;
  editions: EditionDetails[];
}
export default function EditionsList(props: EditionsListProps) {
  const { baseClass = "edition-list", modifiers = [], blockName, editions } = props;

  return <ul className={bem(baseClass, modifiers, blockName)}>
    {editions.map((edition, index) =>
      <li key={`edition-item-${index}`}>
        <EditionCard
          id={`edition-${index}`}
          blockName={blockName}
          modifiers={["list"]}
          coverUrl={edition.coverUrl}
          editionHeadingElement={edition.editionYearHeading}
          editionInfo={[edition.publisherAndLocation, edition.language, edition.license]}
          readOnlineLink={edition.readOnlineLink}
          downloadLink={edition.downloadLink}
          noLinkElement={edition.noLinkElement} />
      </li>
    )}
  </ul>;
}
