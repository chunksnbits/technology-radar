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
import { consume } from 'utils/store';
import { ApplicationStateContext } from '../application-state';
export var TechnologyRadarContext = createContext({});
// ----------------------------------------------------------------------------- Implementation
var TechnologyRadarProviderComponent = /** @class */ (function (_super) {
    __extends(TechnologyRadarProviderComponent, _super);
    function TechnologyRadarProviderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechnologyRadarProviderComponent.prototype.render = function () {
        var _a = this.props.state, technologies = _a.technologies, groups = _a.groups;
        var state = __assign({}, this.props.state, { technologies: this.sortTechnologies(technologies, groups) });
        return (React.createElement(TechnologyRadarContext.Provider, { value: Object.assign({}, state, this) }, this.props.children));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    TechnologyRadarProviderComponent.prototype.sortTechnologies = function (technologies, groups) {
        var _this = this;
        if (!Boolean(technologies)) {
            return [];
        }
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
    TechnologyRadarProviderComponent.prototype.groupIndex = function (groups, technology) {
        return groups.findIndex(function (acc) { return acc.id === technology.groupId; });
    };
    return TechnologyRadarProviderComponent;
}(PureComponent));
export { TechnologyRadarProviderComponent };
// ----------------------------------------------------------------------------- Export
// tslint:disable-next-line:max-classes-per-file
var TechnologyRadarProvider = /** @class */ (function (_super) {
    __extends(TechnologyRadarProvider, _super);
    function TechnologyRadarProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechnologyRadarProvider = __decorate([
        consume(ApplicationStateContext, { bindTo: 'applicationState' })
    ], TechnologyRadarProvider);
    return TechnologyRadarProvider;
}(TechnologyRadarProviderComponent));
export { TechnologyRadarProvider };
//# sourceMappingURL=index.js.map