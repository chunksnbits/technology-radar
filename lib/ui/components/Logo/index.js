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
import { PureComponent } from 'react';
import * as React from 'react';
import { classNames } from 'core/utils/dom';
import './styles.scss';
import * as logoSrc from 'public/logo.symbols.svg';
// ----------------------------------------------------------------------------- Implementation
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Logo.prototype.render = function () {
        return (React.createElement("svg", { className: classNames('c-logo', this.props.className), xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMidYMin', viewBox: '0 0 24 24', style: { fill: this.props.color } },
            React.createElement("use", { xlinkHref: logoSrc + "#" + this.props.name })));
    };
    return Logo;
}(PureComponent));
export { Logo };
//# sourceMappingURL=index.js.map