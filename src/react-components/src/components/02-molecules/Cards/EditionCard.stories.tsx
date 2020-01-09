import * as React from "react";

import EditionCard from "./EditionCard";
import { action } from "@storybook/addon-actions";

export default {
  title: "Edition Card",
  component: EditionCard,
};

export const editionCardWithFullData = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;

export const editionCardWithOneLinks = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
  readOnlineLink="#readOnlineUrl">
</EditionCard>;

export const editionCardMissingLinks = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
  >
</EditionCard>;

export const editionCardWithSomeEditionInfo = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Published in New York", "Under Creative Commons License"]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;

export const editionCardWithEmptyEditionInfo = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingText="2004 Edition"
  editionInfo={[]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;

export const editionCardWithAtypicalImageSize = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/450/100/arch"
  editionHeadingText="2004 Edition"
  editionInfo={["Publish Place: New York", "Language: English", "License: Creative Commons"]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;
