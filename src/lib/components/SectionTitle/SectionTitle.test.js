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
const SectionTitle_1 = __importDefault(require("./SectionTitle"));
describe("Section Title", () => {
    it("Shows SectionTitle with link", () => {
        let mounted = Enzyme.mount(
            React.createElement(SectionTitle_1.default, {
                id: "test-section-title",
                headingText: "Heading 1",
                linkUrl: "#heading2",
            })
        );
        chai_1.expect(mounted.find("h2")).to.have.lengthOf(1);
        chai_1.expect(mounted.find("a")).to.have.lengthOf(1);
    });
    it("Shows SectionTitle without link", () => {
        let mounted = Enzyme.mount(
            React.createElement(SectionTitle_1.default, {
                id: "test-section-title",
                headingText: "Heading 1",
            })
        );
        chai_1.expect(mounted.find("h2")).to.have.lengthOf(1);
    });
    it("SectionTitle throws error when text is too long", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(SectionTitle_1.default, {
                        id: "test-section-title",
                        headingText:
                            "Cupcake ipsum dolor sit amet. Lemon drops pie jelly beans topping jelly-o caramels cake tiramisu powder.",
                    })
                )
            )
            .to.throw(
                "Section Title (h2) Text must be fewer than 80 characters"
            );
    });
});
