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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ----------------------------------------------------------------------------- Dependencies
import { createRef, PureComponent } from 'react';
import * as React from 'react';
import { styled, classNames, getPrimaryTouch, getPositionInElement } from 'utils';
import { styles } from './styles.jss';
var ANIMATION_DURATION_LIFELINE_TIMEOUT = 2000;
// ----------------------------------------------------------------------------- Implementation
var Ripple = /** @class */ (function (_super) {
    __extends(Ripple, _super);
    function Ripple(props) {
        var _this = _super.call(this, props) || this;
        // ----------------------------------------------------------------------------- Event handler functions
        _this.applyRippleHandler = function (event) {
            var parent = _this.elementRef.current.parentElement;
            parent.classList.remove(_this.props.classes.rippleActive);
            parent.classList.remove(_this.props.classes.rippleWillChange);
            requestAnimationFrame(function () { return _this.applyRipple(event); });
        };
        _this.elementRef = createRef();
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Ripple.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, classes = _a.classes;
        return (React.createElement("div", __assign({ className: classNames(classes.root, className), onMouseDown: this.applyRippleHandler, onTouchStart: this.applyRippleHandler }, this.props),
            React.createElement("div", { className: classes.ripple, ref: this.elementRef },
                React.createElement("div", { className: classes.rippleElement })),
            children));
    };
    Ripple.prototype.applyRipple = function (event) {
        var parentElement = this.elementRef.current.parentElement;
        if (this.props.position !== 'relative') {
            var touch = getPrimaryTouch(event);
            var position = {
                clientX: touch.clientX,
                clientY: touch.clientY,
            };
            var _a = getPositionInElement(this.elementRef.current.parentElement, position), x = _a.x, y = _a.y;
            this.elementRef.current.style.transform = "translate(" + x + "px, " + y + "px)";
        }
        this.registerReset(parentElement);
    };
    Ripple.prototype.registerReset = function (parentElement) {
        var _this = this;
        var resetTransitionHandler = function () {
            parentElement.classList.remove(_this.props.classes.rippleActive);
            parentElement.addEventListener('transitionend', resetTransitionHandler);
        };
        parentElement.addEventListener('transitionend', resetTransitionHandler);
        // In case the touchend gets stuck
        setTimeout(resetTransitionHandler, ANIMATION_DURATION_LIFELINE_TIMEOUT);
        parentElement.classList.add(this.props.classes.rippleWillChange);
        requestAnimationFrame(function () { return parentElement.classList.add(_this.props.classes.rippleActive); });
    };
    Ripple = __decorate([
        styled(styles)
    ], Ripple);
    return Ripple;
}(PureComponent));
export { Ripple };
//# sourceMappingURL=index.js.map