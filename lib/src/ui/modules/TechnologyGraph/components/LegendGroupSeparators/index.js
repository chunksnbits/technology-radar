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
import { classNames, styled } from 'core/utils';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var LegendGroupSeparators = /** @class */ (function (_super) {
    __extends(LegendGroupSeparators, _super);
    function LegendGroupSeparators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    LegendGroupSeparators.prototype.render = function () {
        var modifiers = [];
        var _a = this.props, groups = _a.groups, classes = _a.classes;
        if (!Boolean(groups)) {
            return null;
        }
        var baseAngleDegree = 360 / groups.length;
        return (React.createElement("div", { className: classNames.apply(void 0, [classes.root, this.props.className].concat(modifiers)) }, groups.map(function (group, index) {
            return React.createElement("h4", { key: group.id, className: classes.legendGroupSeparatorsSeparator, style: {
                    transform: [,
                        'translate(-50%, -50%)',
                        "rotateZ(" + index * baseAngleDegree + "deg)",
                        'translateX(50%)',
                    ].join(' '),
                } });
        })));
    };
    LegendGroupSeparators = __decorate([
        styled(styles)
    ], LegendGroupSeparators);
    return LegendGroupSeparators;
}(PureComponent));
export { LegendGroupSeparators };
//# sourceMappingURL=index.js.map