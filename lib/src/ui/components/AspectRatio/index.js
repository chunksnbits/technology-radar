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
import { classNames, styled, consume } from 'utils';
import { styles } from './styles.jss';
import { LayoutProviderContext } from '../LayoutProvider';
// ----------------------------------------------------------------------------- Implementation
var AspectRatio = /** @class */ (function (_super) {
    __extends(AspectRatio, _super);
    function AspectRatio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    AspectRatio.prototype.render = function () {
        var _a = this.props, ratio = _a.ratio, className = _a.className, classes = _a.classes, layout = _a.layout;
        var modificators = [
            layout.orientation === 'landscape' ? classes.aspectRatioLandscape : classes.aspectRatioPortrait,
        ];
        return (React.createElement("svg", { className: classNames.apply(void 0, [classes.aspectRatioRoot, className].concat(modificators)), viewBox: "0 0 100 " + 100 * ratio, preserveAspectRatio: 'xMidYMid slice' },
            React.createElement("rect", { width: 100, height: 100 * ratio, fill: 'none' })));
    };
    AspectRatio = __decorate([
        styled(styles),
        consume(LayoutProviderContext, { bindTo: 'layout' })
    ], AspectRatio);
    return AspectRatio;
}(PureComponent));
export { AspectRatio };
//# sourceMappingURL=index.js.map