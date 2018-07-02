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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var react_1 = require("react");
var store_1 = require("core/utils/store");
var application_state_1 = require("../application-state");
var constants_1 = require("./constants");
exports.TechnologyRadarContext = react_1.createContext({});
// ----------------------------------------------------------------------------- Implementation
var TechnologyRadarProvider = /** @class */ (function (_super) {
    __extends(TechnologyRadarProvider, _super);
    function TechnologyRadarProvider(props) {
        var _this = _super.call(this, props) || this;
        var initialState = Object.assign({}, constants_1.defaultState, props.initialState || {});
        _this.state = __assign({}, initialState, { technologies: _this.sortTechnologies(initialState.technologies, initialState.groups) });
        return _this;
    }
    TechnologyRadarProvider.prototype.render = function () {
        return (React.createElement(exports.TechnologyRadarContext.Provider, { value: Object.assign({}, this.state, this) }, this.props.children));
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
        store_1.consume(application_state_1.ApplicationStateContext, { bindTo: 'applicationState' })
    ], TechnologyRadarProvider);
    return TechnologyRadarProvider;
}(react_1.PureComponent));
exports.TechnologyRadarProvider = TechnologyRadarProvider;
//# sourceMappingURL=index.js.map