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
var store_1 = require("core/store");
var TechnologyRadar_1 = require("core/ui/modules/TechnologyRadar");
var TechnologList_1 = require("core/ui/modules/TechnologList");
var TechnologyDetails_1 = require("core/ui/modules/TechnologyDetails");
var Header_1 = require("core/ui/modules/Header");
var Footer_1 = require("core/ui/modules/Footer");
var BottomSheet_1 = require("core/ui/components/BottomSheet");
var debounce_1 = require("core/utils/debounce");
var store_2 = require("core/utils/store");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
// ----------------------------------------------------------------------------- Implementation
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Event handler methods
        _this.windowResizeHandler = function () {
            debounce_1.debounce('app', function () {
                _this.props.updateBreakpoint(window.innerWidth, window.innerHeight);
            });
        };
        _this.technologyDetailsClosedHandler = function (event) {
            if (event.defaultPrevented) {
                return;
            }
            _this.props.selectTechnology(null);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    App.prototype.componentDidMount = function () {
        if (!dom_1.canUseDOM()) {
            return;
        }
        var updateBreakpoint = this.props.updateBreakpoint;
        window.addEventListener('resize', this.windowResizeHandler);
        updateBreakpoint(window.innerWidth, window.innerHeight);
    };
    App.prototype.componentWillUnmount = function () {
        if (!dom_1.canUseDOM()) {
            return;
        }
        window.removeEventListener('resize', this.windowResizeHandler);
    };
    App.prototype.render = function () {
        var _a = this.props, selectedTechnology = _a.selectedTechnology, viewMode = _a.viewMode;
        var modifiers = [
            selectedTechnology && 'c-app--selected-technology',
            "c-app--view-" + viewMode
        ];
        return (React.createElement("main", { className: dom_1.classNames.apply(void 0, ['c-app'].concat(modifiers)) },
            React.createElement(Header_1.Header, null),
            React.createElement("section", { className: 'c-app__content-wrapper c-app__content-wrapper--radar' },
                React.createElement("div", { className: 'c-app__technology-radar' },
                    React.createElement(TechnologyRadar_1.TechnologyRadar, { className: 'c-app__content c-app__technology-radar-content' }))),
            React.createElement("section", { className: 'c-app__content-wrapper c-app__content-wrapper--list' },
                React.createElement(TechnologList_1.TechnologyList, { className: 'c-app__content c-app__technology-list-content' })),
            React.createElement(BottomSheet_1.BottomSheet, { active: Boolean(selectedTechnology), onClose: this.technologyDetailsClosedHandler },
                React.createElement(TechnologyDetails_1.TechnologyDetails, null)),
            React.createElement(Footer_1.Footer, null)));
    };
    App = __decorate([
        store_2.consume(store_1.ApplicationStateContext, {
            select: ['editMode', 'editor', 'selectTechnology', 'selectedTechnology', 'viewMode', 'updateBreakpoint']
        })
    ], App);
    return App;
}(react_1.PureComponent));
exports.App = App;
//# sourceMappingURL=index.js.map