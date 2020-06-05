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
exports.actionLinkWithDownloadIcon = exports.backwardsLink = exports.forwardsLink = exports.buttonLink = exports.generatedLink = exports.passedInLink = void 0;
const React = __importStar(require("react"));
const Link_1 = __importDefault(require("./Link"));
const LinkTypes_1 = require("./LinkTypes");
const Icon_1 = __importDefault(require("../Icons/Icon"));
const IconTypes_1 = require("../Icons/IconTypes");
exports.default = {
    title: "Link",
    component: Link_1.default,
};
exports.passedInLink = () =>
    React.createElement(
        Link_1.default,
        { linkType: LinkTypes_1.LinkTypes.Default },
        React.createElement("a", { href: "#passed-in-link" }, "I'm cold")
    );
exports.generatedLink = () =>
    React.createElement(
        Link_1.default,
        { href: "#passed-in-link", linkType: LinkTypes_1.LinkTypes.Default },
        "I'm very cold"
    );
exports.buttonLink = () =>
    React.createElement(
        Link_1.default,
        { linkType: LinkTypes_1.LinkTypes.Button, href: "#passed-in-link" },
        "I'm very cold"
    );
exports.forwardsLink = () =>
    React.createElement(
        Link_1.default,
        { linkType: LinkTypes_1.LinkTypes.Forwards },
        React.createElement("a", { href: "#passedinlink" }, "content")
    );
exports.backwardsLink = () =>
    React.createElement(
        Link_1.default,
        { href: "#passed-in-link", linkType: LinkTypes_1.LinkTypes.Backwards },
        "content"
    );
exports.actionLinkWithDownloadIcon = () =>
    React.createElement(
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
    );
