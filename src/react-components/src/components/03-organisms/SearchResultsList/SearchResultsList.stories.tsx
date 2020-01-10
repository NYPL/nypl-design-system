import * as React from "react";
import bem from "../../../utils/bem";

import SearchResultsList, { SearchResultInfo } from "./SearchResultsList";
import { action } from "@storybook/addon-actions";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";

export default {
  title: "SearchResultsList",
  component: SearchResultsList,
};

let searchItemData: SearchResultInfo = {
  titleElement: <a href="title-link-url" className={bem("link", ["no-underline"])}>Investigation of un-American propaganda activities in the United States. Hear...</a>,
  subtitle: "Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  editionInfo: {
    editionYearHeading: <a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>,
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

export const SearchResultList = () => <SearchResultsList searchResults={[searchItemData, searchItemData, searchItemData]}></SearchResultsList>;
