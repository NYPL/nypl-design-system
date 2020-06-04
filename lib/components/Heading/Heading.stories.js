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
exports.heading2AT264 = exports.pageTitleAT3 = exports.pageTitleAT79 = exports.headingsWithLink = exports.headingsWithBold = exports.allHeadings = void 0;
const React = __importStar(require("react"));
const Heading_1 = __importDefault(require("./Heading"));
exports.default = {
    title: "Heading",
    component: Heading_1.default,
};
exports.allHeadings = () => [
    React.createElement(Heading_1.default, {
        level: 1,
        id: "heading1",
        text: "Heading 1",
    }),
    React.createElement(Heading_1.default, {
        level: 2,
        id: "heading2",
        text: "Heading 2",
    }),
    React.createElement(Heading_1.default, {
        level: 3,
        id: "heading3",
        text: "Heading 3",
    }),
    React.createElement(Heading_1.default, {
        level: 4,
        id: "heading4",
        text: "Heading 4",
    }),
    React.createElement(Heading_1.default, {
        level: 5,
        id: "heading5",
        text: "Heading 5",
    }),
    React.createElement(Heading_1.default, {
        level: 6,
        id: "heading6",
        text: "Heading 6",
    }),
];
exports.headingsWithBold = () =>
    React.createElement(
        Heading_1.default,
        { id: "heading1", level: 1 },
        React.createElement(
            React.Fragment,
            null,
            React.createElement("b", null, "Head"),
            "ing 1"
        )
    );
exports.headingsWithLink = () =>
    React.createElement(
        Heading_1.default,
        { id: "heading1", level: 1 },
        React.createElement(
            React.Fragment,
            null,
            React.createElement("a", { href: "hello" }, "Head"),
            "ing"
        )
    );
exports.pageTitleAT79 = () =>
    React.createElement(Heading_1.default, {
        level: 1,
        id: "hello-page-title",
        blockName: "page-title",
        modifiers: ["block-color"],
        text: "hello",
    });
exports.pageTitleAT3 = () =>
    React.createElement(Heading_1.default, {
        level: 1,
        id: "hello-page-title",
        blockName: "page-title",
        text: "hello",
    });
exports.heading2AT264 = () =>
    React.createElement(Heading_1.default, {
        level: 2,
        id: "hello-h2-heading",
        text: "Viewing 1 out of 10",
    });
