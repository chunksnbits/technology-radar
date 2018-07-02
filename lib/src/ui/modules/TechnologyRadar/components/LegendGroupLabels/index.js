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
var react_1 = require("react");
var React = require("react");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
// SVG follows a different coordinate system.
// Thus add some static adjustment to labels to match them up with rendered items.
//
var SVG_ROTATION_SOURCE_ADJUSTMENT_DEGREES = -180;
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
        var modifiers = [];
        var groups = this.props.groups;
        if (!Boolean(groups)) {
            return null;
        }
        return (React.createElement("div", { className: dom_1.classNames.apply(void 0, ['c-legend-group-labels', this.props.className].concat(modifiers)) },
            React.createElement("svg", { viewBox: '0 0 100 100', className: 'c-legend-group-labels__element' },
                React.createElement("defs", null,
                    React.createElement("path", { d: 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0', fill: 'none' })),
                React.createElement("path", { d: 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0', id: 'c-legend-group-labels__text-path', fill: 'none' }),
                React.createElement("g", { className: 'c-legend-group-labels__group', style: {
                        transform: "rotateZ(" + (SVG_ROTATION_SOURCE_ADJUSTMENT_DEGREES + (360 / groups.length)) + "deg)"
                    } }, this.renderLabels(groups)))));
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
    LegendGroupLabels.prototype.renderLabels = function (groups) {
        var _this = this;
        var baseAngleDegree = 360 / groups.length;
        var circumference = 2 * Math.PI * 50;
        var offset = circumference / groups.length;
        return groups.map(function (group, index) {
            return (React.createElement("text", { key: group.id, className: 'c-legend-group-labels__label', style: {
                    transform: [
                        "rotateZ(" + (index * baseAngleDegree + 0.5 * baseAngleDegree) + "deg)"
                    ].join(' ')
                }, onClick: _this.bindSelectGroupHandler(group) },
                React.createElement("textPath", { alignmentBaseline: 'baseline', xlinkHref: '#c-legend-group-labels__text-path', startOffset: String(offset) }, group.name)));
        });
    };
    return LegendGroupLabels;
}(react_1.PureComponent));
exports.LegendGroupLabels = LegendGroupLabels;
//# sourceMappingURL=index.js.map