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
const EditionCard_1 = __importDefault(require("./EditionCard"));
const Link_1 = __importDefault(require("../Link/Link"));
const Icon_1 = __importDefault(require("../../components/Icons/Icon"));
const LinkTypes_1 = require("../../components/Link/LinkTypes");
describe("EditionCard", () => {
    let regularEditionCard = React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            { href: "edition-link" },
            "2004 Edition"
        ),
        editionInfo: [
            React.createElement(
                React.Fragment,
                null,
                "Published in New York by Random House"
            ),
            React.createElement(React.Fragment, null, "Written in English"),
            React.createElement(
                React.Fragment,
                null,
                "Under Creative Commons License"
            ),
        ],
        readOnlineLink: React.createElement(
            Link_1.default,
            {
                blockName: "edition-card",
                linkType: LinkTypes_1.LinkTypes.Button,
                href: "blah",
            },
            "Read Online"
        ),
        downloadLink: React.createElement(
            Link_1.default,
            { href: "#passed-in-link" },
            React.createElement(Icon_1.default, {
                name: "download",
                blockName: "more-link",
                modifiers: ["left"],
                decorative: true,
            }),
            "Download"
        ),
    });
    let elementEditionCard = React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            { href: "edition-link" },
            "2004 Edition"
        ),
        editionInfo: [
            React.createElement("span", { id: "pub-span" }, "Publisher"),
            React.createElement(React.Fragment, null, '"Written in English"'),
            React.createElement(
                "a",
                { id: "licenceId", href: "/licence-page" },
                "License"
            ),
        ],
        readOnlineLink: React.createElement(
            Link_1.default,
            {
                blockName: "edition-card",
                linkType: LinkTypes_1.LinkTypes.Button,
                href: "blah",
            },
            "Read Online"
        ),
        downloadLink: React.createElement(
            Link_1.default,
            { href: "#passed-in-link" },
            React.createElement(Icon_1.default, {
                name: "download",
                blockName: "more-link",
                modifiers: ["left"],
                decorative: true,
            }),
            "Download"
        ),
    });
    let missingLinkEditionCard = React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            { href: "edition-link" },
            "2004 Edition"
        ),
        editionInfo: [
            React.createElement(
                React.Fragment,
                null,
                "Published in New York by Random House"
            ),
            React.createElement(React.Fragment, null, "Written in English"),
            React.createElement(
                React.Fragment,
                null,
                "Under Creative Commons License"
            ),
        ],
    });
    let elementLinkEditionCard = React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            { href: "edition-link" },
            "2004 Edition"
        ),
        editionInfo: [
            React.createElement(
                React.Fragment,
                null,
                "Published in New York by Random House"
            ),
            React.createElement(React.Fragment, null, "Written in English"),
            React.createElement(
                React.Fragment,
                null,
                "Under Creative Commons License"
            ),
        ],
        readOnlineLink: React.createElement(
            "span",
            { id: "readOnlineSpan" },
            "Reading"
        ),
        downloadLink: React.createElement(
            "span",
            { id: "downloadSpan" },
            "Download"
        ),
    });
    let missingLinkNoLinkElement = React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            { href: "edition-link" },
            "2004 Edition"
        ),
        editionInfo: [
            React.createElement(
                React.Fragment,
                null,
                "Published in New York by Random House"
            ),
            React.createElement(React.Fragment, null, "Written in English"),
            React.createElement(
                React.Fragment,
                null,
                "Under Creative Commons License"
            ),
        ],
        noLinkElement: React.createElement(
            "span",
            { id: "noLinkElement" },
            "No Links"
        ),
    });
    let editionCardNoInfo = React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "fake-link",
        editionHeadingElement: React.createElement(
            "a",
            { href: "edition-link" },
            "2004 Edition"
        ),
        editionInfo: [],
    });
    it("Generates an Edition Card with a Heading Link, Image and two Links", () => {
        let card = Enzyme.mount(regularEditionCard);
        chai_1.expect(card.find("h3")).to.have.lengthOf(1);
        chai_1.expect(card.find("h3").find("a")).to.have.lengthOf(1);
        chai_1.expect(card.find("img")).to.have.lengthOf(1);
        chai_1
            .expect(card.find(".edition-card__card-info-link").find("a"))
            .to.have.lengthOf(2);
    });
    it("Shows an error span if Links are missing and not passed a link element", () => {
        let card = Enzyme.mount(missingLinkEditionCard);
        chai_1.expect(card.find("h3")).to.have.lengthOf(1);
        chai_1.expect(card.find("h3").find("a")).to.have.lengthOf(1);
        chai_1.expect(card.find("img")).to.have.lengthOf(1);
        chai_1
            .expect(card.find({ className: "edition-card__missing-links" }))
            .to.have.lengthOf(1);
    });
    it("Shows an error span if Links are missing and not passed a link element", () => {
        let card = Enzyme.mount(missingLinkNoLinkElement);
        chai_1.expect(card.find("#noLinkElement")).to.have.lengthOf(1);
    });
    it("Generates Edition Card if no Edition Info is passed", () => {
        let card = Enzyme.mount(editionCardNoInfo);
        chai_1.expect(card.find("h3")).to.have.lengthOf(1);
        chai_1.expect(card.find("h3").find("a")).to.have.lengthOf(1);
        chai_1.expect(card.find("img")).to.have.lengthOf(1);
        chai_1
            .expect(card.find({ className: "edition-card__missing-links" }))
            .to.have.lengthOf(1);
    });
    it("Generates Edition Card if Edition Info is passed as spans", () => {
        let card = Enzyme.mount(elementEditionCard);
        chai_1.expect(card.find("h3")).to.have.lengthOf(1);
        chai_1.expect(card.find("h3").find("a")).to.have.lengthOf(1);
        chai_1.expect(card.find("img")).to.have.lengthOf(1);
        chai_1.expect(card.find("#pub-span").text()).to.equal("Publisher");
        chai_1.expect(card.find("a#licenceId").text()).to.equal("License");
    });
    it("Passes call-to-action links if it is given as span", () => {
        let card = Enzyme.mount(elementLinkEditionCard);
        chai_1.expect(card.find("h3")).to.have.lengthOf(1);
        chai_1.expect(card.find("h3").find("a")).to.have.lengthOf(1);
        chai_1.expect(card.find("img")).to.have.lengthOf(1);
        chai_1.expect(card.find("#downloadSpan").text()).to.equal("Download");
    });
});
