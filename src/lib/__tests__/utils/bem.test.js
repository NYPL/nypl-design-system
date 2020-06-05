"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const bem_1 = __importDefault(require("../../utils/bem"));
describe("given a baseclass", () => {
    it("returns baseclass", () => {
        chai_1.expect(bem_1.default("unorder-list")).to.equal("unorder-list");
    });
});
describe("given a baseclass with modifier and blockName", () => {
    it("returns properly formatted baseclass, modifier and blockname", () => {
        chai_1
            .expect(bem_1.default("list-item", ["scroll"], "unordered-list"))
            .to.equal(
                "unordered-list__list-item unordered-list__list-item--scroll"
            );
    });
});
describe("given a baseclass with modifier and no blockName", () => {
    it("returns properly formatted baseclass and modifier", () => {
        chai_1
            .expect(bem_1.default("list-item", ["scroll"]))
            .to.equal("list-item list-item--scroll");
    });
});
describe("given a baseclass with no modifier and  blockName", () => {
    it("returns properly formatted baseclass and blockName", () => {
        chai_1
            .expect(bem_1.default("list-item", [], "unordered-list"))
            .to.equal("unordered-list__list-item");
    });
});
