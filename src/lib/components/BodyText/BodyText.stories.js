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
exports.truncatedText = exports.textWithHeading = exports.textWithUnorderedList = exports.textWithOrderedList = exports.textWithItalic = exports.textWithBold = exports.textWithLink = exports.text = void 0;
const React = __importStar(require("react"));
const BodyText_1 = __importDefault(require("./BodyText"));
exports.default = {
    title: "BodyText",
    component: BodyText_1.default,
};
exports.text = () =>
    React.createElement(
        BodyText_1.default,
        null,
        "Souffl\u00E9 jujubes cupcake chocolate bar topping. Lollipop sesame snaps tootsie roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah. Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate tiramisu marshmallow. Jujubes powder drag\u00E9e caramels wafer apple pie bear claw apple pie."
    );
exports.textWithLink = () =>
    React.createElement(
        BodyText_1.default,
        null,
        "Souffl\u00E9 jujubes chocolate bar topping. Lollipop sesame snaps tootsie roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah. Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate tiramisu marshmallow. Jujubes powder drag\u00E9e caramels wafer",
        " ",
        React.createElement("a", { href: "#apple-pie" }, "apple pie"),
        " bear claw apple pie."
    );
exports.textWithBold = () =>
    React.createElement(
        BodyText_1.default,
        null,
        "Souffl\u00E9 jujubes chocolate bar topping. Lollipop sesame snaps tootsie roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah. Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate tiramisu marshmallow. Jujubes powder drag\u00E9e caramels wafer",
        " ",
        React.createElement("b", null, "apple pie"),
        " bear claw apple pie."
    );
exports.textWithItalic = () =>
    React.createElement(
        BodyText_1.default,
        null,
        "Souffl\u00E9 jujubes chocolate bar topping. Lollipop sesame snaps tootsie roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah. Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate tiramisu marshmallow. Jujubes powder drag\u00E9e caramels wafer",
        " ",
        React.createElement("i", null, "apple pie"),
        " bear claw apple pie."
    );
exports.textWithOrderedList = () =>
    React.createElement(
        BodyText_1.default,
        null,
        "Souffl\u00E9 jujubes chocolate bar topping.",
        " ",
        React.createElement(
            "ol",
            null,
            React.createElement("li", null, "Lollipop"),
            React.createElement("li", null, "sesame snaps"),
            " ",
            React.createElement("li", null, "tootsie roll")
        ),
        " ",
        "liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah. Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate tiramisu marshmallow. Jujubes powder drag\u00E9e caramels wafer apple pie bear claw apple pie."
    );
exports.textWithUnorderedList = () =>
    React.createElement(
        BodyText_1.default,
        null,
        "Souffl\u00E9 jujubes chocolate bar topping.",
        " ",
        React.createElement(
            "ul",
            null,
            React.createElement("li", null, "Lollipop"),
            React.createElement("li", null, "sesame snaps"),
            " ",
            React.createElement("li", null, "tootsie roll")
        ),
        " ",
        "liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah. Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate tiramisu marshmallow. Jujubes powder drag\u00E9e caramels wafer apple pie bear claw apple pie."
    );
exports.textWithHeading = () =>
    React.createElement(
        BodyText_1.default,
        null,
        React.createElement("h2", null, "Souffl\u00E9"),
        React.createElement("h3", null, "jujubes"),
        React.createElement("h4", null, "chocolate bar"),
        React.createElement("h5", null, "topping"),
        React.createElement("h6", null, "Lollipop")
    );
exports.truncatedText = () =>
    React.createElement(
        BodyText_1.default,
        { maxchar: 2 },
        "Souffl\u00E9 jujubes chocolate bar topping. Lollipop sesame snaps tootsie roll liquorice sweet chupa chups. Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping. Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears. Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum. Sweet sesame snaps cookie toffee. Tart muffin bonbon jelly halvah jelly. Macaroon cake caramels jujubes macaroon lemon drops. Chocolate cake pie halvah. Macaroon lemon drops tiramisu chocolate bar jujubes tootsie roll apple pie. Icing sesame snaps pastry caramels muffin donut. Cake chocolate tiramisu marshmallow. Jujubes powder drag\u00E9e caramels wafer apple pie bear claw apple pie."
    );
