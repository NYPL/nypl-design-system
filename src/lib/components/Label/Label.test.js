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
const Label_1 = __importDefault(require("./Label"));
describe("Label Test", () => {
    let wrapper;
    it("Renders a <label> when passed text as children", () => {
        wrapper = Enzyme.shallow(
            React.createElement(
                Label_1.default,
                { id: "label", referenceId: "so-lonely" },
                "Cupcake's"
            )
        );
        chai_1.expect(wrapper.find("label")).to.have.lengthOf(1);
    });
    it("Renders a <label> when passed element as children", () => {
        wrapper = Enzyme.shallow(
            React.createElement(
                Label_1.default,
                { id: "label", referenceId: "so-lonely" },
                React.createElement("span", null, "Cupcakes")
            )
        );
        chai_1.expect(wrapper.find("label")).to.have.lengthOf(1);
    });
});
