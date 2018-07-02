"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var react_1 = require("react");
var React = require("react");
var core_1 = require("@material-ui/core");
var store_1 = require("core/store");
var consume_1 = require("core/utils/store/consume");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
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
        return (React.createElement("header", { className: dom_1.classNames('c-header', this.props.className), onClick: reset },
            React.createElement(core_1.Button, { className: 'c-header__app-title', variant: 'flat' },
                logo && (React.createElement("img", { className: 'c-header__logo', src: logo })),
                React.createElement("div", { className: 'c-header__name' },
                    title && (React.createElement("h1", { className: 'c-header__title' }, title)),
                    subtitle && (React.createElement("h2", { className: 'c-header__subtitle' }, subtitle))))));
    };
    Header = __decorate([
        consume_1.consume(store_1.ApplicationStateContext, { select: ['logo', 'title', 'subtitle', 'reset'] })
    ], Header);
    return Header;
}(react_1.PureComponent));
exports.Header = Header;
//# sourceMappingURL=index.js.map