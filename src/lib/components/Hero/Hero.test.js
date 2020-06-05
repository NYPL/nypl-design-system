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
const Placeholder_1 = __importDefault(require("../Placeholder/Placeholder"));
const Image_1 = __importDefault(require("../Image/Image"));
const Heading_1 = __importDefault(require("../Heading/Heading"));
const HeroTypes_1 = require("./HeroTypes");
const Hero_1 = __importDefault(require("./Hero"));
describe("Hero Test", () => {
    it("Generates a Hero with a background image", () => {
        let wrapper = Enzyme.shallow(
            React.createElement(Hero_1.default, {
                heroType: HeroTypes_1.HeroTypes.Primary,
                heading: React.createElement(Heading_1.default, {
                    level: 1,
                    id: "1",
                    text: "Hero Primary",
                    blockName: "hero",
                }),
                backgroundImageSrc: "https://placeimg.com/1600/800/arch",
            })
        );
        chai_1.expect(wrapper.prop("style")).to.deep.equal({
            backgroundImage: "url(https://placeimg.com/1600/800/arch)",
        });
    });
    it("Generates a Hero with a foreground image", () => {
        let wrapper = Enzyme.shallow(
            React.createElement(Hero_1.default, {
                heroType: HeroTypes_1.HeroTypes.Secondary,
                heading: React.createElement(Heading_1.default, {
                    level: 1,
                    id: "1",
                    text: "Hero Secondary",
                    blockName: "hero",
                }),
                image: React.createElement(Image_1.default, {
                    src: "https://placeimg.com/800/400/arch",
                    isDecorative: true,
                    imageBlockname: "hero",
                }),
            })
        );
        chai_1
            .expect(wrapper.find("Image").dive().find("img"))
            .to.have.lengthOf(1);
    });
    it("On primary hero, background image is required", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Hero_1.default, {
                        heroType: HeroTypes_1.HeroTypes.Primary,
                        heading: React.createElement(Heading_1.default, {
                            level: 1,
                            id: "1",
                            text: "Hero Primary",
                            blockName: "hero",
                        }),
                        image: React.createElement(Image_1.default, {
                            src: "https://placeimg.com/800/400/arch",
                            isDecorative: true,
                            imageBlockname: "hero",
                        }),
                    })
                )
            )
            .to.throw("backgroundImageSrc required on PRIMARY heroTypes");
    });
    it("Throws error if both backgroundImage and foregroundImage are passed", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Hero_1.default, {
                        heroType: HeroTypes_1.HeroTypes.Secondary,
                        heading: React.createElement(Heading_1.default, {
                            level: 1,
                            id: "1",
                            text: "Hero Secondary",
                            blockName: "hero",
                        }),
                        image: React.createElement(Image_1.default, {
                            src: "https://placeimg.com/800/400/arch",
                            isDecorative: true,
                            imageBlockname: "hero",
                        }),
                        backgroundImageSrc:
                            "https://placeimg.com/1600/800/arch",
                    })
                )
            )
            .to.throw(
                "Please only either backgroundImageSrc or image into Hero, got both"
            );
    });
    it("Throws error if locationDetails are based to non-primary hero types", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Hero_1.default, {
                        heroType: HeroTypes_1.HeroTypes.Secondary,
                        heading: React.createElement(Heading_1.default, {
                            level: 1,
                            id: "1",
                            text: "Hero Secondary",
                            blockName: "hero",
                        }),
                        image: React.createElement(Image_1.default, {
                            src: "https://placeimg.com/800/400/arch",
                            isDecorative: true,
                            imageBlockname: "hero",
                        }),
                        locationDetails: React.createElement(
                            Placeholder_1.default,
                            null,
                            "Placeholder for locationDetails, which doesn't exist yet"
                        ),
                    })
                )
            )
            .to.throw(
                "Please provide locationDetails only to PRIMARY heroTypes"
            );
    });
    it("Throws error if only one var is passed between foregroundColor and backgroundColor", () => {
        chai_1
            .expect(() =>
                Enzyme.mount(
                    React.createElement(Hero_1.default, {
                        heroType: HeroTypes_1.HeroTypes.Primary,
                        heading: React.createElement(Heading_1.default, {
                            level: 1,
                            id: "1",
                            text:
                                "Syncretic Vibrations: Exploring the Mosaic of Blackness through the Melville J. and Frances S.Herskovits Collection",
                            blockName: "hero",
                        }),
                        locationDetails: React.createElement(
                            Placeholder_1.default,
                            null,
                            "Placeholder for locationDetails, which doesn't exist yet"
                        ),
                        foregroundColor: "#ffffff",
                        backgroundImageSrc:
                            "https://p24.f4.n0.cdn.getcloudapp.com/items/NQuDO4xO/index.jpeg?v=d49888fbe420dd2fd163adc2ad0cdac6",
                    })
                )
            )
            .to.throw(
                "Please provide both foregroundColor and backgroundColor to Hero, only got foregroundColor"
            );
    });
});
