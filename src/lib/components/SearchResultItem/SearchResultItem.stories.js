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
exports.searchResultItemNoSubtitle = exports.searchResultItem = void 0;
const React = __importStar(require("react"));
const SearchResultItem_1 = __importDefault(require("./SearchResultItem"));
const Link_1 = __importDefault(require("../Link/Link"));
const LinkTypes_1 = require("../Link/LinkTypes");
const Icon_1 = __importDefault(require("../Icons/Icon"));
const IconTypes_1 = require("../Icons/IconTypes");
const bem_1 = __importDefault(require("../../utils/bem"));
exports.default = {
    title: "Search Result Item",
    component: SearchResultItem_1.default,
};
let exampleEditionInfo = {
    editionYearHeading: React.createElement(
        "a",
        {
            href: "edition-link",
            className: bem_1.default("link", [], "heading"),
        },
        "2004 Edition"
    ),
    coverUrl: "https://placeimg.com/57/81/arch",
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
            href: "blah",
            blockName: "edition-card",
            linkType: LinkTypes_1.LinkTypes.Button,
        },
        "Read Online"
    ),
    downloadLink: React.createElement(
        Link_1.default,
        { href: "#passed-in-link", linkType: LinkTypes_1.LinkTypes.Action },
        React.createElement(Icon_1.default, {
            name: "download",
            blockName: "more-link",
            modifiers: ["left"],
            decorative: true,
            iconRotation: IconTypes_1.IconRotationTypes.rotate0,
        }),
        "Download"
    ),
};
exports.searchResultItem = () =>
    React.createElement(SearchResultItem_1.default, {
        id: "Result1",
        resultIndex: 1,
        headingContent: React.createElement(
            "a",
            {
                href: "title-link-url",
                className: bem_1.default("link", ["no-underline"]),
            },
            "Investigation of un-American propaganda activities in the United States. Hear..."
        ),
        subtitleContent: React.createElement(
            React.Fragment,
            null,
            '"Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        ),
        authorLinkElement: React.createElement(
            Link_1.default,
            { href: "author-url" },
            "First Last"
        ),
        editionInfo: exampleEditionInfo,
        editionsLinkElement: React.createElement(
            Link_1.default,
            { href: "#allEditionsUrl" },
            `View All 7 editions`
        ),
    });
exports.searchResultItemNoSubtitle = () =>
    React.createElement(SearchResultItem_1.default, {
        id: "Result1",
        resultIndex: 1,
        headingContent: React.createElement(
            "a",
            {
                href: "title-link-url",
                className: bem_1.default("link", ["no-underline"]),
            },
            "Investigation of un-American propaganda activities in the United States. Hear..."
        ),
        subtitleContent: React.createElement(React.Fragment, null),
        authorLinkElement: React.createElement(
            Link_1.default,
            { href: "author-url" },
            "First Last"
        ),
        editionInfo: exampleEditionInfo,
        editionsLinkElement: React.createElement(
            Link_1.default,
            { href: "#allEditionsUrl" },
            `View All 7 editions`
        ),
    });
