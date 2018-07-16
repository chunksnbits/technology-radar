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
import { styled, classNames } from 'utils';
import { calculateMaxLevel } from '../utils/math';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var LegendLevels = /** @class */ (function (_super) {
    __extends(LegendLevels, _super);
    function LegendLevels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    LegendLevels.prototype.render = function () {
        if (!Boolean(this.props.settings)) {
            return null;
        }
        var _a = this.props, technologies = _a.technologies, levels = _a.levels, classes = _a.classes;
        var _b = this.props.settings, innerRadiusPercent = _b.innerRadiusPercent, outerRadiusPercent = _b.outerRadiusPercent;
        var modifiers = [];
        var maxLevel = calculateMaxLevel(technologies);
        var step = 2 * (outerRadiusPercent - innerRadiusPercent) / maxLevel;
        var size = function (index) {
            return 2 * innerRadiusPercent + (index + 1) * step;
        };
        return (React.createElement("div", { className: classNames.apply(void 0, [classes.root, this.props.className].concat(modifiers)) }, levels.map(function (_, index) {
            return React.createElement("div", { key: index.toString(), className: classes.legendLevelsLevel, style: {
                    height: size(index) + "%",
                    width: size(index) + "%",
                } },
                React.createElement("span", { className: classes.legendLevelsLevelLabel }, levels[Math.max(0, maxLevel - index - 1)].name));
        })));
    };
    LegendLevels = __decorate([
        styled(styles)
    ], LegendLevels);
    return LegendLevels;
}(PureComponent));
export { LegendLevels };
//# sourceMappingURL=index.js.map