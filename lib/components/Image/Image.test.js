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
const Image_1 = __importDefault(require("./Image"));
describe("Images", () => {
    let wrapper;
    let tooManyChars =
        "UNwbNIp1GFehVO1LBBIFYF6Nv5IhHeCPgW5JHet2VRuuKnKlGxSgjbFcfCbcttVTkxbE7ItibBIuG9cTA9HGntZSKv31u7egV88bIg7DGDHmi2nKq3ssZkBDl7oWfYpyjWbfV4kZx9EDPsKHUTKb2xIKZWSbRMuTUtsJWonQyfitDp8ui1P7QR80LA236yE5fCkRImbltEsqJWEYxyotQpLjFbruJsPcGSCp6ET6DCrNQeWFsRVaM2Co99ewZjLuY42kdpBEXjcw9HPcTjKKZw141sKBNOoFfNMueYaHtNjNI";
    it("Shows Image", () => {
        wrapper = Enzyme.shallow(
            React.createElement(Image_1.default, {
                src: "test.png",
                isDecorative: true,
            })
        );
        chai_1.expect(wrapper.find("img")).to.have.lengthOf(1);
    });
    it("Throws error when meaningful image is passed without alt text", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Image_1.default, {
                        src: "test.png",
                        isDecorative: false,
                    })
                )
            )
            .to.throw("If image is decorative, alt text is required");
    });
    it("Throws error when alt text is too long", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Image_1.default, {
                        src: "test.png",
                        isDecorative: false,
                        altText: tooManyChars,
                    })
                )
            )
            .to.throw("Alt Text must be less than 300 characters");
    });
});
