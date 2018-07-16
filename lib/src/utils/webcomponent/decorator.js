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
import { Component, createRef } from 'react';
import { shadowRoot } from '../dom';
// ----------------------------------------------------------------------------- Implementation
export function webcomponent() {
    return function (WrappedComponent) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this.elementRef = createRef();
                _this.state = Object.assign({}, props);
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                var _this = this;
                var root = shadowRoot(this.elementRef.current);
                this.setState(function () {
                    var attributes = Array.prototype.slice.call(root.attributes);
                    return _this.parseAttributes(attributes);
                });
            };
            class_1.prototype.webComponentAttributeChanged = function (name, _, value) {
                this.setState(function (state) {
                    var _a;
                    return Object.assign({}, state, (_a = {}, _a[name] = value, _a));
                });
            };
            class_1.prototype.render = function () {
                var AnyComponent = WrappedComponent;
                return (React.createElement("div", { ref: this.elementRef, className: 'g-webcomponent-root' },
                    React.createElement(AnyComponent, __assign({}, this.state))));
            };
            class_1.prototype.parseAttributes = function (attributes) {
                return attributes.reduce(function (result, attribute) {
                    var _a;
                    var value = attribute.value;
                    try {
                        value = JSON.parse(value);
                    }
                    catch (error) {
                        /** expected */
                    }
                    return Object.assign({}, result, (_a = {}, _a[attribute.name] = value, _a));
                }, {});
            };
            return class_1;
        }(Component));
    };
}
//# sourceMappingURL=decorator.js.map