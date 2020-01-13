// OL-28 Search Results Item List
import * as React from "react";
import bem from "../../../utils/bem";
import SearchResultItem, { EditionInfo } from "../../02-molecules/Cards/SearchResultItem";

export type SearchResultInfo = {
  titleElement: JSX.Element,
  subtitle: string,
  editionInfo: EditionInfo,
  authorElement: JSX.Element,
  editionsLinkElement: JSX.Element
};

export interface SearchResultsListProps {
  modifiers?: [];
  blockName?: string;
  searchResults: SearchResultInfo[];
}
export default function SearchResultsList(props: SearchResultsListProps) {
  const { modifiers, blockName, searchResults } = props;

  const base_class = "search-results-list";

  return <ul className={bem(base_class, [], blockName)}>
    {searchResults.map((item, index) => {
      return (<li key={`search-result-item-${index}`}>
        <SearchResultItem
          id={`search-result-item-${index}`}
          resultIndex={index}
          modifiers={modifiers}
          blockName={blockName}
          headingContent={item.titleElement}
          subtitleText={item.subtitle}
          authorLinkElement={item.authorElement}
          editionInfo={item.editionInfo}
          editionsLinkElement={item.editionsLinkElement} />
      </li>);
    })}
  </ul>;
}
