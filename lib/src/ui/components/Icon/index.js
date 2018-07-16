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
import * as iconSrc from 'public/icon.symbols.svg';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Icon.prototype.render = function () {
        var _a = this.props, className = _a.className, name = _a.name, size = _a.size, classes = _a.classes, color = _a.color;
        var sizePx = this.isNumberLike(size) ? size + "px" : size;
        return (React.createElement("svg", { className: classNames(classes.root, className), xmlns: 'http://www.w3.org/2000/svg', style: {
                width: sizePx,
                height: sizePx,
                fill: color,
            }, preserveAspectRatio: 'xMidYMin', viewBox: '0 0 24 24' },
            React.createElement("use", { xlinkHref: iconSrc + "#" + name })));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    Icon.prototype.isNumberLike = function (value) {
        return !isNaN(Number(value));
    };
    Icon = __decorate([
        styled(styles)
    ], Icon);
    return Icon;
}(PureComponent));
export { Icon };
//# sourceMappingURL=index.js.map