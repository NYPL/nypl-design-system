
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import EditionCard from "../../components/02-molecules/Cards/EditionCard";

describe("EditionCard", () => {
  let regularEditionCard = <EditionCard
    id="card#1"
    blockName=""
    coverUrl="https://placeimg.com/300/400/arch"
    editionHeadingElement={<a href="edition-link" >2004 Edition</a>}
    editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
    readOnlineLink="#readOnlineUrl"
    downloadLink="#downloadUrl" />;

  let elementEditionCard = <EditionCard
    id="card#1"
    blockName=""
    coverUrl="https://placeimg.com/300/400/arch"
    editionHeadingElement={<a href="edition-link" >2004 Edition</a>}
    editionInfo={[<span id="pub-span">Publisher</span>, "Written in English", <span>License</span>]}
    readOnlineLink="#readOnlineUrl"
    downloadLink="#downloadUrl" />;

  let missingLinkEditionCard = <EditionCard
    id="card#1"
    blockName=""
    coverUrl="https://placeimg.com/300/400/arch"
    editionHeadingElement={<a href="edition-link">2004 Edition</a>}
    editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
  />;

  let missingLinkNoLinkElement = <EditionCard
    id="card#1"
    blockName=""
    coverUrl="https://placeimg.com/300/400/arch"
    editionHeadingElement={<a href="edition-link">2004 Edition</a>}
    editionInfo={["Published in New York by Random House", "Written in English", "Under Creative Commons License"]}
    noLinkElement={<span id="noLinkElement">No Links</span>}
  />;

  let editionCardNoInfo = <EditionCard
    id="card#1"
    blockName=""
    coverUrl="fake-link"
    editionHeadingElement={<a href="edition-link">2004 Edition</a>}
    editionInfo={[]} />;

  it("Generates an Edition Card with a Heading Link, Image and two Links", () => {
    let card = Enzyme.mount(regularEditionCard);
    expect(card.find("h3")).to.have.lengthOf(1);
    expect(card.find("h3").find("a")).to.have.lengthOf(1);
    expect(card.find("img")).to.have.lengthOf(1);
    expect(card.findWhere(n => {
      return n.name() === "a" && n.prop("className") === "edition-card__card-info-link";
    })).to.have.lengthOf(2);
  });

  it("Shows an error span if Links are missing and not passed a link element", () => {
    let card = Enzyme.mount(missingLinkEditionCard);
    expect(card.find("h3")).to.have.lengthOf(1);
    expect(card.find("h3").find("a")).to.have.lengthOf(1);
    expect(card.find("img")).to.have.lengthOf(1);
    expect(card.find({className: "edition-card__missing-links"})).to.have.lengthOf(1);
  });

  it("Shows an error span if Links are missing and not passed a link element", () => {
    let card = Enzyme.mount(missingLinkNoLinkElement);
    expect(card.find("#noLinkElement")).to.have.lengthOf(1);
  });

  it("Generates Edition Card if no Edition Info is passed", () => {
    let card = Enzyme.mount(editionCardNoInfo);
    expect(card.find("h3")).to.have.lengthOf(1);
    expect(card.find("h3").find("a")).to.have.lengthOf(1);
    expect(card.find("img")).to.have.lengthOf(1);
    expect(card.find({className: "edition-card__missing-links"})).to.have.lengthOf(1);
  });

  it("Generates Edition Card if Edition Info is passed as spans", () => {
    let card = Enzyme.mount(elementEditionCard);
    expect(card.find("h3")).to.have.lengthOf(1);
    expect(card.find("h3").find("a")).to.have.lengthOf(1);
    expect(card.find("img")).to.have.lengthOf(1);
  });
});
