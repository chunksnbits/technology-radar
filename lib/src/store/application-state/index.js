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
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { createContext, Component } from 'react';
import produce from 'immer';
import { canUseSessionStorage } from 'core/utils/dom';
import { restoreState } from 'core/utils/store';
import { mergeAll } from 'core/utils/collection';
import { defaultState } from './constants';
var SESSION_STORAGE_KEY = 'cnb--application-state';
export var ApplicationStateContext = createContext({});
var ApplicationStateProvider = /** @class */ (function (_super) {
    __extends(ApplicationStateProvider, _super);
    function ApplicationStateProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = __assign({}, mergeAll(defaultState, props.state || {}, _this.restoreState()), { reset: _this.reset.bind(_this), focusTechnology: _this.focusTechnology.bind(_this), selectTechnology: _this.selectTechnology.bind(_this), selectGroup: _this.selectGroup.bind(_this), toggleViewMode: _this.toggleViewMode.bind(_this) });
        return _this;
    }
    ApplicationStateProvider.prototype.render = function () {
        return (React.createElement(ApplicationStateContext.Provider, { value: __assign({}, this.props.state, this.state) }, this.props.children));
    };
    // ----------------------------------------------------------------------------- Action methods
    ApplicationStateProvider.prototype.reset = function () {
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.selectedTechnology = null;
            draftState.selectedGroup = null;
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.focusTechnology = function (focused) {
        if (focused === this.state.focusedTechnology) {
            return;
        }
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.focusedTechnology = focused;
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.selectTechnology = function (selected) {
        if (selected === this.state.selectedTechnology) {
            return;
        }
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.selectedTechnology = selected;
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.selectGroup = function (selected) {
        if (selected === this.state.selectedGroup) {
            return;
        }
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.selectedGroup = selected;
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.toggleViewMode = function () {
        this.setState(function (state) { return produce(state, function (draftState) {
            draftState.viewMode = draftState.viewMode === 'list' ? 'radar' : 'list';
            return draftState;
        }); });
    };
    // ----------------------------------------------------------------------------- Helpers methods
    ApplicationStateProvider.prototype.restoreState = function () {
        if (!canUseSessionStorage()) {
            return {};
        }
        return restoreState(SESSION_STORAGE_KEY) || {};
    };
    return ApplicationStateProvider;
}(Component));
export { ApplicationStateProvider };
//# sourceMappingURL=index.js.map