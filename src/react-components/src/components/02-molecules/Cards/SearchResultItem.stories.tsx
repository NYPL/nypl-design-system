import * as React from "react";

import SearchResultItem from "./SearchResultItem";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import UnderlineLink from "../../01-atoms/Links/UnderlineLink";


export default {
  title: "Search Result Item",
  component: SearchResultItem,
};

export const searchResultItem = () => <SearchResultItem
  id="Result1"
  resultIndex={1}
  modifiers={[]}
  blockName={""}
  headingText="Investigation of un-American propaganda activities in the United States. Hear..."
  subtitleText="Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  authorLinkElement={<UnderlineLink url={"author-url"}>First Last</UnderlineLink>}
  editionInfo={{
    editionYearHeading: "2004 Edition",
    publisherAndLocation: "Published in New York by Random House",
    coverUrl: "https://placeimg.com/57/81/arch",
    language: "Written in English",
    license: "Under Creative Commons License",
    readOnlineLink: "#read-online",
    downloadLink: "#download"
  }}
  editionsLinkElement={<UnderlineLink url={"#allEditionsUrl"}>{`View All 7 editions`}</UnderlineLink>
}
/>;
