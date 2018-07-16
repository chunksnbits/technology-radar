// tslint:disable:max-classes-per-file
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
import { createPortal } from 'react-dom';
import * as React from 'react';
import { classNames, canUseDOM, styled } from 'utils';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
export var GLOBAL_BACKGROUND_ANCHOR_ID = 'g-global-background';
var GlobalBackgroundRoot = /** @class */ (function (_super) {
    __extends(GlobalBackgroundRoot, _super);
    function GlobalBackgroundRoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalBackgroundRoot.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement("div", { id: GLOBAL_BACKGROUND_ANCHOR_ID, className: classes.globalBackgroundAnchor }));
    };
    GlobalBackgroundRoot = __decorate([
        styled(styles)
    ], GlobalBackgroundRoot);
    return GlobalBackgroundRoot;
}(PureComponent));
export { GlobalBackgroundRoot };
// ----------------------------------------------------------------------------- Implementation
var GlobalBackground = /** @class */ (function (_super) {
    __extends(GlobalBackground, _super);
    function GlobalBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    GlobalBackground.prototype.render = function () {
        if (!canUseDOM()) {
            return null;
        }
        var position = this.props.position;
        var root = document.querySelector('technology-radar').shadowRoot ?
            document.querySelector('technology-radar').shadowRoot :
            document;
        try {
            var container = root.querySelector("#" + GLOBAL_BACKGROUND_ANCHOR_ID);
            if (container === null) {
                console.warn('[GLOBAL_BACKGROUND] <GlobalBackgroundRoot /> element not found. Be sure to attach.');
                return null;
            }
            container.classList.add("c-global-background--" + (position || 'auto'));
            return createPortal(this.renderContent(), container);
        }
        catch (error) {
            console.warn('[GLOBAL_BACKGROUND] Failed to access global background.');
        }
        return null;
    };
    // ----------------------------------------------------------------------------- Helpers methods
    GlobalBackground.prototype.renderContent = function () {
        var _a = this.props, classes = _a.classes, className = _a.className, children = _a.children;
        return (React.createElement("div", { className: classNames(classes.globalBackground, className) }, children));
    };
    GlobalBackground = __decorate([
        styled(styles)
    ], GlobalBackground);
    return GlobalBackground;
}(PureComponent));
export { GlobalBackground };
//# sourceMappingURL=index.js.map