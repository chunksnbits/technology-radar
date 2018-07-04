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
import { ApplicationStateContext } from 'core/store';
import { classNames, consume, styled } from 'core/utils';
import { ViewToggle } from './components/view-toggle';
import { styles } from './styles.jss';
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
        var _a = this.props, viewMode = _a.viewMode, classes = _a.classes;
        return (React.createElement("footer", { className: classNames(classes.root, this.props.className) },
            React.createElement("div", { className: classes.footerActions },
                React.createElement(ViewToggle, { viewMode: viewMode, onClick: this.toggleListViewHandler }))));
    };
    Footer = __decorate([
        consume(ApplicationStateContext, { select: ['viewMode', 'toggleViewMode'] }),
        styled(styles)
    ], Footer);
    return Footer;
}(PureComponent));
export { Footer };
//# sourceMappingURL=index.js.map