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
exports.longBreadcrumbs = exports.shortBreadcrumbs = void 0;
const React = __importStar(require("react"));
const Breadcrumbs_1 = __importDefault(require("./Breadcrumbs"));
exports.default = {
    title: "Breadcrumb",
    component: Breadcrumbs_1.default,
};
const shortItems = [
    { url: "#", text: "Parent" },
    { url: "#", text: "Home" },
];
const longItems = [
    { url: "#", text: "Parent" },
    { url: "#", text: "Home" },
    {
        url: "#",
        text:
            "Roast Half And Half Pumpkin Spice Siphon Aroma Ristretto Cinnamon Saucer",
    },
    {
        url: "#",
        text:
            "Roast Half And Half Pumpkin Spice Siphon Aroma Ristretto Cinnamon Saucer",
    },
];
exports.shortBreadcrumbs = () =>
    React.createElement(Breadcrumbs_1.default, { breadcrumbs: shortItems });
exports.longBreadcrumbs = () =>
    React.createElement(Breadcrumbs_1.default, { breadcrumbs: longItems });
