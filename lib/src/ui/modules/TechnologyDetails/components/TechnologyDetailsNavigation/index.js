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
import * as React from 'react';
import { PureComponent } from 'react';
import { Button } from '@material-ui/core';
import { classNames, styled } from 'utils';
import { Icon } from '../../../../components';
import { styles } from './styles.jss';
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
        var _a = this.props, classes = _a.classes, className = _a.className, selectedTechnology = _a.selectedTechnology;
        if (!selectedTechnology) {
            return null;
        }
        return (React.createElement("div", { className: classNames(classes.root, className) },
            React.createElement(Button, { onClick: this.propagateSelectPrevHandler, variant: 'flat', size: 'small', className: classNames(classes.technologyDetailsNavigationAction, classes.technologyDetailsNavigationActionPrev) },
                React.createElement(Icon, { name: 'navigate-prev', className: classes.technologyDetailsNavigationActionIcon }),
                React.createElement("span", { className: classes.technologyDetailsNavigationActionLabel }, this.getPrev().name)),
            React.createElement(Button, { onClick: this.propagateSelectNextHandler, variant: 'flat', size: 'small', className: classNames(classes.technologyDetailsNavigationAction, classes.technologyDetailsNavigationActionNext) },
                React.createElement("span", { className: classes.technologyDetailsNavigationActionLabel }, this.getNext().name),
                React.createElement(Icon, { name: 'navigate-next', className: classes.technologyDetailsNavigationActionIcon }))));
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
    TechnologyDetailsNavigation = __decorate([
        styled(styles)
    ], TechnologyDetailsNavigation);
    return TechnologyDetailsNavigation;
}(PureComponent));
export { TechnologyDetailsNavigation };
//# sourceMappingURL=index.js.map