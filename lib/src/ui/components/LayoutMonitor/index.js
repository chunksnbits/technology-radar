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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, createRef } from 'react';
import * as React from 'react';
import { classNames, canUseDOM, debounce, consume, offsetRoot } from 'utils';
import { LayoutContext } from 'store';
import { LAYOUT_BASE_CLASS, LAYOUT_CLASSES } from '../Styles';
// ----------------------------------------------------------------------------- Implementation
var LayoutMonitor = /** @class */ (function (_super) {
    __extends(LayoutMonitor, _super);
    function LayoutMonitor(props) {
        var _this = _super.call(this, props) || this;
        // ----------------------------------------------------------------------------- Helpers methods
        _this.windowResizeHandler = function () {
            debounce('layout-monitor', function () {
                _this.props.setActiveBreakpoint(_this.detectActiveBreakpoint(_this.getScreenSize(), _this.props.breakpoints));
                _this.props.setDeviceOrientation(_this.detectOrientation());
            });
        };
        _this.elementRef = createRef();
        return _this;
    }
    LayoutMonitor.prototype.componentWillUnmount = function () {
        if (canUseDOM()) {
            window.removeEventListener('resize', this.windowResizeHandler);
        }
    };
    LayoutMonitor.prototype.componentDidMount = function () {
        if (canUseDOM()) {
            window.addEventListener('resize', this.windowResizeHandler);
        }
        this.windowResizeHandler();
    };
    // ----------------------------------------------------------------------------- Lifecycle methods
    LayoutMonitor.prototype.render = function () {
        var _a = this.props, activeBreakpoint = _a.activeBreakpoint, children = _a.children;
        return (React.createElement("div", { ref: this.elementRef, className: classNames(LAYOUT_BASE_CLASS, LAYOUT_CLASSES[activeBreakpoint]) }, children));
    };
    LayoutMonitor.prototype.getScreenSize = function () {
        if (!canUseDOM() || !Boolean(this.elementRef.current)) {
            return null;
        }
        var root = offsetRoot(this.elementRef.current);
        return {
            width: root.clientWidth || root.innerWidth,
            height: root.clientHeight || root.innerWidth,
        };
    };
    LayoutMonitor.prototype.detectActiveBreakpoint = function (screenSizes, layout) {
        if (!Boolean(screenSizes) || !Boolean(layout)) {
            return 'medium';
        }
        var width = screenSizes.width;
        if (width < layout.medium) {
            return 'small';
        }
        else if (width < layout.large) {
            return 'medium';
        }
        else {
            return 'large';
        }
    };
    LayoutMonitor.prototype.detectOrientation = function () {
        if (!canUseDOM()) {
            return 'landscape';
        }
        return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    };
    LayoutMonitor = __decorate([
        consume(LayoutContext, {
            select: [
                'activeBreakpoint',
                'breakpoints',
                'orientation',
                'setActiveBreakpoint',
                'setDeviceOrientation',
            ],
        })
    ], LayoutMonitor);
    return LayoutMonitor;
}(PureComponent));
export { LayoutMonitor };
//# sourceMappingURL=index.js.map