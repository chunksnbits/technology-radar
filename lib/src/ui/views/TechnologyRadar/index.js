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
import { ApplicationStateProvider, TechnologyRadarProvider, ThemeProvider, LayoutProvider } from 'store';
import { styled } from 'utils';
import { MainView } from '..';
import { GlobalBackgroundRoot, ModalRoot, LayoutMonitor } from '../../components';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var TechnologyRadar = /** @class */ (function (_super) {
    __extends(TechnologyRadar, _super);
    function TechnologyRadar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechnologyRadar.prototype.render = function () {
        var _a = this.props, layout = _a.layout, theme = _a.theme, applicationConfig = _a.applicationConfig, data = _a.data;
        return (React.createElement(LayoutProvider, { layout: layout },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(ApplicationStateProvider, { state: applicationConfig },
                    React.createElement(TechnologyRadarProvider, { state: data },
                        React.createElement(LayoutMonitor, null,
                            React.createElement(MainView, null),
                            React.createElement(ModalRoot, null),
                            React.createElement(GlobalBackgroundRoot, null)))))));
    };
    TechnologyRadar = __decorate([
        styled(styles)
    ], TechnologyRadar);
    return TechnologyRadar;
}(PureComponent));
export { TechnologyRadar };
//# sourceMappingURL=index.js.map