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
import { Children, PureComponent } from 'react';
import * as React from 'react';
import { classNames } from 'core/utils/dom';
import './styles.scss';
import { Tabs } from '@material-ui/core';
import { TabBody } from '../TabContainer';
// ----------------------------------------------------------------------------- Implementation
var TabsWrapper = /** @class */ (function (_super) {
    __extends(TabsWrapper, _super);
    function TabsWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TabsWrapper.prototype.render = function () {
        var modifiers = [
            this.props.sticky && 'c-tabs-wrapper--sticky',
            this.props.fixed && 'c-tabs-wrapper--fixed'
        ];
        return (React.createElement("div", { className: classNames.apply(void 0, ['c-tabs-wrapper', this.props.className].concat(modifiers)) },
            React.createElement("div", { className: 'c-tabs-wrapper__header' }, this.tabsHeader),
            React.createElement("div", { className: 'c-tabs-wrapper__body', style: {
                    transform: "translateX(" + this.activeTabIndex * -100 + "%)"
                } }, this.tabsBody)));
    };
    Object.defineProperty(TabsWrapper.prototype, "tabsHeader", {
        // ----------------------------------------------------------------------------- Helpers methods
        get: function () {
            return Children.toArray(this.props.children).filter(function (child) { return child.type === Tabs; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsWrapper.prototype, "tabsBody", {
        get: function () {
            return Children.toArray(this.props.children).filter(function (child) { return child.type === TabBody; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsWrapper.prototype, "activeTabIndex", {
        get: function () {
            return this.tabsBody.findIndex(function (tab) { return tab.props.active; });
        },
        enumerable: true,
        configurable: true
    });
    return TabsWrapper;
}(PureComponent));
export { TabsWrapper };
//# sourceMappingURL=index.js.map