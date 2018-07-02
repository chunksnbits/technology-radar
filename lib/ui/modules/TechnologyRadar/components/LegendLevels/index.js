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
import { PureComponent } from 'react';
import * as React from 'react';
import { classNames } from 'core/utils/dom';
import './styles.scss';
import { calculateMaxLevel } from '../utils/math';
// ----------------------------------------------------------------------------- Implementation
var LegendLevels = /** @class */ (function (_super) {
    __extends(LegendLevels, _super);
    function LegendLevels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    LegendLevels.prototype.render = function () {
        var _a = this.props, innerRadiusPercent = _a.innerRadiusPercent, outerRadiusPercent = _a.outerRadiusPercent, technologies = _a.technologies, levels = _a.levels;
        var modifiers = [];
        var maxLevel = calculateMaxLevel(technologies);
        var step = 2 * (outerRadiusPercent - innerRadiusPercent) / maxLevel;
        var size = function (index) {
            return 2 * innerRadiusPercent + (index + 1) * step;
        };
        return (React.createElement("div", { className: classNames.apply(void 0, ['c-legend-levels', this.props.className].concat(modifiers)) }, levels.map(function (_, index) {
            return React.createElement("div", { key: index.toString(), className: 'c-legend-levels__level', style: {
                    height: size(index) + "%",
                    width: size(index) + "%",
                } },
                React.createElement("span", { className: 'c-legend-levels__level-label' }, levels[Math.max(0, maxLevel - index - 1)].name));
        })));
    };
    return LegendLevels;
}(PureComponent));
export { LegendLevels };
//# sourceMappingURL=index.js.map