import { expect } from "chai";
import bem from "../../utils/bem";

describe("bem", () => {
  it("returns baseclass", () => {
    expect(bem("unorder-list")).to.equal("unorder-list");
  });

  it("returns properly formatted classes from a baseclass and modifier", () => {
    const modifiers = ["scroll"];
    expect(bem("list-item", modifiers)).to.equal("list-item list-item--scroll");
  });

  it("returns properly formatted classes from a baseclass, modifier, and blockname", () => {
    const modifiers = ["scroll"];
    const blockName = "unordered-list";
    expect(bem("list-item", modifiers, blockName)).to.equal(
      "unordered-list__list-item unordered-list__list-item--scroll"
    );
  });

  it("returns properly formatted classes from a baseclass and blockName", () => {
    const blockName = "unordered-list";
    expect(bem("list-item", [], blockName)).to.equal(
      "unordered-list__list-item"
    );
  });

  it("returns additional extra classes", () => {
    const modifier = ["modifier"];
    const blockName = "unordered-list";
    const extra = ["extraClass"];

    expect(bem("list-item", modifier, blockName, extra)).to.equal(
      "unordered-list__list-item unordered-list__list-item--modifier extraClass"
    );
  });
});
