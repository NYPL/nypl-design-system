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
// OH-30 Header with Image Right
const React = __importStar(require("react"));
const bem_1 = __importDefault(require("../../utils/bem"));
const HeroTypes_1 = require("./HeroTypes");
function Hero(props) {
    const heroBaseClass = "hero";
    let {
        heroType,
        heading,
        subHeaderText,
        locationDetails,
        foregroundColor,
        backgroundColor,
        backgroundImageSrc,
        image,
    } = props;
    let heroModifiers;
    if (heroType === HeroTypes_1.HeroTypes.Primary) {
        heroModifiers = ["primary"];
    } else if (heroType === HeroTypes_1.HeroTypes.Secondary) {
        heroModifiers = ["secondary"];
    }
    if (heroType === HeroTypes_1.HeroTypes.Primary && !backgroundImageSrc) {
        throw new Error(`backgroundImageSrc required on PRIMARY heroTypes`);
    }
    if (backgroundImageSrc && image) {
        throw new Error(
            `Please only either backgroundImageSrc or image into Hero, got both`
        );
    }
    if (heroType !== HeroTypes_1.HeroTypes.Primary && locationDetails) {
        throw new Error(
            `Please provide locationDetails only to PRIMARY heroTypes`
        );
    }
    let backgroundImageStyle = backgroundImageSrc
        ? { backgroundImage: "url(" + backgroundImageSrc + ")" }
        : {};
    let contentBoxStyling = {};
    if (heroType === HeroTypes_1.HeroTypes.Primary) {
        if (foregroundColor && backgroundColor) {
            contentBoxStyling = {
                color: foregroundColor,
                backgroundColor: backgroundColor,
            };
        } else if (foregroundColor || backgroundColor) {
            let receivedColor = foregroundColor
                ? "foregroundColor"
                : "backgroundColor";
            throw new Error(
                `Please provide both foregroundColor and backgroundColor to Hero, only got ` +
                    receivedColor
            );
        }
    } else {
        if (foregroundColor || backgroundColor) {
            throw new Error(
                `Received foregroundColor and/or backgroundColor, but these are only accepted on HeroTypes.Primary`
            );
        }
    }
    return React.createElement(
        "div",
        {
            className: bem_1.default(heroBaseClass, heroModifiers),
            "data-responsive-background-image": true,
            style: backgroundImageStyle,
        },
        React.createElement(
            "div",
            {
                className: bem_1.default("content", [], heroBaseClass),
                style: contentBoxStyling,
            },
            heading,
            image,
            subHeaderText
        ),
        locationDetails
    );
}
exports.default = Hero;
