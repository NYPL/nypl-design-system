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
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const bem_1 = __importDefault(require("../../utils/bem"));
const he = __importStar(require("he"));
// TODO: This does not work in SFR
// if HTML is invalid, throw an error.
// This checker is excessively strict because it should only be set by internal engineers.
// Please do not pass user inputs into <BodyText> before first formatting it.
function checkHTML(node) {
    let html = server_1.default.renderToString(node);
    let doc = document.createElement("div");
    doc.innerHTML = html;
    if (doc.innerHTML !== he.decode(html)) {
        throw new Error(
            "Invalid HTML.  Please validate HTML and make sure all tags are closed before passing it into BodyText"
        );
    }
}
function validateCharCount(node, warnChar, maxChar) {
    if (!maxChar) return;
    let html = he.decode(server_1.default.renderToString(node));
    let doc = document.createElement("div");
    doc.innerHTML = html;
    if (warnChar && doc.textContent.length >= warnChar) {
        console.warn(
            "Body Text should be fewer than " + warnChar + " characters"
        );
    }
    if (doc.textContent.length >= maxChar) {
        throw new Error(
            "Body text must be fewer than " + maxChar + " characters"
        );
    }
}
// Check if any element is a string by itself, rather than wrapped in tags
function hasString(node) {
    return (
        React.Children.map(node, (child) => {
            if (!child.type) {
                return child;
            }
        }).length > 0
    );
}
function BodyText(props) {
    const { bodyContent, warnchar, maxchar, modifiers, blockName } = props,
        rest = __rest(props, [
            "bodyContent",
            "warnchar",
            "maxchar",
            "modifiers",
            "blockName",
        ]);
    const baseClass = "body-text";
    let passedInContent = bodyContent ? bodyContent : props.children;
    // validateCharCount(passedInContent, warnchar, maxchar);
    // checkHTML(passedInContent);
    let content = hasString(passedInContent)
        ? React.createElement("p", {}, passedInContent)
        : passedInContent;
    let bodyProps = {
        className: bem_1.default(baseClass, modifiers, blockName),
    };
    return React.createElement(
        "div",
        Object.assign(Object.assign({}, bodyProps), rest),
        content
    );
}
exports.default = BodyText;
