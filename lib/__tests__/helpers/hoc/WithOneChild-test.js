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
const WithOneChild_1 = __importDefault(
    require("../../../helpers/hoc/WithOneChild")
);
const BasicLink_1 = __importDefault(
    require("../../../components/BasicLink/BasicLink")
);
class DummyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement("h1", null, this.props.title),
            React.createElement("h2", null, this.props.age),
            this.props.children
        );
    }
}
describe("withOneChild HOC", () => {
    let wrapper;
    // This DummyComponent can take as many children that are passed
    // and render them.
    it("should only modify components when used", () => {
        const multipleChildrenDummy = React.createElement(
            DummyComponent,
            { title: "Wizard", age: "old" },
            React.createElement("p", null, "Gandalf"),
            React.createElement("p", null, "The White")
        );
        wrapper = Enzyme.mount(multipleChildrenDummy);
        chai_1.expect(wrapper.find("p")).to.have.lengthOf(2);
        chai_1.expect(wrapper.prop("title")).to.equal("Wizard");
        chai_1.expect(wrapper.prop("age")).to.equal("old");
    });
    it("should modify the original component to allow one child as a string", () => {
        // Use the higher-order component to restrict to have only one child:
        const DummyComponentOneChild = WithOneChild_1.default(DummyComponent);
        let singleChildDummy = React.createElement(
            DummyComponentOneChild,
            { title: "Elf", age: "old" },
            "Legolas"
        );
        try {
            wrapper = Enzyme.mount(singleChildDummy);
        } catch (e) {
            // This shouldn't run since no error is thrown.
            chai_1.expect(false).to.equal(true);
        }
        // The text of the component doesn't include spaces in the test.
        chai_1.expect(wrapper.text()).to.equal("ElfoldLegolas");
        // Make sure that any props passed propagate correctly.
        chai_1.expect(wrapper.prop("title")).to.equal("Elf");
        chai_1.expect(wrapper.prop("age")).to.equal("old");
    });
    it("should modify the original component to allow one child as a component", () => {
        const DummyComponentOneChild = WithOneChild_1.default(DummyComponent);
        let singleChildDummy = React.createElement(
            DummyComponentOneChild,
            { title: "Wizard", age: "old" },
            React.createElement("p", null, "Saruman")
        );
        try {
            wrapper = Enzyme.mount(singleChildDummy);
        } catch (e) {
            // This shouldn't run since no error is thrown.
            chai_1.expect(false).to.equal(true);
        }
        chai_1.expect(wrapper.find("p")).to.have.lengthOf(1);
        chai_1.expect(wrapper.find("p").text()).to.equal("Saruman");
        chai_1.expect(wrapper.prop("title")).to.equal("Wizard");
        chai_1.expect(wrapper.prop("age")).to.equal("old");
    });
    it("should throw an error if more than one child is passed", () => {
        const DummyComponentOneChild = WithOneChild_1.default(DummyComponent);
        let singleChildDummy = React.createElement(
            DummyComponentOneChild,
            { title: "Hobbit", age: "very old" },
            React.createElement("p", null, "Bilbo"),
            React.createElement("p", null, "Baggins")
        );
        try {
            wrapper = Enzyme.mount(singleChildDummy);
            // This shouldn't run since an error is thrown
            chai_1.expect(false).to.equal(true);
        } catch (e) {
            chai_1
                .expect(e.message)
                .to.equal(
                    "Please only pass one child, " +
                        "got elements (p, p), for base component DummyComponent"
                );
        }
    });
    describe("BasicLink as implementation", () => {
        it("should only allow one child", () => {
            const basicLink = React.createElement(
                BasicLink_1.default,
                { className: "passed-in-class" },
                React.createElement(
                    "a",
                    { href: "#passed-in-link" },
                    "Click me"
                )
            );
            const wrongBasicLink = React.createElement(
                BasicLink_1.default,
                { className: "passed-in-class" },
                React.createElement(
                    "a",
                    { href: "#passed-in-link" },
                    "Don't click me"
                ),
                React.createElement("p", null, "Nope")
            );
            wrapper = Enzyme.mount(basicLink);
            chai_1
                .expect(wrapper.find("a").prop("href"))
                .to.equal("#passed-in-link");
            chai_1.expect(wrapper.find("a").text()).to.equal("Click me");
            chai_1.expect(wrapper.children).to.have.lengthOf(1);
            try {
                wrapper = Enzyme.mount(wrongBasicLink);
                // This shouldn't run since an error is thrown
                chai_1.expect(false).to.equal(true);
            } catch (e) {
                chai_1
                    .expect(e.message)
                    .to.equal(
                        "Please only pass one child, " +
                            "got elements (a, p), for base component BasicLinkBase"
                    );
            }
        });
    });
});
