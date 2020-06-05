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
const chai_1 = require("chai");
const Enzyme = __importStar(require("enzyme"));
const React = __importStar(require("react"));
const HelperErrorText_1 = __importDefault(require("./HelperErrorText"));
describe("HelperErrorText Test", () => {
    it("Renders HelperErrorText", () => {
        const container = Enzyme.mount(
            React.createElement(
                HelperErrorText_1.default,
                { id: "helperTextWithLink", isError: false },
                "Text"
            )
        );
        chai_1.expect(container.exists("#helperTextWithLink")).to.equal(true);
    });
    it("Has 'error' modifier if error is passed", () => {
        const container = Enzyme.mount(
            React.createElement(
                HelperErrorText_1.default,
                { id: "helperTextWithLink", isError: true },
                "Text"
            )
        );
        chai_1.expect(container.exists("#helperTextWithLink")).to.equal(true);
    });
});
