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
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, createContext, createRef } from 'react';
import * as React from 'react';
import { debounce, canUseDOM, offsetRoot, classNames } from 'utils';
export var LayoutProviderContext = createContext({});
export var LAYOUT_BASE_CLASS = 'g-layout';
export var LAYOUT_CLASSES = {
    small: LAYOUT_BASE_CLASS + "--small",
    medium: LAYOUT_BASE_CLASS + "--medium",
    large: LAYOUT_BASE_CLASS + "--large",
};
// ----------------------------------------------------------------------------- Implementation
var LayoutProvider = /** @class */ (function (_super) {
    __extends(LayoutProvider, _super);
    function LayoutProvider(props) {
        var _this = _super.call(this, props) || this;
        // ----------------------------------------------------------------------------- Helpers methods
        _this.windowResizeHandler = function () {
            debounce('app', function () {
                _this.setState(function () { return ({
                    active: _this.detectActiveBreakpoint(_this.getScreenSize(), _this.state.layout),
                }); });
            });
        };
        _this.elementRef = createRef();
        _this.state = {
            layout: props.layout || require('public/layout.default.json'),
            active: 'medium',
            orientation: _this.detectOrientation(),
        };
        return _this;
    }
    LayoutProvider.prototype.componentWillUnmount = function () {
        if (canUseDOM()) {
            window.removeEventListener('resize', this.windowResizeHandler);
        }
    };
    LayoutProvider.prototype.componentDidMount = function () {
        if (canUseDOM()) {
            window.addEventListener('resize', this.windowResizeHandler);
        }
        this.windowResizeHandler();
    };
    // ----------------------------------------------------------------------------- Lifecycle methods
    LayoutProvider.prototype.render = function () {
        return (React.createElement("div", { ref: this.elementRef, className: classNames(LAYOUT_BASE_CLASS, LAYOUT_CLASSES[this.state.active]) },
            React.createElement(LayoutProviderContext.Provider, { value: Object.assign({}, this.state) }, this.props.children)));
    };
    LayoutProvider.prototype.getScreenSize = function () {
        if (!canUseDOM() || !Boolean(this.elementRef.current)) {
            return null;
        }
        var root = offsetRoot(this.elementRef.current);
        return {
            width: root.clientWidth,
            height: root.clientHeight,
        };
    };
    LayoutProvider.prototype.detectActiveBreakpoint = function (screenSizes, layout) {
        if (!Boolean(screenSizes)) {
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
    LayoutProvider.prototype.detectOrientation = function () {
        if (!canUseDOM()) {
            return 'landscape';
        }
        return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    };
    return LayoutProvider;
}(PureComponent));
export { LayoutProvider };
//# sourceMappingURL=index.js.map