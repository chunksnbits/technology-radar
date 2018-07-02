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
import { Button, TextField } from '@material-ui/core';
import { classNames } from 'core/utils/dom';
import { FormGroup } from 'core/ui/components/FormGroup';
import { ExpansionPanel, ExpansionPanelHeader, ExpansionPanelBody } from 'core/ui/components/ExpansionPanel';
import './styles.scss';
// ----------------------------------------------------------------------------- Implementation
var GroupPanel = /** @class */ (function (_super) {
    __extends(GroupPanel, _super);
    function GroupPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.propagateValueChange = function (event) {
            var target = event.target;
            _this.props.onValueChange(_this.props.group, target.name, target.value);
        };
        _this.propagateToggle = function (active) {
            _this.props.onToggle(_this.props.group, active);
        };
        _this.propagateConfirm = function () {
            _this.props.onConfirm(_this.props.group);
        };
        _this.propagateDelete = function () {
            _this.props.onDelete(_this.props.group);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    GroupPanel.prototype.render = function () {
        return (React.createElement(ExpansionPanel, { active: this.props.active, onToggle: this.propagateToggle, className: classNames('c-group-panel', this.props.className) },
            React.createElement(ExpansionPanelHeader, null,
                React.createElement("span", { className: 'c-group-panel__group-indicator', style: { backgroundColor: this.props.group.color } }),
                React.createElement("span", { className: 'c-group-panel__group-title' }, this.props.group.name)),
            React.createElement(ExpansionPanelBody, null,
                React.createElement("form", null,
                    React.createElement(FormGroup, { label: 'Name' },
                        React.createElement(TextField, { type: 'text', name: 'name', fullWidth: true, value: this.props.group.name || '', onChange: this.propagateValueChange })),
                    React.createElement(FormGroup, { label: 'Id' },
                        React.createElement(TextField, { type: 'text', name: 'id', fullWidth: true, value: this.props.group.id || '', onChange: this.propagateValueChange })),
                    React.createElement(FormGroup, { label: 'Color' },
                        React.createElement(TextField, { type: 'text', name: 'color', fullWidth: true, value: this.props.group.color || '', onChange: this.propagateValueChange })),
                    React.createElement(FormGroup, { label: 'Description' },
                        React.createElement(TextField, { name: 'description', multiline: true, rows: '5', rowsMax: '10', fullWidth: true, value: this.props.group.description || '', onChange: this.propagateValueChange }))),
                React.createElement("div", { className: 'c-group-panel__actions' },
                    React.createElement(Button, { onClick: this.propagateConfirm, variant: 'flat' }, "Ok"),
                    React.createElement(Button, { onClick: this.propagateDelete, variant: 'flat' }, "Remove")))));
    };
    return GroupPanel;
}(PureComponent));
export { GroupPanel };
//# sourceMappingURL=index.js.map