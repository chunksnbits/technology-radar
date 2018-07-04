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
import { Component } from 'react';
import * as React from 'react';
import { classNames, styled } from 'core/utils';
import { Ripple, GroupIndicator } from 'core/ui/components';
import { findGroupForTechnology, calculateTechnologyRotationDegrees, calculateItemOffsetPercent } from '../utils/math';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var TechnologyItem = /** @class */ (function (_super) {
    __extends(TechnologyItem, _super);
    function TechnologyItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.propagateSelect = function (event) {
            _this.props.onSelect(_this.props.technology, event);
        };
        _this.propagateMouseOver = function (event) {
            _this.props.onMouseOver(_this.props.technology, event);
        };
        _this.propagateMouseOut = function (event) {
            _this.props.onMouseOut(_this.props.technology, event);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TechnologyItem.prototype.shouldComponentUpdate = function (props) {
        return props.selected !== this.props.selected ||
            props.technology !== this.props.technology ||
            props.focused !== this.props.focused;
    };
    TechnologyItem.prototype.render = function () {
        var _a = this.props, classes = _a.classes, className = _a.className, focused = _a.focused, selected = _a.selected, technology = _a.technology, groups = _a.groups;
        if (!Boolean(groups)) {
            return null;
        }
        var group = findGroupForTechnology(groups, technology);
        if (!Boolean(group)) {
            return null;
        }
        var modifiers = [
            selected && classes.technologyItemSelected,
        ];
        return (React.createElement("div", { className: classNames.apply(void 0, [classes.technologyItem, className].concat(modifiers)), style: this.calculateTransforms(this.props), "custom-attribute": [technology.name, selected].join(', ') },
            React.createElement(Ripple, { position: 'relative' },
                React.createElement(GroupIndicator, { className: classes.technologyItemItem, color: group.color, focused: focused, onClick: this.propagateSelect, onMouseOver: this.propagateMouseOver, onMouseOut: this.propagateMouseOut }))));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    TechnologyItem.prototype.calculateTransforms = function (props) {
        var _a = this.props, technology = _a.technology, groups = _a.groups, technologies = _a.technologies, settings = _a.settings;
        if (typeof technology.groupId !== 'string') {
            return null;
        }
        return {
            transform: "rotateZ(" + calculateTechnologyRotationDegrees(technology, groups, technologies) + "deg)",
            width: calculateItemOffsetPercent(technology, technologies, settings) + "%",
        };
    };
    TechnologyItem = __decorate([
        styled(styles)
    ], TechnologyItem);
    return TechnologyItem;
}(Component));
export { TechnologyItem };
//# sourceMappingURL=index.js.map