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
import { PureComponent } from 'react';
import * as React from 'react';
import { classNames } from 'core/utils/dom';
// ----------------------------------------------------------------------------- Implementation
var AsyncComponent = /** @class */ (function (_super) {
    __extends(AsyncComponent, _super);
    function AsyncComponent(props) {
        var _this = _super.call(this, props) || this;
        var promise = props.onLoad().then(_this.initialize.bind(_this));
        _this.state = {
            promise: promise,
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    AsyncComponent.prototype.render = function () {
        if (Boolean(this.state.promise)) {
            var modifiers = [
                'c-async-settings-panel--pending',
            ];
            return (React.createElement("div", { className: classNames.apply(void 0, ['c-async-settings-panel', this.props.className].concat(modifiers)) }, this.props.children));
        }
        var AsynComponent = this.state.component;
        return React.createElement(AsynComponent, __assign({}, this.props));
    };
    AsyncComponent.prototype.initialize = function (component) {
        var _this = this;
        this.setState(function () { return ({
            promise: null,
            component: _this.props.componentName ? component[_this.props.componentName] : component,
        }); });
    };
    return AsyncComponent;
}(PureComponent));
export { AsyncComponent };
//# sourceMappingURL=index.js.map