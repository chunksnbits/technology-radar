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
import * as React from 'react';
// ----------------------------------------------------------------------------- Helpers methods
function bindProps(options) {
    var _a;
    if (Boolean(options.bindTo)) {
        return _a = {},
            _a[options.bindTo] = function (value) { return value; },
            _a;
    }
    return options.select.reduce(function (result, key) {
        var _a;
        return __assign({}, result, (_a = {}, _a[key] = function (value) { return value[key]; }, _a));
    }, {});
}
function evaluateBindings(bindings, props) {
    return Object.entries(bindings).reduce(function (result, _a) {
        var key = _a[0], selectorFnc = _a[1];
        var _b;
        return __assign({}, result, (_b = {}, _b[key] = selectorFnc(props), _b));
    }, {});
}
// ----------------------------------------------------------------------------- Implementation
export function consume(context, options) {
    var bindings = bindProps(options);
    return function (WrappedComponent) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                var _this = this;
                var InnerComponent = WrappedComponent;
                return (React.createElement(context.Consumer, null, function (value) {
                    return React.createElement(InnerComponent, __assign({}, Object.assign({}, _this.props, evaluateBindings(bindings, value))));
                }));
            };
            return class_1;
        }(React.Component));
    };
}
//# sourceMappingURL=consume.js.map