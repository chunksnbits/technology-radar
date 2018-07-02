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
import { TechnologyRadarContext } from 'core/store';
import { consume } from 'core/utils/store';
import { classNames } from 'core/utils/dom';
import { Tabs, TabBody, TabHeader, Tab } from 'core/ui/components/Tabs';
import { Groups } from './components/Groups';
import { Technologies } from './components/Technologies';
import './styles.scss';
// ----------------------------------------------------------------------------- Implementation
var SettingsPanel = /** @class */ (function (_super) {
    __extends(SettingsPanel, _super);
    function SettingsPanel(props) {
        var _this = _super.call(this, props) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.activeTabChangedHandler = function (_, tabName) {
            _this.setState(function () { return ({
                activeTab: tabName
            }); });
        };
        _this.toggleTechnologyHandler = function (technology, active) {
            active = active || !_this.isActiveTechnology(technology);
            _this.setState({
                activeTechnology: active ? technology : null
            });
        };
        _this.confirmTechnologyHandler = function () {
            _this.setState({
                activeTechnology: null
            });
        };
        _this.toggleGroupHandler = function (group, active) {
            active = active || !_this.isActiveGroup(group);
            _this.setState({
                activeGroup: active ? group : null
            });
        };
        _this.confirmGroupHandler = function () {
            _this.setState({
                activeGroup: null
            });
        };
        _this.state = {
            activeTechnology: null,
            activeGroup: null,
            activeTab: 'groups'
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    SettingsPanel.prototype.render = function () {
        var _a = this.props, addGroup = _a.addGroup, addTechnology = _a.addTechnology, groups = _a.groups, clearAll = _a.clearAll, technologies = _a.technologies, updateGroup = _a.updateGroup, updateTechnology = _a.updateTechnology, removeGroup = _a.removeGroup, removeTechnology = _a.removeTechnology;
        return (React.createElement("div", { className: classNames('c-settings-panel', this.props.className) },
            React.createElement(Tabs, { sticky: true },
                React.createElement(TabHeader, { value: this.state.activeTab, onChange: this.activeTabChangedHandler, fullWidth: true },
                    React.createElement(Tab, { label: 'Groups', value: 'groups', fullWidth: true }),
                    React.createElement(Tab, { label: 'Technologies', value: 'technologies', fullWidth: true })),
                React.createElement(TabBody, { active: this.state.activeTab === 'groups' },
                    React.createElement(Groups, { className: 'c-settings-panel__groups', groups: groups, activeGroup: this.state.activeGroup, onToggle: this.toggleGroupHandler, onAdd: addGroup, onClear: clearAll, onConfirm: this.confirmGroupHandler, onChange: updateGroup, onDelete: removeGroup })),
                React.createElement(TabBody, { active: this.state.activeTab === 'technologies' },
                    React.createElement(Technologies, { className: 'c-settings-panel__technologies', technologies: technologies, groups: groups, activeTechnology: this.state.activeTechnology, onToggle: this.toggleTechnologyHandler, onConfirm: this.confirmTechnologyHandler, onAdd: addTechnology, onClear: clearAll, onChange: updateTechnology, onDelete: removeTechnology })))));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    SettingsPanel.prototype.isActiveGroup = function (group) {
        if (Boolean(group) && !Boolean(this.state.activeGroup)) {
            return false;
        }
        if (!Boolean(group)) {
            return false;
        }
        return this.state.activeGroup.id === group.id;
    };
    SettingsPanel.prototype.isActiveTechnology = function (technology) {
        if (Boolean(technology) && !Boolean(this.state.activeTechnology)) {
            return false;
        }
        if (!Boolean(technology)) {
            return false;
        }
        return this.state.activeTechnology.id === technology.id;
    };
    SettingsPanel = __decorate([
        consume(TechnologyRadarContext, {
            select: [
                'addGroup',
                'addTechnology',
                'groups',
                'clearAll',
                'technologies',
                'updateGroup',
                'updateTechnology',
                'removeGroup',
                'removeTechnology'
            ]
        })
    ], SettingsPanel);
    return SettingsPanel;
}(PureComponent));
export { SettingsPanel };
//# sourceMappingURL=index.js.map