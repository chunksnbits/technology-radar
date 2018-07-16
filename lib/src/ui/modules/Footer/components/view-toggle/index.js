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
import { Button } from '@material-ui/core';
import { classNames, styled } from 'utils';
import { Icon } from '../../../../components';
import { styles } from '../../styles.jss';
var viewToggleOptions = {
    list: {
        icon: 'radar',
        label: 'Show radar view',
    },
    radar: {
        icon: 'list',
        label: 'Show list view',
    },
};
// ----------------------------------------------------------------------------- Implementation
var ViewToggle = /** @class */ (function (_super) {
    __extends(ViewToggle, _super);
    function ViewToggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewToggle.prototype.render = function () {
        var _a = this.props, viewMode = _a.viewMode, className = _a.className, onClick = _a.onClick, classes = _a.classes;
        return (React.createElement(Button, { className: classNames(classes.footerAction, classes.viewToggle, className), onClick: onClick },
            React.createElement(Icon, { className: classes.footerActionIcon, name: viewToggleOptions[viewMode].icon }),
            React.createElement("span", null, viewToggleOptions[viewMode].label)));
    };
    ViewToggle = __decorate([
        styled(styles)
    ], ViewToggle);
    return ViewToggle;
}(PureComponent));
export { ViewToggle };
//# sourceMappingURL=index.js.map