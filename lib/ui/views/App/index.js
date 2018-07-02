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
import { ApplicationStateContext } from 'core/store';
import { TechnologyRadar } from 'core/ui/modules/TechnologyRadar';
import { TechnologyList } from 'core/ui/modules/TechnologList';
import { TechnologyDetails } from 'core/ui/modules/TechnologyDetails';
import { Header } from 'core/ui/modules/Header';
import { Footer } from 'core/ui/modules/Footer';
import { Modal } from 'core/ui/components/Modal';
import { AsyncComponent } from 'core/ui/components/AsyncComponent';
import { BottomSheet } from 'core/ui/components/BottomSheet';
import { debounce } from 'core/utils/debounce';
import { consume } from 'core/utils/store';
import { classNames, canUseDOM } from 'core/utils/dom';
import './styles.scss';
// ----------------------------------------------------------------------------- Implementation
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.windowResizeHandler = function () {
            debounce('app', function () {
                _this.props.updateBreakpoint(window.innerWidth, window.innerHeight);
            });
        };
        _this.technologyDetailsClosedHandler = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            _this.props.selectTechnology(null);
        };
        _this.setEditModeHandler = function () {
            if (event.defaultPrevented) {
                return;
            }
            _this.props.setEditMode(false);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    App.prototype.componentDidMount = function () {
        if (!canUseDOM()) {
            return;
        }
        var updateBreakpoint = this.props.updateBreakpoint;
        window.addEventListener('resize', this.windowResizeHandler);
        updateBreakpoint(window.innerWidth, window.innerHeight);
    };
    App.prototype.componentWillUnmount = function () {
        if (!canUseDOM()) {
            return;
        }
        window.removeEventListener('resize', this.windowResizeHandler);
    };
    App.prototype.render = function () {
        var _a = this.props, editMode = _a.editMode, selectedTechnology = _a.selectedTechnology, viewMode = _a.viewMode;
        var modifiers = [
            selectedTechnology && 'c-app--selected-technology',
            "c-app--view-" + viewMode
        ];
        return (React.createElement("main", { className: classNames.apply(void 0, ['c-app'].concat(modifiers)) },
            React.createElement(Header, null),
            React.createElement("section", { className: 'c-app__content-wrapper c-app__content-wrapper--radar' },
                React.createElement("div", { className: 'c-app__technology-radar' },
                    React.createElement(TechnologyRadar, { className: 'c-app__content c-app__technology-radar-content' }))),
            React.createElement("section", { className: 'c-app__content-wrapper c-app__content-wrapper--list' },
                React.createElement(TechnologyList, { className: 'c-app__content c-app__technology-list-content' })),
            React.createElement(BottomSheet, { active: Boolean(selectedTechnology), onClose: this.technologyDetailsClosedHandler },
                React.createElement(TechnologyDetails, null)),
            React.createElement(Modal, { open: editMode, type: 'sidebar', onClose: this.setEditModeHandler }, this.props.editor &&
                React.createElement(AsyncComponent, { onLoad: function () { return import('core/ui/modules/SettingsPanel'); }, componentName: 'SettingsPanel' }, "Loading...")),
            React.createElement(Footer, null)));
    };
    App = __decorate([
        consume(ApplicationStateContext, {
            select: ['editMode', 'editor', 'selectTechnology', 'selectedTechnology', 'viewMode', 'updateBreakpoint']
        })
    ], App);
    return App;
}(PureComponent));
export { App };
//# sourceMappingURL=index.js.map