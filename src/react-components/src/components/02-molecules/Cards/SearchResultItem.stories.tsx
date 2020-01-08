import * as React from "react";

import SearchResultItem from "./SearchResultItem";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";


export default {
  title: "Search Result Item",
  component: SearchResultItem,
};

export const searchResultItem = () => <SearchResultItem
  id="Result1"
  resultIndex={1}
  totalEditions={7}
      modifiers={[]}
      blockName={""}
      headingText="Investigation of un-American propaganda activities in the United States. Hear..."
      subtitleText="Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      authorUrl="#authorUrl"
      authorName="First Last"
      editionInfo={{
        editionYearHeading: "2004 Edition",
        publisherAndLocation: "Published in New York by Random House",
        coverUrl: "https://placeimg.com/57/81/arch",
        language: "Written in English",
        license: "Under Creative Commons License",
        readOnlineLink: "#read-online",
        downloadLink: "#download"}}
      allEditionsUrl="#allEditions"
/>;
