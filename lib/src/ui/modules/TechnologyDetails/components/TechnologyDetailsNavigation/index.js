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
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var react_1 = require("react");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
var core_1 = require("@material-ui/core");
var Icon_1 = require("core/ui/components/Icon");
// ----------------------------------------------------------------------------- Implementation
var TechnologyDetailsNavigation = /** @class */ (function (_super) {
    __extends(TechnologyDetailsNavigation, _super);
    function TechnologyDetailsNavigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Event handler function
        _this.propagateSelectPrevHandler = function (event) {
            _this.props.onSelect(_this.getPrev(), event);
        };
        _this.propagateSelectNextHandler = function (event) {
            _this.props.onSelect(_this.getNext(), event);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TechnologyDetailsNavigation.prototype.render = function () {
        var modifiers = [];
        if (!this.props.selectedTechnology) {
            return null;
        }
        return (React.createElement("div", { className: dom_1.classNames.apply(void 0, ['c-technology-details-navigation', this.props.className].concat(modifiers)) },
            React.createElement(core_1.Button, { onClick: this.propagateSelectPrevHandler, variant: 'flat', size: 'small', className: 'c-technology-details-navigation__action c-technology-details-navigation__action--prev' },
                React.createElement(Icon_1.Icon, { name: 'navigate-prev', className: 'c-technology-details-navigation__action-icon' }),
                this.getPrev().name),
            React.createElement(core_1.Button, { onClick: this.propagateSelectNextHandler, variant: 'flat', size: 'small', className: 'c-technology-details-navigation__action c-technology-details-navigation__action--next' },
                this.getNext().name,
                React.createElement(Icon_1.Icon, { name: 'navigate-next', className: 'c-technology-details-navigation__action-icon' }))));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    TechnologyDetailsNavigation.prototype.getNext = function () {
        var _this = this;
        var index = this.props.technologies.findIndex(function (acc) { return acc.id === _this.props.selectedTechnology.id; }) + 1;
        if (index === this.props.technologies.length) {
            index = 0;
        }
        return this.props.technologies[index];
    };
    TechnologyDetailsNavigation.prototype.getPrev = function () {
        var _this = this;
        var index = this.props.technologies.findIndex(function (acc) { return acc.id === _this.props.selectedTechnology.id; }) - 1;
        if (index === -1) {
            index = this.props.technologies.length - 1;
        }
        return this.props.technologies[index];
    };
    return TechnologyDetailsNavigation;
}(react_1.PureComponent));
exports.TechnologyDetailsNavigation = TechnologyDetailsNavigation;
//# sourceMappingURL=index.js.map