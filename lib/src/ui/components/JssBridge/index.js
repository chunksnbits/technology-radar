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
import { Fragment, PureComponent, createRef } from 'react';
import * as React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import jssPluginGlobal from 'jss-global';
import { CssBaseline } from '@material-ui/core';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
var classNameGenerator = createGenerateClassName();
// ----------------------------------------------------------------------------- Implementation
var JssBridge = /** @class */ (function (_super) {
    __extends(JssBridge, _super);
    function JssBridge(props) {
        var _this = _super.call(this, props) || this;
        _this.elementRef = createRef();
        _this.state = {
            jss: null,
        };
        return _this;
    }
    JssBridge.prototype.componentDidMount = function () {
        var jss = create(__assign({}, jssPreset(), { insertionPoint: this.elementRef.current }));
        jss.use(jssPluginGlobal);
        if (Boolean(this.props.attach)) {
            this.props.attach.forEach(function (styles) { return jss.createStyleSheet(styles).attach(); });
        }
        this.setState(function () { return ({
            jss: jss,
        }); });
    };
    // ----------------------------------------------------------------------------- Lifecycle methods
    JssBridge.prototype.render = function () {
        return (React.createElement("div", { ref: this.elementRef, className: 'g-styles-root' }, Boolean(this.state.jss) &&
            React.createElement(Fragment, null,
                React.createElement(CssBaseline, null),
                React.createElement(JssProvider, { jss: this.state.jss, generateClassName: classNameGenerator },
                    React.createElement(Fragment, null, this.props.children)))));
    };
    return JssBridge;
}(PureComponent));
export { JssBridge };
//# sourceMappingURL=index.js.map