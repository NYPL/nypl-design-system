import * as React from "react";

import SearchResultsList, { SearchResultInfo } from "./SearchResultsList";
import { action } from "@storybook/addon-actions";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";

export default {
  title: "SearchResultsList",
  component: SearchResultsList,
};

let searchItemData: SearchResultInfo = {
  title: "Investigation of un-American propaganda activities in the United States. Hear...",
  subtitle: "Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  editionInfo: {
    editionYearHeading: "2004 Edition",
    publisherAndLocation: "Published in New York by Random House",
    coverUrl: "https://placeimg.com/57/81/arch",
    language: "Written in English",
    license: "Under Creative Commons License",
    readOnlineLink: "#read-online",
    downloadLink: "#download",
  },
  authorElement: <UnderlineLink url={"author-url"}>First Last</UnderlineLink>,
  editionsLinkElement: <UnderlineLink url={"#allEditionsUrl"}>{`View All 7 editions`}</UnderlineLink>
};

export const SearchResultList = () => <SearchResultsList searchResults={[searchItemData, searchItemData, searchItemData]}></SearchResultsList>
