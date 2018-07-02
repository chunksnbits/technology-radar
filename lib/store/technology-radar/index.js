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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent, createContext } from 'react';
import produce from 'immer';
import { consume } from 'core/utils/store';
import { ApplicationStateContext } from '../application-state';
import { defaultState, defaultTechnology, defaultGroup } from './constants';
export var TechnologyRadarContext = createContext({});
// ----------------------------------------------------------------------------- Implementation
var TechnologyRadarProvider = /** @class */ (function (_super) {
    __extends(TechnologyRadarProvider, _super);
    function TechnologyRadarProvider(props) {
        var _this = _super.call(this, props) || this;
        var initialState = Object.assign({}, defaultState, props.initialState || {});
        _this.state = __assign({}, initialState, { technologies: _this.sortTechnologies(initialState.technologies, initialState.groups), createNew: _this.createNew.bind(_this), edit: _this.edit.bind(_this), addGroup: _this.addGroup.bind(_this), addTechnology: _this.addTechnology.bind(_this), updateGroup: _this.updateGroup.bind(_this), updateTechnology: _this.updateTechnology.bind(_this), removeGroup: _this.removeGroup.bind(_this), removeTechnology: _this.removeTechnology.bind(_this), clearAll: _this.clearAll.bind(_this) });
        return _this;
    }
    TechnologyRadarProvider.prototype.render = function () {
        return (React.createElement(TechnologyRadarContext.Provider, { value: Object.assign({}, this.state, this) }, this.props.children));
    };
    // ----------------------------------------------------------------------------- Action methods
    TechnologyRadarProvider.prototype.createNew = function () {
        var _this = this;
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.edited = true;
            _this.props.applicationState.setOwner(true);
            _this.props.applicationState.setEditMode(true);
        }); });
    };
    TechnologyRadarProvider.prototype.edit = function () {
        this.props.applicationState.setEditMode(true);
    };
    TechnologyRadarProvider.prototype.addGroup = function () {
        var _this = this;
        this.setState(function (state) { return produce(state, function (draftState) {
            var group = defaultGroup(draftState.groups.length);
            draftState.groups.push(group);
            draftState.edited = true;
            _this.props.applicationState.selectGroup(group);
            return draftState;
        }); });
    };
    TechnologyRadarProvider.prototype.addTechnology = function (group) {
        var _this = this;
        this.setState(function (state) { return produce(state, function (draftState) {
            var technology = defaultTechnology(group);
            draftState.technologies.push(technology);
            draftState.technologies = _this.sortTechnologies(draftState.technologies, draftState.groups);
            draftState.edited = true;
            _this.props.applicationState.selectTechnology(technology);
            return draftState;
        }); });
    };
    TechnologyRadarProvider.prototype.updateGroup = function (group, key, value) {
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.groups = draftState.groups.map(function (acc) {
                var _a;
                return group.id === acc.id ? __assign({}, group, (_a = {}, _a[key] = value, _a)) : acc;
            });
            draftState.edited = true;
            return draftState;
        }); });
    };
    TechnologyRadarProvider.prototype.updateTechnology = function (technology, key, value) {
        var _this = this;
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.technologies = draftState.technologies.map(function (acc) {
                var _a;
                return technology.id === acc.id ? __assign({}, technology, (_a = {}, _a[key] = value, _a)) : acc;
            });
            draftState.technologies = _this.sortTechnologies(draftState.technologies, draftState.groups);
            draftState.edited = true;
            return draftState;
        }); });
    };
    TechnologyRadarProvider.prototype.removeGroup = function (group) {
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.groups = draftState.groups.filter(function (acc) { return acc.id !== group.id; });
            draftState.technologies = draftState.technologies.filter(function (acc) { return acc.groupId !== group.id; });
            return draftState;
        }); });
    };
    TechnologyRadarProvider.prototype.removeTechnology = function (technology) {
        var _this = this;
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.technologies = draftState.technologies.filter(function (acc) { return acc.id !== technology.id; });
            draftState.technologies = _this.sortTechnologies(draftState.technologies, draftState.groups);
            return draftState;
        }); });
    };
    TechnologyRadarProvider.prototype.clearAll = function () {
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.technologies = [];
            draftState.groups = [];
            draftState.edited = true;
            return draftState;
        }); });
    };
    // ----------------------------------------------------------------------------- Helpers methods
    TechnologyRadarProvider.prototype.sortTechnologies = function (technologies, groups) {
        var _this = this;
        return technologies.sort(function (technology, other) {
            if (technology.groupId !== other.groupId) {
                return _this.groupIndex(groups, technology) - _this.groupIndex(groups, other);
            }
            if (technology.level !== other.level) {
                return technology.level - other.level;
            }
            return technology.id > other.id ? -1 : 1;
        });
    };
    TechnologyRadarProvider.prototype.groupIndex = function (groups, technology) {
        return groups.findIndex(function (acc) { return acc.id === technology.groupId; });
    };
    TechnologyRadarProvider = __decorate([
        consume(ApplicationStateContext, { bindTo: 'applicationState' })
    ], TechnologyRadarProvider);
    return TechnologyRadarProvider;
}(PureComponent));
export { TechnologyRadarProvider };
//# sourceMappingURL=index.js.map