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
import * as React from 'react';
import { PureComponent } from 'react';
import { ApplicationStateContext } from 'store';
import { TechnologyGraph, TechnologyList, TechnologyDetails, Header, Footer } from '../../modules';
import { AspectRatio, BottomSheet } from '../../components';
import { consume, classNames, styled, capitalize } from 'utils';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var MainView = /** @class */ (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.technologyDetailsClosedHandler = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            _this.props.selectTechnology(null);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    MainView.prototype.render = function () {
        var _a = this.props, selectedTechnology = _a.selectedTechnology, viewMode = _a.viewMode, classes = _a.classes;
        var modifiers = [
            selectedTechnology && classes.technologyRadarSelectedTechnology,
            classes["technologyRadarView" + capitalize(viewMode)],
        ];
        return (React.createElement("main", { className: classNames.apply(void 0, [classes.root].concat(modifiers)) },
            React.createElement(Header, null),
            React.createElement("section", { className: classNames(classes.technologyRadarContentWrapper, classes.technologyRadarContentWrapperRadar) },
                React.createElement("div", { className: classes.technologyRadarTechnologyRadar },
                    React.createElement(AspectRatio, { className: classes.technologyGraphAspectRatio, ratio: 1 }),
                    React.createElement(TechnologyGraph, { className: classNames(classes.technologyRadarContent, classes.technologyRadarTechnologyRadarContent) }))),
            React.createElement("section", { className: classNames(classes.technologyRadarContentWrapper, classes.technologyRadarContentWrapperList) },
                React.createElement(TechnologyList, { className: classNames(classes.technologyRadarContent, classes.technologyRadarTechnologyListContent) })),
            React.createElement(BottomSheet, { active: Boolean(selectedTechnology), onClose: this.technologyDetailsClosedHandler },
                React.createElement(TechnologyDetails, null)),
            React.createElement(Footer, null)));
    };
    MainView = __decorate([
        consume(ApplicationStateContext, {
            select: ['selectTechnology', 'selectedTechnology', 'viewMode'],
        }),
        styled(styles)
    ], MainView);
    return MainView;
}(PureComponent));
export { MainView };
//# sourceMappingURL=index.js.map