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
/* MC-25 Search Results Item */
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const Heading_1 = __importDefault(require("../Heading/Heading"));
const WithOneChild_1 = __importDefault(
    require("../../helpers/hoc/WithOneChild")
);
const EditionCard_1 = __importDefault(require("../EditionCard/EditionCard"));
/**
 *  SearchResultItem component that displays information for a work on a search results page.
 */
function SearchResultItem(props) {
    const {
        id,
        resultIndex,
        modifiers,
        blockName,
        headingContent,
        subtitleContent,
        authorLinkElement,
        editionInfo,
        editionsLinkElement,
    } = props;
    const baseClass = "search-result-item";
    const HeadingContent =
        headingContent && WithOneChild_1.default(headingContent);
    // TODO: Decide whether this needs to be in DS, and write/find utilities for us to count text within child components
    // if (headingContent.innerText > 80) {
    //   throw new Error("Section Title (h2) Text must be fewer than 80 characters");
    // } else if (headingContent.textContent > 60) {
    //   console.warn("Section Title (h2) Text should be fewer than 60 characters");
    // }
    return React.createElement(
        "div",
        { className: bem_1.default(baseClass, modifiers, blockName) },
        React.createElement(
            Heading_1.default,
            { id: id, level: 2, blockName: blockName ? blockName : baseClass },
            React.createElement(HeadingContent, null)
        ),
        React.createElement(
            "div",
            { className: bem_1.default("subtitle", [], baseClass) },
            subtitleContent
        ),
        React.createElement(
            "div",
            { className: bem_1.default("author", [], baseClass) },
            authorLinkElement
        ),
        React.createElement(EditionCard_1.default, {
            id: `card-${resultIndex}`,
            coverUrl: editionInfo.coverUrl,
            editionHeadingElement: editionInfo.editionYearHeading,
            editionInfo: editionInfo.editionInfo,
            readOnlineLink: editionInfo.readOnlineLink,
            downloadLink: editionInfo.downloadLink,
            noLinkElement: editionInfo.noLinkElement,
        }),
        React.createElement(
            "div",
            { className: bem_1.default("all-editions", [], baseClass) },
            editionsLinkElement
        )
    );
}
exports.default = SearchResultItem;
