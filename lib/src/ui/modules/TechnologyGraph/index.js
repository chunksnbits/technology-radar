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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, createRef } from 'react';
import * as React from 'react';
import { ApplicationStateContext, TechnologyRadarContext } from 'core/store';
import { consume } from 'core/utils/store';
import { styled, classNames } from 'core/utils';
import { TechnologyItem } from './components/TechnologyItem';
import { calculateTechnologyRotationDegrees, calculateItemOffsetPercent, calculateGroupRotationDegrees } from './components/utils/math';
import { LegendGroupLabels } from './components/LegendGroupLabels';
import { LegendGroupSeparators } from './components/LegendGroupSeparators';
import { LegendLevels } from './components/LegendLevels';
import { styles } from './styles.jss';
var BASE_TRANSFORM_ROTATE_DEGREES = -10;
// ----------------------------------------------------------------------------- Implementation
var TechnologyGraph = /** @class */ (function (_super) {
    __extends(TechnologyGraph, _super);
    function TechnologyGraph(props) {
        var _this = _super.call(this, props) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.deselectHandler = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            _this.props.selectGroup(null);
            _this.props.selectTechnology(null);
        };
        _this.selectGroupHandler = function (group, event) {
            if (event.defaultPrevented) {
                return;
            }
            _this.props.selectGroup(group);
            _this.props.selectTechnology(null);
            event.preventDefault();
        };
        _this.selectTechnologyHandler = function (technology, event) {
            _this.props.selectTechnology(technology);
            event.preventDefault();
        };
        _this.focusTechnologyHandler = function (technology, event) {
            _this.props.focusTechnology(technology);
            event.preventDefault();
        };
        _this.unfocusTechnologyHandler = function (_, event) {
            _this.props.focusTechnology(null);
            event.preventDefault();
        };
        _this.elementRef = createRef();
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    /**
     * Adds performance optimization for render intensive tasks.
     */
    TechnologyGraph.prototype.componentWillUpdate = function () {
        this.elementRef.current.classList.add(this.props.classes.technologyGraphWillChange);
    };
    TechnologyGraph.prototype.componentDidUpdate = function () {
        this.elementRef.current.classList.remove(this.props.classes.technologyGraphWillChange);
    };
    TechnologyGraph.prototype.render = function () {
        var _this = this;
        var _a = this.props, groups = _a.groups, levels = _a.levels, technologies = _a.technologies, settings = _a.settings, classes = _a.classes;
        var _b = this.props, focusedTechnology = _b.focusedTechnology, selectedTechnology = _b.selectedTechnology, selectedGroup = _b.selectedGroup;
        var modifiers = [
            Boolean(selectedTechnology) && classes.technologyGraphSelectedTechnology,
            Boolean(selectedGroup) && classes.technologyGraphSelectedGroup,
        ];
        var transforms = this.calculateFocusTransforms();
        return (React.createElement("div", { className: classNames.apply(void 0, [classes.root, this.props.className].concat(modifiers)), style: __assign({}, transforms), onClick: this.deselectHandler, ref: this.elementRef },
            React.createElement("div", { className: classes.technologyGraphContent },
                React.createElement("div", { className: classes.technologyGraphLegend },
                    React.createElement(LegendGroupLabels, { groups: groups, onSelect: this.selectGroupHandler }),
                    React.createElement(LegendGroupSeparators, { groups: groups }),
                    React.createElement(LegendLevels, { technologies: technologies, innerRadiusPercent: settings.innerRadiusPercent, outerRadiusPercent: settings.outerRadiusPercent, levels: levels })),
                React.createElement("div", { className: classes.technologyGraphTechnologies }, technologies.map(function (technology) { return (React.createElement(TechnologyItem, { key: technology.id, className: classes.technologyGraphTechnologyItem, technology: technology, focused: Boolean(focusedTechnology) && focusedTechnology.id === technology.id, selected: Boolean(selectedTechnology) && selectedTechnology === technology, groups: groups, technologies: technologies, settings: settings, onSelect: _this.selectTechnologyHandler, onMouseOver: _this.focusTechnologyHandler, onMouseOut: _this.unfocusTechnologyHandler })); })))));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    TechnologyGraph.prototype.calculateFocusTransforms = function () {
        var _a = this.props, selectedTechnology = _a.selectedTechnology, selectedGroup = _a.selectedGroup;
        if (Boolean(selectedTechnology)) {
            return this.calculateFocusedTranfsformForSelectedTechnology();
        }
        if (Boolean(selectedGroup)) {
            return this.calculateFocusedTranfsformForSelectedGroup();
        }
        return {
            transform: [
                'scale3d(1, 1, 1)',
                'translate3d(0, 0, 0)',
                "rotate3d(0, 0, 1, " + BASE_TRANSFORM_ROTATE_DEGREES + "deg)",
            ].join(' '),
        };
    };
    TechnologyGraph.prototype.calculateFocusedTranfsformForSelectedTechnology = function () {
        var _a = this.props, selectedTechnology = _a.selectedTechnology, groups = _a.groups, technologies = _a.technologies, settings = _a.settings;
        var itemRotationDegrees = calculateTechnologyRotationDegrees(selectedTechnology, groups, technologies);
        var itemOffsetPercent = calculateItemOffsetPercent(selectedTechnology, technologies, settings);
        var rotationDegrees = 180 + 360 - itemRotationDegrees;
        return {
            transform: [
                'scale3d(4.5, 4.5, 1)',
                "rotate3d(0, 0, 1, " + -1 * rotationDegrees + "deg)",
                "translate3d(" + itemOffsetPercent * 0.9 + "%, 0, 0)",
                "rotate3d(0, 0, 1, " + rotationDegrees + "deg)",
            ].join(' '),
        };
    };
    TechnologyGraph.prototype.calculateFocusedTranfsformForSelectedGroup = function () {
        var _a = this.props, selectedGroup = _a.selectedGroup, groups = _a.groups;
        var groupBaseRotationDegrees = 360 / groups.length;
        var groupRotationDegrees = calculateGroupRotationDegrees(selectedGroup, groups);
        var rotationDegrees = 180 - (groupRotationDegrees + 0.5 * groupBaseRotationDegrees);
        return {
            transform: [
                'scale3d(2, 2, 1)',
                "rotate3d(0, 0, 1, " + -1 * rotationDegrees + "deg)",
                "translate3d(25%, 0, 0)",
                "rotate3d(0, 0, 1, " + rotationDegrees + "deg)",
            ].join(' '),
        };
    };
    TechnologyGraph = __decorate([
        consume(ApplicationStateContext, {
            select: [
                'focusedTechnology',
                'selectedTechnology',
                'selectedGroup',
                'selectGroup',
                'focusTechnology',
                'selectTechnology',
            ],
        }),
        consume(TechnologyRadarContext, { select: ['groups', 'levels', 'technologies', 'settings'] }),
        styled(styles)
    ], TechnologyGraph);
    return TechnologyGraph;
}(PureComponent));
export { TechnologyGraph };
//# sourceMappingURL=index.js.map