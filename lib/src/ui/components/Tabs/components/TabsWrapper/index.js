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
import { Children, PureComponent } from 'react';
import * as React from 'react';
import { styled, classNames } from 'core/utils';
import { Tabs } from '@material-ui/core';
import { TabBody } from '../TabContainer';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var TabsWrapper = /** @class */ (function (_super) {
    __extends(TabsWrapper, _super);
    function TabsWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TabsWrapper.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, classes = _a.classes, sticky = _a.sticky, fixed = _a.fixed;
        var modifiers = [
            sticky && classes.tabsWrapperSticky,
            fixed && classes.tabsWrapperFixed,
        ];
        return (React.createElement("div", { className: classNames.apply(void 0, [classes.root, className].concat(modifiers)) },
            React.createElement("div", { className: classes.tabsWrapperHeader, style: {} }, this.getTabsHeader(children)),
            React.createElement("div", { className: classes.tabsWrapperBody, style: {
                    transform: "translateX(" + this.getActiveTabIndex(children) * -100 + "%)",
                } }, this.getTabsBody(children))));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    TabsWrapper.prototype.getTabsHeader = function (children) {
        return Children.toArray(children).filter(function (child) { return child.type === Tabs; });
    };
    TabsWrapper.prototype.getTabsBody = function (children) {
        return Children.toArray(children).filter(function (child) { return child.type === TabBody; });
    };
    TabsWrapper.prototype.getActiveTabIndex = function (children) {
        return this.getTabsBody(children).findIndex(function (tab) { return tab.props.active; });
    };
    TabsWrapper = __decorate([
        styled(styles)
    ], TabsWrapper);
    return TabsWrapper;
}(PureComponent));
export { TabsWrapper };
//# sourceMappingURL=index.js.map