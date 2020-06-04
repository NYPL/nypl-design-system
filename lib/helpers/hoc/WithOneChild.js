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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
/**
 * Wrapper component to verify that a component only has one child.
 * @param Component Component to test, either a React element
 *   or an object element.
 */
const withOneChild = (Component) => (_a) => {
    var initProps = __rest(_a, []);
    // It's more likely that the component passed will be a
    // React element so set these as default.
    let componentChildren = initProps.children;
    let componentToRender = Component;
    let name = Component.name;
    let props = initProps;
    // In case the component is an object!
    // E.g, a component passed as a prop.
    if (Component && typeof Component === "object") {
        componentChildren = Component.props.children;
        name = Component.type;
        props = Component.props;
        componentToRender = Component.type;
    }
    // If the passed component is a string, wrap it in a fragment.
    if (componentChildren && typeof componentChildren === "string") {
        componentChildren = React.createElement(
            React.Fragment,
            null,
            componentChildren
        );
    } else if (componentChildren && typeof componentChildren !== "string") {
        // Otherwise, it is a React element but
        // check that it's only one element.
        try {
            React.Children.only(componentChildren);
        } catch (e) {
            const children = React.Children.map(
                componentChildren,
                (child) => child.type
            );
            // Catch the error and return a new one with the wrapper
            // component's name for better debugging.
            throw new Error(
                "Please only pass one child, got elements " +
                    `(${
                        children ? children.join(", ") : ""
                    }), for base component ${name}`
            );
        }
    }
    return React.createElement(componentToRender, props, props.children);
};
exports.default = withOneChild;
