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
import { Component } from 'react';
import * as React from 'react';
import { classNames } from 'core/utils/dom';
import { Ripple } from 'core/ui/components/Ripple';
import { GroupIndicator } from 'core/ui/components/GroupIndicator';
import { findGroupForTechnology, calculateTechnologyRotationDegrees, calculateItemOffsetPercent } from '../utils/math';
import './styles.scss';
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
        var _a = this.props, focused = _a.focused, selected = _a.selected, technology = _a.technology, groups = _a.groups;
        if (!Boolean(groups)) {
            return null;
        }
        var group = findGroupForTechnology(groups, technology);
        if (!Boolean(group)) {
            return null;
        }
        var modifiers = [
            selected && 'c-technology-item--selected',
        ];
        return (React.createElement("div", { className: classNames.apply(void 0, ['c-technology-item', this.props.className].concat(modifiers)), style: this.calculateTransforms(this.props), "custom-attribute": [technology.name, selected].join(', ') },
            React.createElement(Ripple, { position: 'relative' },
                React.createElement(GroupIndicator, { className: 'c-technology-item__item', color: group.color, focused: focused, onClick: this.propagateSelect, onMouseOver: this.propagateMouseOver, onMouseOut: this.propagateMouseOut }))));
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
    return TechnologyItem;
}(Component));
export { TechnologyItem };
//# sourceMappingURL=index.js.map