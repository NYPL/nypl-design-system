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
/* MC-14 Edition Card */
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const Heading_1 = __importDefault(require("../Heading/Heading"));
const Image_1 = __importDefault(require("../Image/Image"));
/**
 * EditionCard component that renders information for an edition.
 */
function EditionCard(props) {
    const {
        id,
        blockName,
        modifiers = [],
        coverUrl,
        editionHeadingElement,
        editionInfo = [],
        readOnlineLink,
        downloadLink,
        noLinkElement = React.createElement(
            React.Fragment,
            null,
            "Unavailable to read online"
        ),
    } = props;
    const baseClass = "edition-card";
    const noLinksElem = React.createElement(
        "div",
        { className: bem_1.default("missing-links", [], baseClass) },
        noLinkElement
    );
    const getElem = (link) => {
        return React.createElement(
            "div",
            { className: bem_1.default("card-info-link", [], baseClass) },
            link
        );
    };
    const getButtonsElem = (readOnlineLink, downloadLink, baseClass) =>
        React.createElement(
            "div",
            { className: bem_1.default("card-ctas", [], baseClass) },
            readOnlineLink && getElem(readOnlineLink),
            downloadLink && getElem(downloadLink)
        );
    const btns =
        readOnlineLink || downloadLink
            ? getButtonsElem(readOnlineLink, downloadLink, baseClass)
            : noLinksElem;
    return React.createElement(
        "div",
        { className: bem_1.default(baseClass, modifiers, blockName) },
        React.createElement(
            Heading_1.default,
            { id: id, level: 3, blockName: blockName ? blockName : baseClass },
            editionHeadingElement
        ),
        React.createElement(
            "div",
            { className: bem_1.default("card-content", [], baseClass) },
            React.createElement(
                "div",
                { className: bem_1.default("card-image", [], baseClass) },
                React.createElement(Image_1.default, {
                    src: coverUrl,
                    isDecorative: true,
                })
            ),
            editionInfo.length > 0 &&
                React.createElement(
                    "div",
                    { className: bem_1.default("edition-info", [], baseClass) },
                    editionInfo.map((value, index) => {
                        return React.createElement(
                            "div",
                            {
                                className: bem_1.default(
                                    "edition-info-item",
                                    [],
                                    baseClass
                                ),
                                key: index,
                            },
                            value
                        );
                    })
                )
        ),
        btns
    );
}
exports.default = EditionCard;
