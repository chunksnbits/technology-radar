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
import * as iconSrc from 'public/icon.symbols.svg';
// ----------------------------------------------------------------------------- Implementation
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Icon.prototype.render = function () {
        var size = this.isNumberLike(this.props.size) ? this.props.size + "px" : this.props.size;
        return (React.createElement("svg", { className: classNames('c-icon', this.props.className), xmlns: 'http://www.w3.org/2000/svg', style: {
                width: size,
                height: size
            }, preserveAspectRatio: 'xMidYMin', viewBox: '0 0 24 24' },
            React.createElement("use", { xlinkHref: iconSrc + "#" + this.props.name })));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    Icon.prototype.isNumberLike = function (value) {
        return !isNaN(Number(value));
    };
    return Icon;
}(PureComponent));
export { Icon };
//# sourceMappingURL=index.js.map