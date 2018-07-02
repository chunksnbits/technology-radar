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
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import { classNames } from 'core/utils/dom';
import { FormGroup } from 'core/ui/components/FormGroup';
import { ExpansionPanel, ExpansionPanelHeader, ExpansionPanelBody } from 'core/ui/components/ExpansionPanel';
import './styles.scss';
// ----------------------------------------------------------------------------- Implementation
var TechnologyPanel = /** @class */ (function (_super) {
    __extends(TechnologyPanel, _super);
    function TechnologyPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.propagateValueChange = function (event) {
            var target = event.target;
            _this.props.onValueChange(_this.props.technology, target.name, target.value);
        };
        _this.propagateGroupValueChange = function (event, child) {
            var target = event.target;
            _this.props.onValueChange(_this.props.technology, target.name, target.value);
        };
        _this.propagateToggle = function (active) {
            _this.props.onToggle(_this.props.technology, active);
        };
        _this.propagateConfirm = function () {
            _this.props.onConfirm(_this.props.technology);
        };
        _this.propagateDelete = function () {
            _this.props.onDelete(_this.props.technology);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TechnologyPanel.prototype.render = function () {
        var modifiers = [
            this.props.active && 'c-technology-panel--active'
        ];
        return (React.createElement(ExpansionPanel, { active: this.props.active, onToggle: this.propagateToggle, className: classNames.apply(void 0, ['c-technology-panel', this.props.className].concat(modifiers)) },
            React.createElement(ExpansionPanelHeader, null,
                React.createElement("span", { className: 'c-technology-panel__title' }, this.props.technology.name)),
            React.createElement(ExpansionPanelBody, null,
                React.createElement("form", null,
                    React.createElement(FormGroup, { label: 'Name' },
                        React.createElement(TextField, { type: 'text', name: 'name', fullWidth: true, value: this.props.technology.name || '', onChange: this.propagateValueChange })),
                    React.createElement(FormGroup, { label: 'Id' },
                        React.createElement(TextField, { type: 'text', name: 'id', fullWidth: true, value: this.props.technology.id || '', onChange: this.propagateValueChange, disabled: true })),
                    React.createElement(FormGroup, { label: 'Group' },
                        React.createElement(Select, { value: this.props.technology.groupId || '', onChange: this.propagateGroupValueChange, name: 'groupId', fullWidth: true }, this.props.groups.map(function (group) {
                            return (React.createElement(MenuItem, { key: group.id, value: group.id }, group.name));
                        }))),
                    React.createElement(FormGroup, { label: 'Level' },
                        React.createElement(TextField, { type: 'number', name: 'level', fullWidth: true, value: this.props.technology.level || 0, onChange: this.propagateValueChange })),
                    React.createElement(FormGroup, { label: 'Logo' },
                        React.createElement(TextField, { type: 'text', name: 'logo', fullWidth: true, value: this.props.technology.logo || '', onChange: this.propagateValueChange })),
                    React.createElement(FormGroup, { label: 'Description' },
                        React.createElement(TextField, { type: 'text', name: 'description', fullWidth: true, multiline: true, rows: '5', rowsMax: '8', value: this.props.technology.description || '', onChange: this.propagateValueChange }))),
                React.createElement("div", { className: 'c-technology-panel__actions' },
                    React.createElement(Button, { onClick: this.propagateConfirm, variant: 'flat' }, "Ok"),
                    React.createElement(Button, { onClick: this.propagateDelete, variant: 'flat' }, "Remove")))));
    };
    return TechnologyPanel;
}(PureComponent));
export { TechnologyPanel };
//# sourceMappingURL=index.js.map