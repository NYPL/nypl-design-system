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
exports.pagination = void 0;
const React = __importStar(require("react"));
const addon_actions_1 = require("@storybook/addon-actions");
const Pagination_1 = __importDefault(require("./Pagination"));
exports.default = {
    title: "Pagination",
    component: Pagination_1.default,
};
exports.pagination = () =>
    React.createElement(Pagination_1.default, {
        paginationDropdownOptions: ["1 of 4", "2 of 4", "3 of 4", "4 of 4"],
        previousPageHandler: addon_actions_1.action("goToPrevious"),
        nextPageHandler: addon_actions_1.action("goToNext"),
        currentValue: "1 of 4",
        onSelectChange: addon_actions_1.action("selectChange"),
        onSelectBlur: addon_actions_1.action("selectBlur"),
    });
