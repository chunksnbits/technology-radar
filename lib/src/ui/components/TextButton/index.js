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
// ----------------------------------------------------------------------------- Implementation
var TextButton = /** @class */ (function (_super) {
    __extends(TextButton, _super);
    function TextButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TextButton.prototype.render = function () {
        var modifiers = [];
        return (React.createElement("button", { className: dom_1.classNames.apply(void 0, ['c-text-button', this.props.className].concat(modifiers)), onClick: this.props.onClick }, this.props.children));
    };
    return TextButton;
}(react_1.PureComponent));
exports.TextButton = TextButton;
//# sourceMappingURL=index.js.map