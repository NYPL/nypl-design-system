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
exports.longHelperText = exports.errorText = exports.helperTextWithLink = void 0;
const React = __importStar(require("react"));
const HelperErrorText_1 = __importDefault(require("./HelperErrorText"));
exports.default = {
    title: "HelperErrorText",
    component: HelperErrorText_1.default,
};
exports.helperTextWithLink = () =>
    React.createElement(
        HelperErrorText_1.default,
        { id: "helperTextWithLink", isError: false },
        "If you're unsure of your size, please view the",
        " ",
        React.createElement("a", { href: "#sizing-chart" }, "Sizing Chart")
    );
exports.errorText = () =>
    React.createElement(
        HelperErrorText_1.default,
        { id: "helpertextWithError", isError: true },
        "Error Message"
    );
exports.longHelperText = () =>
    React.createElement(
        HelperErrorText_1.default,
        { id: "longHelperText", isError: false },
        "Souffl\u00E9 jujubes cupcake chocolate bar topping. Lollipop sesame snaps tootsie roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum."
    );
