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
var react_dom_1 = require("react-dom");
var React = require("react");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
// ----------------------------------------------------------------------------- Implementation
var GlobalBackground = /** @class */ (function (_super) {
    __extends(GlobalBackground, _super);
    function GlobalBackground() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootClassName = 'g-global-background';
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    GlobalBackground.prototype.render = function () {
        if (!dom_1.canUseDOM() || document.getElementById(this.rootClassName) === null) {
            return null;
        }
        var container = document.getElementById('g-global-background');
        container.classList.add("g-global-backgound--" + (this.props.position || 'auto'));
        return react_dom_1.createPortal(this.renderContent(), container);
    };
    // ----------------------------------------------------------------------------- Helpers methods
    GlobalBackground.prototype.renderContent = function () {
        var modifiers = [];
        return (React.createElement("div", { className: dom_1.classNames.apply(void 0, [this.rootClassName, this.props.className].concat(modifiers)) }, this.props.children));
    };
    return GlobalBackground;
}(react_1.PureComponent));
exports.GlobalBackground = GlobalBackground;
//# sourceMappingURL=index.js.map