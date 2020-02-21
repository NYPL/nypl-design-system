import * as React from "react";
import bem from "../../../utils/bem";

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
  editionHeadingElement={<a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>}
  editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;

export const editionCardWithOneLinks = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingElement={<a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>}
  editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
  readOnlineLink="#readOnlineUrl">
</EditionCard>;

export const editionCardMissingLinks = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingElement={<a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>}
  editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
>
</EditionCard>;

export const editionCardWithSomeEditionInfo = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingElement={<a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>}
  editionInfo={["Published in New York", "Under Creative Commons License"]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;

export const editionCardWithComponentInfo = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingElement={<a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>}
  editionInfo={[<span>Published in New York</span>, "Under Creative Commons License"]}
  readOnlineLink={<span>Read Online</span>}
  downloadLink="#downloadUrl">
</EditionCard>;

export const editionCardWithEmptyEditionInfo = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/300/400/arch"
  editionHeadingElement={<a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>}
  editionInfo={[]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;

export const editionCardWithAtypicalImageSize = () => <EditionCard
  id="card#1"
  blockName=""
  coverUrl="https://placeimg.com/450/100/arch"
  editionHeadingElement={<a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>}
  editionInfo={["Publish Place: New York", "Language: English", "License: Creative Commons"]}
  readOnlineLink="#readOnlineUrl"
  downloadLink="#downloadUrl">
</EditionCard>;
