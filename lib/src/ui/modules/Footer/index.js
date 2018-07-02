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
var store_1 = require("core/store");
var store_2 = require("core/utils/store");
var dom_1 = require("core/utils/dom");
var view_toggle_1 = require("./components/view-toggle");
require("./styles.scss");
// ----------------------------------------------------------------------------- Implementation
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handlers = {};
        // ----------------------------------------------------------------------------- Helpers methods
        _this.toggleListViewHandler = function () {
            _this.props.toggleViewMode();
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Footer.prototype.render = function () {
        var viewMode = this.props.viewMode;
        return (React.createElement("footer", { className: dom_1.classNames('c-footer', this.props.className) },
            React.createElement("div", { className: 'c-footer__actions' },
                React.createElement(view_toggle_1.ViewToggle, { viewMode: viewMode, onClick: this.toggleListViewHandler, className: 'c-footer__action c-footer__action--togle-view' }))));
    };
    Footer = __decorate([
        store_2.consume(store_1.ApplicationStateContext, { select: ['viewMode', 'toggleViewMode'] })
    ], Footer);
    return Footer;
}(react_1.PureComponent));
exports.Footer = Footer;
//# sourceMappingURL=index.js.map