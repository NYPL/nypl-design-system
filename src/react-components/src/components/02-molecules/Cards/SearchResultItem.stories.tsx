import * as React from "react";

import SearchResultItem from "./SearchResultItem";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";

import bem from "../../../utils/bem";

export default {
  title: "Search Result Item",
  component: SearchResultItem,
};

let exampleEditionInfo = {
  "editionYearHeading": <a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>,
  "publisherAndLocation": "Published in New York by Random House",
  "coverUrl": "https://placeimg.com/57/81/arch",
  "language": "Written in English",
  "license": "Under Creative Commons License",
  "readOnlineLink": "#read-online",
  "downloadLink": "#download"
};

export const searchResultItem = () => <SearchResultItem
  id="Result1"
  resultIndex={1}
  headingContent={<a href="title-link-url" className={bem("link", ["no-underline"])}>Investigation of un-American propaganda activities in the United States. Hear...</a>}
  subtitleText="Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  authorLinkElement={<UnderlineLink url={"author-url"}>First Last</UnderlineLink>}
  editionInfo={exampleEditionInfo}
  editionsLinkElement={<UnderlineLink url={"#allEditionsUrl"}>{`View All 7 editions`}</UnderlineLink>
}/>;

export const searchResultItemNoSubtitle = () => <SearchResultItem
  id="Result1"
  resultIndex={1}
  headingContent={<a href="title-link-url" className={bem("link", ["no-underline"])}>Investigation of un-American propaganda activities in the United States. Hear...</a>}
  subtitleText=""
  authorLinkElement={<UnderlineLink url={"author-url"}>First Last</UnderlineLink>}
  editionInfo={exampleEditionInfo}
  editionsLinkElement={<UnderlineLink url={"#allEditionsUrl"}>{`View All 7 editions`}</UnderlineLink>
}/>;
