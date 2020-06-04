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
exports.DigitalResearchBooksHeader = exports.ExhibitionsHero = exports.heroStaffPicks = exports.heroSecondary = exports.heroPrimary = void 0;
const React = __importStar(require("react"));
const Image_1 = __importDefault(require("../Image/Image"));
const Heading_1 = __importDefault(require("../Heading/Heading"));
const BodyText_1 = __importDefault(require("../BodyText/BodyText"));
const HeroTypes_1 = require("./HeroTypes");
const Hero_1 = __importDefault(require("./Hero"));
const SectionName_1 = __importDefault(require("../SectionName/SectionName"));
const Placeholder_1 = __importDefault(require("../Placeholder/Placeholder"));
exports.default = {
    title: "Hero",
    component: Hero_1.default,
};
exports.heroPrimary = () =>
    React.createElement(Hero_1.default, {
        heroType: HeroTypes_1.HeroTypes.Primary,
        heading: React.createElement(Heading_1.default, {
            level: 1,
            id: "1",
            text: "Hero Primary",
            blockName: "hero",
        }),
        backgroundImageSrc: "https://placeimg.com/1600/800/arch",
    });
exports.heroSecondary = () =>
    React.createElement(Hero_1.default, {
        heroType: HeroTypes_1.HeroTypes.Secondary,
        heading: React.createElement(Heading_1.default, {
            level: 1,
            id: "1",
            text: "Hero Secondary",
            blockName: "hero",
        }),
        subHeaderText: React.createElement(
            BodyText_1.default,
            { blockName: "hero" },
            "Example subtitle"
        ),
        image: React.createElement(Image_1.default, {
            src: "https://placeimg.com/800/400/arch",
            isDecorative: true,
            imageBlockname: "hero",
        }),
    });
exports.heroStaffPicks = () =>
    React.createElement(Hero_1.default, {
        heroType: HeroTypes_1.HeroTypes.Primary,
        heading: React.createElement(Heading_1.default, {
            level: 1,
            id: "1",
            text: "Staff Picks",
            blockName: "hero",
        }),
        subHeaderText: React.createElement(
            BodyText_1.default,
            { blockName: "hero" },
            "Nobody loves books more than our experts. Browse and filter hundreds of their favorites. Want more suggestions? Check out",
            " ",
            React.createElement("a", { href: "#etc" }, "Best Books"),
            " and",
            " ",
            React.createElement("a", { href: "#etc2" }, "125 Books We Love"),
            "."
        ),
        foregroundColor: "#ffffff",
        backgroundColor: "#bb1d12",
        backgroundImageSrc: "https://placeimg.com/1600/800/arch",
    });
exports.ExhibitionsHero = () =>
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
        backgroundColor: "#0071ce",
        backgroundImageSrc:
            "https://p24.f4.n0.cdn.getcloudapp.com/items/NQuDO4xO/index.jpeg?v=d49888fbe420dd2fd163adc2ad0cdac6",
    });
exports.DigitalResearchBooksHeader = () =>
    React.createElement(
        SectionName_1.default,
        null,
        React.createElement(Hero_1.default, {
            heroType: HeroTypes_1.HeroTypes.Secondary,
            heading: React.createElement(Heading_1.default, {
                level: 1,
                id: "1",
                text: "ResearchNow",
                blockName: "hero",
            }),
            subHeaderText: React.createElement(
                BodyText_1.default,
                { blockName: "hero" },
                "The internet\u2019s search engine for research collections and e-books you can use right now. Powered by the New York Public Library."
            ),
            image: React.createElement(Image_1.default, {
                src: "https://placeimg.com/200/100/arch",
                isDecorative: true,
                imageBlockname: "hero",
            }),
        })
    );
