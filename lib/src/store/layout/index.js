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
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, createContext } from 'react';
import * as React from 'react';
import produce from 'immer';
export var LayoutContext = createContext({});
// ----------------------------------------------------------------------------- Implementation
var LayoutProvider = /** @class */ (function (_super) {
    __extends(LayoutProvider, _super);
    function LayoutProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = __assign({}, props.layout, { activeBreakpoint: 'medium', orientation: 'portrait', setActiveBreakpoint: _this.setActiveBreakpoint.bind(_this), setDeviceOrientation: _this.setDeviceOrientation.bind(_this) });
        return _this;
    }
    LayoutProvider.prototype.render = function () {
        return (React.createElement(LayoutContext.Provider, { value: this.state }, this.props.children));
    };
    LayoutProvider.prototype.setActiveBreakpoint = function (breakpoint) {
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.activeBreakpoint = breakpoint;
            return draftState;
        }); });
    };
    LayoutProvider.prototype.setDeviceOrientation = function (orientation) {
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.orientation = orientation;
            return draftState;
        }); });
    };
    return LayoutProvider;
}(PureComponent));
export { LayoutProvider };
//# sourceMappingURL=index.js.map