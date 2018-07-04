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
import { ApplicationStateProvider, TechnologyRadarProvider } from 'core/store';
import { GlobalThemeProvider, styled } from 'core/utils';
import { MainView } from 'core/ui/views';
import { GlobalBackgroundRoot, ModalRoot, CustomThemeProvider, LayoutProvider } from 'ui/components';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var TechnologyRadar = /** @class */ (function (_super) {
    __extends(TechnologyRadar, _super);
    function TechnologyRadar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechnologyRadar.prototype.render = function () {
        var _a = this.props, layout = _a.layout, theme = _a.theme, config = _a.config, data = _a.data;
        return (React.createElement(LayoutProvider, { layout: layout },
            React.createElement(CustomThemeProvider, { theme: theme },
                React.createElement(GlobalThemeProvider, { theme: theme || require('public/theme.default.json') },
                    React.createElement(ApplicationStateProvider, { state: config },
                        React.createElement(TechnologyRadarProvider, { state: data },
                            React.createElement(MainView, null),
                            React.createElement(ModalRoot, null),
                            React.createElement(GlobalBackgroundRoot, null)))))));
    };
    TechnologyRadar.defaultProps = {
        data: require('public/data.json').technologyRadar,
        config: require('public/data.json').application,
        layout: require('public/layout.json'),
        theme: require('public/theme.json'),
    };
    TechnologyRadar = __decorate([
        styled(styles)
    ], TechnologyRadar);
    return TechnologyRadar;
}(PureComponent));
export { TechnologyRadar };
//# sourceMappingURL=index.js.map