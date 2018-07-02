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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var react_1 = require("react");
var React = require("react");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
var ANIMATION_DURATION_LIFELINE_TIMEOUT = 2000;
// ----------------------------------------------------------------------------- Implementation
var Ripple = /** @class */ (function (_super) {
    __extends(Ripple, _super);
    function Ripple(props) {
        var _this = _super.call(this, props) || this;
        // ----------------------------------------------------------------------------- Event handler functions
        _this.applyRippleHandler = function (event) {
            var parent = _this.elementRef.current.parentElement;
            parent.classList.remove('c-ripple--active');
            parent.classList.remove('c-ripple--will-change');
            requestAnimationFrame(function () { return _this.applyRipple(event); });
        };
        _this.elementRef = react_1.createRef();
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Ripple.prototype.render = function () {
        var modifiers = [
            "c-ripple--" + (this.props.position || 'exact')
        ];
        return (React.createElement("div", __assign({ className: dom_1.classNames.apply(void 0, ['c-ripple', this.props.className].concat(modifiers)), onMouseDown: this.applyRippleHandler, onTouchStart: this.applyRippleHandler }, this.props),
            React.createElement("div", { className: 'c-ripple__ripple', ref: this.elementRef },
                React.createElement("div", { className: 'c-ripple__element' })),
            this.props.children));
    };
    Ripple.prototype.applyRipple = function (event) {
        var parentElement = this.elementRef.current.parentElement;
        if (this.props.position !== 'relative') {
            var touch = dom_1.getPrimaryTouch(event);
            var position = {
                clientX: touch.clientX,
                clientY: touch.clientY,
            };
            var _a = dom_1.getPositionInElement(this.elementRef.current.parentElement, position), x = _a.x, y = _a.y;
            this.elementRef.current.style.transform = "translate(" + x + "px, " + y + "px)";
        }
        this.registerReset(parentElement);
    };
    Ripple.prototype.registerReset = function (parentElement) {
        var resetTransitionHandler = function () {
            parentElement.classList.remove('c-ripple--active');
            parentElement.addEventListener('transitionend', resetTransitionHandler);
        };
        parentElement.addEventListener('transitionend', resetTransitionHandler);
        // In case the touchend gets stuck
        setTimeout(resetTransitionHandler, ANIMATION_DURATION_LIFELINE_TIMEOUT);
        parentElement.classList.add('c-ripple--will-change');
        requestAnimationFrame(function () { return parentElement.classList.add('c-ripple--active'); });
    };
    return Ripple;
}(react_1.PureComponent));
exports.Ripple = Ripple;
//# sourceMappingURL=index.js.map