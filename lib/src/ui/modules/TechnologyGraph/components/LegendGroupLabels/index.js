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
import { classNames, styled } from 'utils';
import { styles } from './styles.jss';
// SVG follows a different coordinate system.
// Thus add some static adjustment to labels to match them up with rendered items.
//
var SVG_ROTATION_SOURCE_ADJUSTMENT_DEGREES = -180;
var LABEL_PATH_ID = 'c-legend-group-labels__text-path';
// ----------------------------------------------------------------------------- Implementation
var LegendGroupLabels = /** @class */ (function (_super) {
    __extends(LegendGroupLabels, _super);
    function LegendGroupLabels() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handlers = {};
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    LegendGroupLabels.prototype.render = function () {
        var _a = this.props, groups = _a.groups, classes = _a.classes;
        if (!Boolean(groups)) {
            return null;
        }
        return (React.createElement("div", { className: classNames(classes.root, this.props.className) },
            React.createElement("svg", { viewBox: '0 0 100 100', className: classes.legendGroupLabelsElement },
                React.createElement("defs", null,
                    React.createElement("path", { d: 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0', fill: 'none' })),
                React.createElement("path", { d: 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0', id: LABEL_PATH_ID, fill: 'none' }),
                React.createElement("g", { className: classes.legendGroupLabelsGroup, style: {
                        transform: "rotateZ(" + (SVG_ROTATION_SOURCE_ADJUSTMENT_DEGREES + (360 / groups.length)) + "deg)",
                    } }, this.renderLabels(groups, classes)))));
    };
    // ----------------------------------------------------------------------------- Event hanndler methods
    LegendGroupLabels.prototype.bindSelectGroupHandler = function (group) {
        var _this = this;
        var name = "select-group-" + group.id;
        if (!Boolean(this.handlers[name])) {
            this.handlers[name] = function (event) {
                _this.props.onSelect(group, event);
            };
        }
        return this.handlers[name];
    };
    // ----------------------------------------------------------------------------- Helpers methods
    LegendGroupLabels.prototype.renderLabels = function (groups, classes) {
        var _this = this;
        var baseAngleDegree = 360 / groups.length;
        var circumference = 2 * Math.PI * 50;
        var offset = circumference / groups.length;
        return groups.map(function (group, index) {
            return (React.createElement("text", { key: group.id, className: classes.legendGroupLabelsLabel, style: {
                    transform: [
                        "rotateZ(" + (index * baseAngleDegree + 0.5 * baseAngleDegree) + "deg)",
                    ].join(' '),
                }, onClick: _this.bindSelectGroupHandler(group) },
                React.createElement("textPath", { alignmentBaseline: 'baseline', xlinkHref: "#" + LABEL_PATH_ID, startOffset: String(offset) }, group.name)));
        });
    };
    LegendGroupLabels = __decorate([
        styled(styles)
    ], LegendGroupLabels);
    return LegendGroupLabels;
}(PureComponent));
export { LegendGroupLabels };
//# sourceMappingURL=index.js.map