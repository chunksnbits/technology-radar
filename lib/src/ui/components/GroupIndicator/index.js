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
import { classNames } from 'core/utils/dom';
import { styled } from 'utils';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var GroupIndicator = /** @class */ (function (_super) {
    __extends(GroupIndicator, _super);
    function GroupIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupIndicator.prototype.render = function () {
        var _a = this.props, classes = _a.classes, className = _a.className, focused = _a.focused, large = _a.large, color = _a.color, onClick = _a.onClick, onMouseOver = _a.onMouseOver, onMouseOut = _a.onMouseOut;
        var modifiers = [
            focused && classes.groupIndicatorFocused,
            large && classes.groupIndicatorLarge,
        ];
        return (React.createElement("span", { className: classNames.apply(void 0, [classes.groupIndicator, className].concat(modifiers)), style: {
                borderColor: color,
            }, onClick: onClick, onMouseOver: onMouseOver, onMouseOut: onMouseOut }));
    };
    ;
    GroupIndicator = __decorate([
        styled(styles)
    ], GroupIndicator);
    return GroupIndicator;
}(PureComponent));
export { GroupIndicator };
//# sourceMappingURL=index.js.map