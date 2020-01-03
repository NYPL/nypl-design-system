import * as React from "react";

import EditionCard from "./EditionCard";
import { action } from "@storybook/addon-actions";

export default {
  title: "Edition Card",
  component: EditionCard,
};

export const searchResultsWithFullData = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/57/81/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Publish Place: New York", "Language: English", "License: Creative Commons"]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;

export const searchResultsWithOneLinks = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/57/81/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
  readOnlineLink="#readOnlineUrl">
</EditionCard>;

export const searchResultsMissingLinks = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/57/81/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
  >
</EditionCard>;

export const searchResultsWithSomeEditionInfo = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/57/81/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Published in New York", "Under Creative Commons License"]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;

export const searchResultsWithEmptyEditionInfo = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/57/81/arch"
  editionHeadingText="2004 Edition"
  editionInfo={[]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;
