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
import { PureComponent } from 'react';
import * as React from 'react';
import { styled, classNames } from 'utils';
import * as logoSrc from 'public/logo.symbols.svg';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Logo.prototype.render = function () {
        var _a = this.props, classes = _a.classes, className = _a.className, color = _a.color, name = _a.name;
        return (React.createElement("svg", { className: classNames(classes.root, className), xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMidYMin', viewBox: '0 0 24 24', style: {
                fill: color,
            } },
            React.createElement("use", { xlinkHref: logoSrc + "#" + name })));
    };
    Logo = __decorate([
        styled(styles)
    ], Logo);
    return Logo;
}(PureComponent));
export { Logo };
//# sourceMappingURL=index.js.map