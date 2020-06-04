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
exports.modal = void 0;
const React = __importStar(require("react"));
const Container_1 = __importDefault(require("../Container/Container"));
const Button_1 = __importDefault(require("../Button/Button"));
const Modal_1 = __importDefault(require("./Modal"));
exports.default = {
    title: "Modal",
    component: Modal_1.default,
};
class ModalStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ isModalOpen: true });
    }
    closeModal() {
        this.setState({ isModalOpen: false });
    }
    render() {
        return React.createElement(
            Container_1.default,
            null,
            React.createElement(
                Button_1.default,
                { id: "1", callback: this.openModal },
                "Open Modal"
            ),
            this.state.isModalOpen &&
                React.createElement(
                    Modal_1.default,
                    null,
                    React.createElement(
                        Button_1.default,
                        { id: "2", callback: this.closeModal },
                        "Close Modal"
                    )
                )
        );
    }
}
exports.modal = () => {
    return React.createElement(ModalStory, null);
};
