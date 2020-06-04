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
exports.instanceCard = exports.editionCardWithAtypicalImageSize = exports.editionCardWithEmptyEditionInfo = exports.editionCardWithSomeEditionInfo = exports.editionCardMissingLinks = exports.editionCardWithOneLinks = exports.editionCardWithFullData = void 0;
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const IconTypes_1 = require("../Icons/IconTypes");
const EditionCard_1 = __importDefault(require("./EditionCard"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
const Link_1 = __importDefault(require("../Link/Link"));
const LinkTypes_1 = require("../Link/LinkTypes");
exports.default = {
    title: "Edition Card",
    component: EditionCard_1.default,
};
exports.editionCardWithFullData = () =>
    React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            {
                href: "edition-link",
                className: bem_1.default("link", [], "heading"),
            },
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
                "License: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
            ),
        ],
        readOnlineLink: React.createElement(
            Link_1.default,
            {
                linkType: LinkTypes_1.LinkTypes.Button,
                blockName: "edition-card",
                href: "blah",
            },
            "Read Online"
        ),
        downloadLink: React.createElement(
            Link_1.default,
            { href: "#url", linkType: LinkTypes_1.LinkTypes.Action },
            React.createElement(Icon_1.default, {
                name: "download",
                blockName: "more-link",
                decorative: true,
                modifiers: ["left"],
                iconRotation: IconTypes_1.IconRotationTypes.rotate0,
            }),
            "Download"
        ),
    });
exports.editionCardWithOneLinks = () =>
    React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            {
                href: "edition-link",
                className: bem_1.default("link", [], "heading"),
            },
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
    });
exports.editionCardMissingLinks = () =>
    React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            {
                href: "edition-link",
                className: bem_1.default("link", [], "heading"),
            },
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
exports.editionCardWithSomeEditionInfo = () =>
    React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            {
                href: "edition-link",
                className: bem_1.default("link", [], "heading"),
            },
            "2004 Edition"
        ),
        editionInfo: [
            React.createElement(React.Fragment, null, "Published in New York"),
            React.createElement("span", null, "Under Creative Commons License"),
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
    });
exports.editionCardWithEmptyEditionInfo = () =>
    React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/300/400/arch",
        editionHeadingElement: React.createElement(
            "a",
            {
                href: "edition-link",
                className: bem_1.default("link", [], "heading"),
            },
            "2004 Edition"
        ),
        editionInfo: [],
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
    });
exports.editionCardWithAtypicalImageSize = () =>
    React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/450/100/arch",
        editionHeadingElement: React.createElement(
            "a",
            {
                href: "edition-link",
                className: bem_1.default("link", [], "heading"),
            },
            "2004 Edition"
        ),
        editionInfo: [
            React.createElement(
                React.Fragment,
                null,
                "Publish Place: New York"
            ),
            React.createElement(React.Fragment, null, "Language: English"),
            React.createElement(
                React.Fragment,
                null,
                "License: Creative Commons"
            ),
        ],
        readOnlineLink: React.createElement(
            Link_1.default,
            {
                blockName: "edition-card",
                linkType: LinkTypes_1.LinkTypes.Button,
                href: "#blah",
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
    });
exports.instanceCard = () =>
    React.createElement(EditionCard_1.default, {
        id: "card#1",
        blockName: "",
        coverUrl: "https://placeimg.com/450/100/arch",
        editionHeadingElement: React.createElement(
            "a",
            {
                href: "edition-link",
                className: bem_1.default("link", [], "heading"),
            },
            "2004 Edition"
        ),
        editionInfo: [
            React.createElement(
                React.Fragment,
                null,
                'Published in New York by Random House"'
            ),
            React.createElement(
                "a",
                {
                    href: "find-link",
                    className: bem_1.default("link", [], "heading"),
                },
                "Find in a library"
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
    });
