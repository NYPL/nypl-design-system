"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { content, className, type, disabled, mouseDown, callback } = _a, rest = __rest(_a, ["content", "className", "type", "disabled", "mouseDown", "callback"]);
        let btnContent = content || "Submit";
        let btnClassName = `button${className ? ` ${className}` : ""}`;
        let btnProps = {
            type: (type || "submit"),
            className: btnClassName,
            disabled: (disabled || null),
        };
        let btnCallback = mouseDown ? { onMouseDown: callback } : { onClick: callback };
        return React.createElement("button", Object.assign(Object.assign(Object.assign({}, btnProps), btnCallback), rest), btnContent);
    }
}
exports.default = Button;
Button.defaultProps = {
    mouseDown: false
};
