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
import * as React from 'react';
import { PureComponent } from 'react';
import { webcomponent } from 'core/utils';
import { JssBridge } from 'ui/components';
import { styles } from './styles.jss';
import { TechnologyRadar } from '../TechnologyRadar';
// ----------------------------------------------------------------------------- Implementation
var Webcomponent = /** @class */ (function (_super) {
    __extends(Webcomponent, _super);
    function Webcomponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webcomponent.prototype.render = function () {
        return (React.createElement(JssBridge, { attach: [styles] }, this.props.data && (React.createElement(TechnologyRadar, __assign({}, this.props)))));
    };
    Webcomponent = __decorate([
        webcomponent()
    ], Webcomponent);
    return Webcomponent;
}(PureComponent));
export { Webcomponent };
//# sourceMappingURL=index.js.map