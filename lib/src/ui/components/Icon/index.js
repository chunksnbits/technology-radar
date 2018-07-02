"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var react_1 = require("react");
var React = require("react");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
var iconSrc = require("public/icon.symbols.svg");
// ----------------------------------------------------------------------------- Implementation
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Icon.prototype.render = function () {
        var size = this.isNumberLike(this.props.size) ? this.props.size + "px" : this.props.size;
        return (React.createElement("svg", { className: dom_1.classNames('c-icon', this.props.className), xmlns: 'http://www.w3.org/2000/svg', style: {
                width: size,
                height: size
            }, preserveAspectRatio: 'xMidYMin', viewBox: '0 0 24 24' },
            React.createElement("use", { xlinkHref: iconSrc + "#" + this.props.name })));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    Icon.prototype.isNumberLike = function (value) {
        return !isNaN(Number(value));
    };
    return Icon;
}(react_1.PureComponent));
exports.Icon = Icon;
//# sourceMappingURL=index.js.map