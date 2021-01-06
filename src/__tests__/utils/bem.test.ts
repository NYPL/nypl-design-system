import { expect } from "chai";
import bem from "../../utils/bem";

describe("given a baseclass", () => {
  it("returns baseclass", () => {
    expect(bem("unorder-list")).to.equal("unorder-list");
  });
});

describe("given a baseclass with modifier and blockName", () => {
  it("returns properly formatted baseclass, modifier and blockname", () => {
    expect(bem("list-item", ["scroll"], "unordered-list")).to.equal(
      "unordered-list__list-item unordered-list__list-item--scroll"
    );
  });
});

describe("given a baseclass with modifier and no blockName", () => {
  it("returns properly formatted baseclass and modifier", () => {
    expect(bem("list-item", ["scroll"])).to.equal(
      "list-item list-item--scroll"
    );
  });
});

describe("given a baseclass with no modifier and  blockName", () => {
  it("returns properly formatted baseclass and blockName", () => {
    expect(bem("list-item", [], "unordered-list")).to.equal(
      "unordered-list__list-item"
    );
  });
});
