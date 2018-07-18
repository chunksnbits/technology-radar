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
import { ApplicationStateContext, TechnologyRadarContext } from 'store';
import { styled, consume, classNames } from 'utils';
import { GlobalBackground, TextButton, Logo } from '../../components';
import { TechnologyDetailsNavigation } from './components/TechnologyDetailsNavigation';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var TechnologyDetails = /** @class */ (function (_super) {
    __extends(TechnologyDetails, _super);
    function TechnologyDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.selectGroupHandler = function () {
            var _a = _this.props, groups = _a.groups, selectedTechnology = _a.selectedTechnology, selectGroup = _a.selectGroup, selectTechnology = _a.selectTechnology;
            var group = _this.findGroupForTechnology(selectedTechnology, groups);
            selectGroup(group);
            selectTechnology(null);
        };
        _this.selectTechnologyHandler = function (technology) {
            var selectTechnology = _this.props.selectTechnology;
            selectTechnology(technology);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TechnologyDetails.prototype.render = function () {
        var _a = this.props, selectedTechnology = _a.selectedTechnology, groups = _a.groups, technologies = _a.technologies, classes = _a.classes;
        var active = Boolean(selectedTechnology);
        var modifiers = [
            active && classes.technologyDetailsActive,
        ];
        var group = this.findGroupForTechnology(selectedTechnology, groups);
        return (React.createElement("div", { className: classNames.apply(void 0, [classes.root, this.props.className].concat(modifiers)) },
            active && Boolean(selectedTechnology.logo) &&
                React.createElement(GlobalBackground, null,
                    React.createElement(Logo, { className: classes.technologyDetailsLogo, name: selectedTechnology.logo, color: group && group.color })),
            React.createElement("div", { className: classes.technologyDetailsContent },
                React.createElement("div", { className: classes.technologyDetailsTitle },
                    React.createElement("h3", { className: classes.technologyDetailsName }, selectedTechnology && selectedTechnology.name),
                    React.createElement(TextButton, { onClick: this.selectGroupHandler, className: classes.technologyDetailsGroup },
                        React.createElement("span", { className: classes.technologyDetailsGroupColor, style: {
                                borderColor: Boolean(group) ? group.color : 'transparent',
                            } }),
                        React.createElement("span", { className: classes.technologyDetailsGroupName }, Boolean(group) ? group.name : null))),
                React.createElement("p", { className: classes.technologyDetailsDescription }, selectedTechnology && selectedTechnology.description)),
            React.createElement(TechnologyDetailsNavigation, { className: classes.technologyDetailsNavigation, selectedTechnology: selectedTechnology, technologies: technologies, onSelect: this.selectTechnologyHandler })));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    TechnologyDetails.prototype.findGroupForTechnology = function (technology, groups) {
        if (!technology) {
            return null;
        }
        return groups.find(function (group) { return group.id === technology.groupId; });
    };
    TechnologyDetails = __decorate([
        consume(ApplicationStateContext, { select: ['selectedTechnology', 'selectTechnology', 'selectGroup'] }),
        consume(TechnologyRadarContext, { select: ['groups', 'technologies'] }),
        styled(styles)
    ], TechnologyDetails);
    return TechnologyDetails;
}(PureComponent));
export { TechnologyDetails };
//# sourceMappingURL=index.js.map