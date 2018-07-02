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
// ----------------------------------------------------------------------------- Implementation
var LegendGroupSeparators = /** @class */ (function (_super) {
    __extends(LegendGroupSeparators, _super);
    function LegendGroupSeparators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    LegendGroupSeparators.prototype.render = function () {
        var modifiers = [];
        var groups = this.props.groups;
        if (!Boolean(groups)) {
            return null;
        }
        var baseAngleDegree = 360 / groups.length;
        return (React.createElement("div", { className: classNames.apply(void 0, ['c-legend-group-separators', this.props.className].concat(modifiers)) }, groups.map(function (group, index) {
            return React.createElement("h4", { key: group.id, className: 'c-legend-group-separators__separator', style: {
                    transform: [,
                        'translate(-50%, -50%)',
                        "rotateZ(" + index * baseAngleDegree + "deg)",
                        'translateX(50%)'
                    ].join(' ')
                } });
        })));
    };
    return LegendGroupSeparators;
}(PureComponent));
export { LegendGroupSeparators };
//# sourceMappingURL=index.js.map