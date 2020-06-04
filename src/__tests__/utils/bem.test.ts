import bem from "../../utils/bem";

describe("given a baseclass", () => {
    it("returns baseclass", () => {
        expect(bem("unorder-list")).toBe("unorder-list");
    });
});

describe("given a baseclass with modifier and blockName", () => {
    it("returns properly formatted baseclass, modifier and blockname", () => {
        expect(bem("list-item", ["scroll"], "unordered-list")).toBe("unordered-list__list-item unordered-list__list-item--scroll");
    });
});

describe("given a baseclass with modifier and no blockName", () => {
    it("returns properly formatted baseclass and modifier", () => {
        expect(bem("list-item", ["scroll"])).toBe("list-item list-item--scroll");
    });
});

describe("given a baseclass with no modifier and  blockName", () => {
    it("returns properly formatted baseclass and blockName", () => {
        expect(bem("list-item", [], "unordered-list")).toBe("unordered-list__list-item");
    });
});
