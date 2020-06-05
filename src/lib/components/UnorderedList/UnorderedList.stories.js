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
exports.textListWithScroll = exports.searchResultsList = exports.editionsList = exports.checkboxList = exports.iconLinkList = void 0;
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const UnorderedList_1 = __importDefault(require("./UnorderedList"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
const IconTypes_1 = require("../Icons/IconTypes");
const EditionCard_1 = __importDefault(require("../EditionCard/EditionCard"));
const SearchResultItem_1 = __importDefault(
    require("../SearchResultItem/SearchResultItem")
);
const Checkbox_1 = __importDefault(require("../Checkbox/Checkbox"));
const addon_actions_1 = require("@storybook/addon-actions");
const Link_1 = __importDefault(require("../Link/Link"));
const LinkTypes_1 = require("../Link/LinkTypes");
exports.default = {
    title: "UnorderedList",
    component: UnorderedList_1.default,
};
const links = [
    React.createElement(Link_1.default, { href: "#url1" }, "Link1"),
    React.createElement(Link_1.default, { href: "#url2" }, "link2"),
    React.createElement(Link_1.default, { href: "#url3" }, "link3"),
];
exports.iconLinkList = () =>
    React.createElement(
        UnorderedList_1.default,
        { id: "link-list", blockName: "list-iconLink" },
        links
    );
let editionData = {
    editionYearHeading: React.createElement(
        "a",
        {
            href: "edition-link2",
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
            blockName: "edition-card",
            linkType: LinkTypes_1.LinkTypes.Button,
            href: "blah",
        },
        "Read Online"
    ),
    downloadLink: React.createElement(
        Link_1.default,
        { href: "#blah", linkType: LinkTypes_1.LinkTypes.Action },
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
const checkboxes = [
    React.createElement(Checkbox_1.default, {
        key: "checkbox-1",
        onChange: addon_actions_1.action("changed"),
        checkboxId: "checkbox-1",
        labelOptions: {
            id: "checkbox-1-label",
            labelContent: React.createElement(
                React.Fragment,
                null,
                "Checkbox 1"
            ),
        },
    }),
    React.createElement(Checkbox_1.default, {
        key: "checkbox-2",
        onChange: addon_actions_1.action("changed"),
        checkboxId: "checkbox-2",
        labelOptions: {
            id: "checkbox-2-label",
            labelContent: React.createElement(
                React.Fragment,
                null,
                "Checkbox 2"
            ),
        },
    }),
    React.createElement(Checkbox_1.default, {
        key: "checkbox-3",
        onChange: addon_actions_1.action("changed"),
        checkboxId: "checkbox-3",
        labelOptions: {
            id: "checkbox-3-label",
            labelContent: React.createElement(
                React.Fragment,
                null,
                "Checkbox 3"
            ),
        },
    }),
];
exports.checkboxList = () =>
    React.createElement(
        UnorderedList_1.default,
        { id: "checkbox-list" },
        checkboxes
    );
const editions = [
    React.createElement(EditionCard_1.default, {
        id: "edition-1",
        key: "edition-1",
        coverUrl: editionData.coverUrl,
        editionHeadingElement: editionData.editionYearHeading,
        editionInfo: editionData.editionInfo,
        readOnlineLink: editionData.readOnlineLink,
        downloadLink: editionData.downloadLink,
    }),
    React.createElement(EditionCard_1.default, {
        id: "edition-2",
        key: "edition-2",
        coverUrl: editionData.coverUrl,
        editionHeadingElement: editionData.editionYearHeading,
        editionInfo: editionData.editionInfo,
        readOnlineLink: editionData.readOnlineLink,
        downloadLink: editionData.downloadLink,
    }),
    React.createElement(EditionCard_1.default, {
        id: "edition-3",
        key: "edition-3",
        coverUrl: editionData.coverUrl,
        editionHeadingElement: editionData.editionYearHeading,
        editionInfo: editionData.editionInfo,
        readOnlineLink: editionData.readOnlineLink,
        downloadLink: editionData.downloadLink,
    }),
];
exports.editionsList = () =>
    React.createElement(
        UnorderedList_1.default,
        { id: "editions-list" },
        editions
    );
let searchItemData = {
    titleElement: React.createElement(
        "a",
        {
            href: "title-link-url",
            className: bem_1.default("link", ["no-underline"]),
        },
        "Investigation of un-American propaganda activities in the United States. Hear..."
    ),
    subtitle: React.createElement(
        React.Fragment,
        null,
        '"Subtitle need max character count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
    ),
    editionInfo: {
        editionYearHeading: React.createElement(
            "a",
            {
                href: "edition-link",
                className: bem_1.default("link", [], "heading"),
            },
            "2004 Edition"
        ),
        publisherAndLocation: "Published in New York by Random House",
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
                blockName: "edition-card",
                linkType: LinkTypes_1.LinkTypes.Button,
                href: "blah",
            },
            "Read Online"
        ),
        downloadLink: React.createElement(
            Link_1.default,
            { href: "#blah4", linkType: LinkTypes_1.LinkTypes.Action },
            React.createElement(Icon_1.default, {
                name: "download",
                blockName: "more-link",
                modifiers: ["left"],
                decorative: true,
                iconRotation: IconTypes_1.IconRotationTypes.rotate0,
            }),
            "Download"
        ),
    },
    authorElement: React.createElement(
        Link_1.default,
        { href: "author-url" },
        "First Last"
    ),
    editionsLinkElement: React.createElement(
        Link_1.default,
        { href: "#allEditionsUrl" },
        `View All 7 editions`
    ),
};
const searchResults = [
    React.createElement(SearchResultItem_1.default, {
        key: "search-result-item-1",
        id: "search-result-item-1",
        resultIndex: 1,
        headingContent: searchItemData.titleElement,
        subtitleContent: searchItemData.subtitle,
        authorLinkElement: searchItemData.authorElement,
        editionInfo: searchItemData.editionInfo,
        editionsLinkElement: searchItemData.editionsLinkElement,
    }),
    React.createElement(SearchResultItem_1.default, {
        key: "search-result-item-2",
        id: "search-result-item-2",
        resultIndex: 2,
        headingContent: searchItemData.titleElement,
        subtitleContent: searchItemData.subtitle,
        authorLinkElement: searchItemData.authorElement,
        editionInfo: searchItemData.editionInfo,
        editionsLinkElement: searchItemData.editionsLinkElement,
    }),
];
exports.searchResultsList = () =>
    React.createElement(
        UnorderedList_1.default,
        { id: "search-results-list" },
        searchResults
    );
let textList = [];
for (let i = 0; i < 100; i++) {
    textList.push(React.createElement("span", { key: i }, "Hello"));
}
exports.textListWithScroll = () =>
    React.createElement(
        UnorderedList_1.default,
        { id: "text-list-scroll", modifiers: ["scroll"] },
        textList
    );
