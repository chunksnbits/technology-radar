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
import { Button } from '@material-ui/core';
import { ApplicationStateContext } from 'core/store';
import { consume } from 'core/utils/store/consume';
import { classNames } from 'core/utils/dom';
import './styles.scss';
// ----------------------------------------------------------------------------- Implementation
// tslint:disable-next-line:class-name
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Header.prototype.render = function () {
        var _a = this.props, logo = _a.logo, title = _a.title, subtitle = _a.subtitle, reset = _a.reset;
        return (React.createElement("header", { className: classNames('c-header', this.props.className), onClick: reset },
            React.createElement(Button, { className: 'c-header__app-title', variant: 'flat' },
                logo && (React.createElement("img", { className: 'c-header__logo', src: logo })),
                React.createElement("div", { className: 'c-header__name' },
                    title && (React.createElement("h1", { className: 'c-header__title' }, title)),
                    subtitle && (React.createElement("h2", { className: 'c-header__subtitle' }, subtitle))))));
    };
    Header = __decorate([
        consume(ApplicationStateContext, { select: ['logo', 'title', 'subtitle', 'reset'] })
    ], Header);
    return Header;
}(PureComponent));
export { Header };
//# sourceMappingURL=index.js.map