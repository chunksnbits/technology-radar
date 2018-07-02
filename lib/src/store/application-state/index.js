"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var react_1 = require("react");
var immer_1 = require("immer");
var dom_1 = require("core/utils/dom");
var store_1 = require("core/utils/store");
var collection_1 = require("core/utils/collection");
var constants_1 = require("./constants");
var SESSION_STORAGE_KEY = 'cnb--application-state';
exports.ApplicationStateContext = react_1.createContext({});
var ApplicationStateProvider = /** @class */ (function (_super) {
    __extends(ApplicationStateProvider, _super);
    function ApplicationStateProvider(props) {
        var _this = _super.call(this, props) || this;
        var initialState = collection_1.merge(constants_1.defaultState, props.initialState);
        _this.state = __assign({}, initialState, { reset: _this.reset.bind(_this), focusTechnology: _this.focusTechnology.bind(_this), selectTechnology: _this.selectTechnology.bind(_this), selectGroup: _this.selectGroup.bind(_this), updateBreakpoint: _this.updateBreakpoint.bind(_this), toggleViewMode: _this.toggleViewMode.bind(_this) });
        return _this;
    }
    ApplicationStateProvider.prototype.componentWillMount = function () {
        this.restoreState();
    };
    ApplicationStateProvider.prototype.render = function () {
        return (React.createElement(exports.ApplicationStateContext.Provider, { value: this.state }, this.props.children));
    };
    // ----------------------------------------------------------------------------- Action methods
    ApplicationStateProvider.prototype.updateBreakpoint = function (width) {
        var _this = this;
        this.setState(function (state) { return immer_1.default(state, function (draftState) {
            if (width < _this.state.theme.breakpoints.medium) {
                draftState.breakpoint = 'small';
            }
            else if (width < _this.state.theme.breakpoints.large) {
                draftState.breakpoint = 'medium';
            }
            else {
                draftState.breakpoint = 'large';
            }
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.reset = function () {
        this.setState(function (state) { return immer_1.default(state, function (draftState) {
            draftState.selectedTechnology = null;
            draftState.selectedGroup = null;
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.focusTechnology = function (focused) {
        if (focused === this.state.focusedTechnology) {
            return;
        }
        this.setState(function (state) { return immer_1.default(state, function (draftState) {
            draftState.focusedTechnology = focused;
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.selectTechnology = function (selected) {
        if (selected === this.state.selectedTechnology) {
            return;
        }
        this.setState(function (state) { return immer_1.default(state, function (draftState) {
            draftState.selectedTechnology = selected;
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.selectGroup = function (selected) {
        if (selected === this.state.selectedGroup) {
            return;
        }
        this.setState(function (state) { return immer_1.default(state, function (draftState) {
            draftState.selectedGroup = selected;
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.toggleViewMode = function () {
        this.setState(function (state) { return immer_1.default(state, function (draftState) {
            draftState.viewMode = draftState.viewMode === 'list' ? 'radar' : 'list';
            return draftState;
        }); });
    };
    ApplicationStateProvider.prototype.restoreState = function () {
        if (!dom_1.canUseSessionStorage()) {
            return;
        }
        this.setState(function (state) { return immer_1.default(state, function (draftState) {
            return Object.assign(draftState, store_1.restoreState(SESSION_STORAGE_KEY) || {});
        }); });
    };
    return ApplicationStateProvider;
}(react_1.PureComponent));
exports.ApplicationStateProvider = ApplicationStateProvider;
//# sourceMappingURL=index.js.map