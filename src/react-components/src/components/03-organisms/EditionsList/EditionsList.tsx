// OL-24 Editions List
import * as React from "react";
import bem from "../../../utils/bem";
import EditionCard, { EditionDetails } from "../../02-molecules/Cards/EditionCard";

export interface SearchResultsListProps {
  modifiers?: [];
  blockName?: string;
  editions: EditionDetails[];
}
export default function SearchResultsList(props: SearchResultsListProps) {
  const { modifiers, blockName, editions } = props;

  const base_class = "edition-list";

  return <ul className={bem(base_class, [], blockName)}>
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
          downloadLink={edition.downloadLink}/>
      </li>
    )}
  </ul>;
}
