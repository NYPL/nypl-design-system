
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import SearchResultItem from "../../components/02-molecules/Cards/SearchResultItem";

describe("SearchResultsItem", () => {
  const EditionInfo = (headingText: string) => {
    return <SearchResultItem
      id="Result1"
      resultIndex={1}
      modifiers={[]}
      blockName={""}
      headingText={headingText}
      subtitleText="Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      authorLinkElement={<a href="blah">bahah</a>}
      editionInfo={{
        editionYearHeading: "2004 Edition",
        publisherAndLocation: "Published in New York by Random House",
        coverUrl: "https://placeimg.com/57/81/arch",
        language: "Written in English",
        license: "Under Creative Commons License",
        readOnlineLink: "#read-online",
        downloadLink: "#download"
      }}
      editionsLinkElement={<a href="blah">bahah</a>} />;
  };

  let shortHeadingText = "hello";
  let longHeadingText = `hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello `;

  it("Search Result Item with a Heading Link, Edition Card and Edition Card", () => {
    let shallow = Enzyme.shallow(EditionInfo(shortHeadingText));
    expect(shallow.find("Heading")).to.have.lengthOf(1);
    // TODO: Blocked on Heading Link ticket
    // expect(card.find("h2").find("a")).to.have.lengthOf(1);
    expect(shallow.find("EditionCard")).to.have.lengthOf(1);
  });

  it("Throws error when Heading Text is too long", () => {
      expect(() => Enzyme.mount(EditionInfo(longHeadingText))).to.throw("Section Title (h2) Text must be fewer than 80 characters");
  });
});
