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
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
function isTextBreadcrumb(obj) {
    return typeof obj.url === "string";
}
let Breadcrumbs = /** @class */ (() => {
    class Breadcrumbs extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            const { breadcrumbs } = this.props;
            let breadcrumbs__base_class = "breadcrumbs";
            let breadcrumbItems = [];
            if (!breadcrumbs || breadcrumbs.length === 0) {
                throw new Error(
                    "Breadcrumbs must contain a set of links. Breadcrumbs currently empty"
                );
            }
            breadcrumbs.forEach((item, index) => {
                let last = index === breadcrumbs.length - 1;
                let linkComponent;
                if (isTextBreadcrumb(item)) {
                    linkComponent = item.url
                        ? React.createElement(
                              "a",
                              {
                                  href: item.url,
                                  className: bem_1.default(
                                      "link",
                                      [],
                                      breadcrumbs__base_class
                                  ),
                              },
                              item.text
                          )
                        : item.text;
                } else {
                    let props = {
                        className: bem_1.default(
                            "link",
                            [],
                            breadcrumbs__base_class
                        ),
                    };
                    linkComponent = React.createElement(
                        item.type,
                        Object.assign(Object.assign({}, props), item.props),
                        item.props.children
                    );
                }
                breadcrumbItems.push(
                    React.createElement(
                        "li",
                        {
                            key: `${breadcrumbs__base_class}-${index}`,
                            className: bem_1.default(
                                "item",
                                [],
                                breadcrumbs__base_class
                            ),
                        },
                        last &&
                            React.createElement(Icon_1.default, {
                                name: "arrow_xsmall",
                                blockName: breadcrumbs__base_class,
                                modifiers: ["small"],
                                decorative: true,
                            }),
                        linkComponent
                    )
                );
            });
            return React.createElement(
                "nav",
                {
                    className: bem_1.default(breadcrumbs__base_class),
                    role: "navigation",
                    "aria-label": "Breadcrumbs",
                },
                React.createElement(
                    "ul",
                    {
                        className: bem_1.default(
                            "list",
                            [],
                            breadcrumbs__base_class
                        ),
                    },
                    breadcrumbItems
                )
            );
        }
    }
    Breadcrumbs.defaultProps = {};
    return Breadcrumbs;
})();
exports.default = Breadcrumbs;
