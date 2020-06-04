"use strict";
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                  enumerable: true,
                  get: function () {
                      return m[k];
                  },
              });
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, "default", {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o["default"] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Enzyme = __importStar(require("enzyme"));
const React = __importStar(require("react"));
const SearchResultItem_1 = __importDefault(require("./SearchResultItem"));
describe("SearchResultItem", () => {
    const validHeading = React.createElement(
        "a",
        { href: "hello" },
        "headingText"
    );
    const invalidHeading = React.createElement(
        React.Fragment,
        null,
        React.createElement("a", { href: "hello" }, " headingText"),
        " ",
        React.createElement("span", null, "badText")
    );
    const EditionInfo = (heading) => {
        return React.createElement(SearchResultItem_1.default, {
            id: "Result1",
            resultIndex: 1,
            modifiers: [],
            blockName: "",
            headingContent: heading,
            subtitleContent: React.createElement(
                React.Fragment,
                null,
                '"Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
            ),
            authorLinkElement: React.createElement(
                "a",
                { href: "blah" },
                "bahah"
            ),
            editionInfo: {
                editionYearHeading: React.createElement(
                    "a",
                    { href: "blah2" },
                    "2004 Edition"
                ),
                coverUrl: "https://placeimg.com/57/81/arch",
                editionInfo: [
                    React.createElement(
                        React.Fragment,
                        null,
                        "Published in New York by Random House"
                    ),
                    React.createElement(
                        React.Fragment,
                        null,
                        "Written in English"
                    ),
                    React.createElement(
                        React.Fragment,
                        null,
                        "Under Creative Commons License"
                    ),
                ],
                readOnlineLink: React.createElement(
                    "a",
                    { href: "#read-online" },
                    "read"
                ),
                downloadLink: React.createElement(
                    "a",
                    { href: "#download" },
                    "download"
                ),
            },
            editionsLinkElement: React.createElement(
                "a",
                { href: "blah" },
                "bahah"
            ),
        });
    };
    // let shortHeadingText = "hello";
    // let longHeadingText = `hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello `;
    it("Search Result Item with a Heading Link, Edition Card and Edition Card", () => {
        let shallow = Enzyme.shallow(EditionInfo(validHeading));
        // Need to render since Heading's child is a component.
        const heading = shallow.find("Heading").render();
        chai_1.expect(heading).to.have.lengthOf(1);
        chai_1.expect(heading.find("a")).to.have.lengthOf(1);
        chai_1.expect(shallow.find("EditionCard")).to.have.lengthOf(1);
    });
    // TODO: Figure out how to do text count between multiple unknown children
    // it("Throws error when Heading Text is too long", () => {
    //     expect(() => Enzyme.mount(EditionInfo(longHeadingText))).to.throw("Section Title (h2) Text must be fewer than 80 characters");
    // });
});
