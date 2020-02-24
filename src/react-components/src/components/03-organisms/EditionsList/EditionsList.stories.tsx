import * as React from "react";
import bem from "../../../utils/bem";

import EditionsList from "./EditionsList";
import { EditionDetails } from "../../02-molecules/Cards/EditionCard";

export default {
  title: "EditionsList",
  component: EditionsList,
};

let editionData: EditionDetails = {
  editionYearHeading: <a href="edition-link" className={bem("link", [], "heading")} >2004 Edition</a>,
  publisherAndLocation: "Published in New York by Random House",
  coverUrl: "https://placeimg.com/57/81/arch",
  language: "Written in English",
  license: "Under Creative Commons License",
  readOnlineLink: "#read-online",
  downloadLink: "#download",
};

export const SearchResultList = () => <EditionsList editions={[editionData, editionData, editionData]} />;
