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
import { Button } from '@material-ui/core';
import { classNames } from 'core/utils/dom';
import { GroupPanel } from '../GroupPanel';
import './styles.scss';
// ----------------------------------------------------------------------------- Implementation
var Groups = /** @class */ (function (_super) {
    __extends(Groups, _super);
    function Groups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Groups.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: classNames('c-groups', this.props.className) },
            this.props.groups.map(function (group) {
                return React.createElement(GroupPanel, { key: group.id, group: group, active: _this.isActive(group, _this.props.activeGroup), onConfirm: _this.props.onConfirm, onToggle: _this.props.onToggle, onValueChange: _this.props.onChange, onDelete: _this.props.onDelete });
            }),
            React.createElement("div", { className: 'c-groups__actions' },
                React.createElement(Button, { variant: 'flat', onClick: this.props.onAdd, className: 'c-groups__action c-groups__action--add-group' }, "Add Group"),
                React.createElement(Button, { variant: 'flat', color: 'secondary', onClick: this.props.onClear, className: 'c-groups__action c-groups__action--clear-all' }, "Clear all"))));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    Groups.prototype.isActive = function (group, activeGroup) {
        return Boolean(activeGroup) && activeGroup.id === group.id;
    };
    return Groups;
}(PureComponent));
export { Groups };
//# sourceMappingURL=index.js.map