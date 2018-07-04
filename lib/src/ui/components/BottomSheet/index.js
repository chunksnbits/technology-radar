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
import { Fragment, PureComponent } from 'react';
import { classNames, styled } from 'core/utils';
import { Button } from '@material-ui/core';
import { Icon } from '../Icon';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var BottomSheet = /** @class */ (function (_super) {
    __extends(BottomSheet, _super);
    function BottomSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    BottomSheet.prototype.render = function () {
        var _a = this.props, classes = _a.classes, active = _a.active, className = _a.className, children = _a.children, onClose = _a.onClose;
        var modifiers = [
            active && classes.rootActive,
        ];
        return (React.createElement(Fragment, null,
            React.createElement("div", { className: classNames.apply(void 0, [classes.root, className].concat(modifiers)) },
                React.createElement("nav", { className: classes.navigation },
                    React.createElement(Button, { onClick: onClose, className: classNames(classes.navigationAction, classes.navgationActionClose), variant: 'flat' },
                        React.createElement(Icon, { name: 'close', className: classes.navigationActionIcon }))),
                React.createElement("section", { className: classes.content }, children))));
    };
    BottomSheet = __decorate([
        styled(styles)
    ], BottomSheet);
    return BottomSheet;
}(PureComponent));
export { BottomSheet };
//# sourceMappingURL=index.js.map