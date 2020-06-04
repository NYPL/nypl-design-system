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
exports.RightSidebarTemplate = exports.LeftSidebarTemplate = exports.FullWidthTemplate = void 0;
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const Placeholder_1 = __importDefault(require("../Placeholder/Placeholder"));
exports.default = {
    title: "Template",
};
exports.FullWidthTemplate = () =>
    React.createElement(
        "div",
        { className: bem_1.default("layout-container") },
        React.createElement(
            "header",
            { className: bem_1.default("header") },
            React.createElement(Placeholder_1.default, null, "Header")
        ),
        React.createElement(
            "main",
            { className: "main" },
            React.createElement(
                "div",
                { className: "content-header" },
                React.createElement(Placeholder_1.default, null, "Hero")
            ),
            React.createElement(
                "div",
                { className: "content-top" },
                React.createElement(Placeholder_1.default, null, "Content Top")
            ),
            React.createElement(
                "div",
                { className: "content-primary" },
                React.createElement(Placeholder_1.default, null, "Main Content")
            )
        ),
        React.createElement(
            "footer",
            { className: bem_1.default("footer") },
            React.createElement(Placeholder_1.default, null, "Footer")
        )
    );
exports.LeftSidebarTemplate = () =>
    React.createElement(
        "div",
        { className: bem_1.default("layout-container") },
        React.createElement(
            "header",
            { className: bem_1.default("header") },
            React.createElement(Placeholder_1.default, null, "Header")
        ),
        React.createElement(
            "main",
            { className: bem_1.default("main", ["with-sidebar"]) },
            React.createElement(
                "div",
                { className: "content-header" },
                React.createElement(Placeholder_1.default, null, "Hero")
            ),
            React.createElement(
                "div",
                { className: "content-top" },
                React.createElement(Placeholder_1.default, null, "Content Top")
            ),
            React.createElement(
                "div",
                {
                    className: bem_1.default("content-secondary", [
                        "with-sidebar-left",
                    ]),
                },
                React.createElement(Placeholder_1.default, null, "Left Sidebar")
            ),
            React.createElement(
                "div",
                {
                    className: bem_1.default("content-primary", [
                        "with-sidebar-left",
                    ]),
                },
                React.createElement(Placeholder_1.default, null, "Main Content")
            )
        ),
        React.createElement(
            "footer",
            { className: bem_1.default("footer", ["with-sidebar"]) },
            React.createElement(Placeholder_1.default, null, "Footer")
        )
    );
exports.RightSidebarTemplate = () =>
    React.createElement(
        "div",
        { className: bem_1.default("layout-container") },
        React.createElement(
            "header",
            { className: bem_1.default("header") },
            React.createElement(Placeholder_1.default, null, "Header")
        ),
        React.createElement(
            "main",
            { className: bem_1.default("main", ["with-sidebar"]) },
            React.createElement(
                "div",
                { className: "content-header" },
                React.createElement(Placeholder_1.default, null, "Hero")
            ),
            React.createElement(
                "div",
                { className: "content-top" },
                React.createElement(Placeholder_1.default, null, "Content Top")
            ),
            React.createElement(
                "div",
                {
                    className: bem_1.default("content-primary", [
                        "with-sidebar-right",
                    ]),
                },
                React.createElement(Placeholder_1.default, null, "Main Content")
            ),
            React.createElement(
                "div",
                {
                    className: bem_1.default("content-secondary", [
                        "with-sidebar-right",
                    ]),
                },
                React.createElement(
                    Placeholder_1.default,
                    null,
                    "Right Sidebar"
                )
            )
        ),
        React.createElement(
            "footer",
            { className: bem_1.default("footer", ["with-sidebar"]) },
            React.createElement(Placeholder_1.default, null, "Footer")
        )
    );
