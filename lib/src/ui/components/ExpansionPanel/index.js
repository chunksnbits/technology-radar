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
import * as React from 'react';
import { styled, classNames } from 'core/utils';
import { Icon } from '../Icon';
import { styles } from './styles.jss';
var ExpansionPanelHeader = /** @class */ (function (_super) {
    __extends(ExpansionPanelHeader, _super);
    function ExpansionPanelHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpansionPanelHeader.prototype.render = function () { return this.props.children; };
    return ExpansionPanelHeader;
}(PureComponent));
export { ExpansionPanelHeader };
var ExpansionPanelBody = /** @class */ (function (_super) {
    __extends(ExpansionPanelBody, _super);
    function ExpansionPanelBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpansionPanelBody.prototype.render = function () { return this.props.children; };
    return ExpansionPanelBody;
}(PureComponent));
export { ExpansionPanelBody };
var ExpansionPanelFooter = /** @class */ (function (_super) {
    __extends(ExpansionPanelFooter, _super);
    function ExpansionPanelFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpansionPanelFooter.prototype.render = function () { return this.props.children; };
    return ExpansionPanelFooter;
}(PureComponent));
export { ExpansionPanelFooter };
// ----------------------------------------------------------------------------- Implementation
var ExpansionPanel = /** @class */ (function (_super) {
    __extends(ExpansionPanel, _super);
    function ExpansionPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Helpers methods
        _this.propagateToggle = function () {
            return _this.props.onToggle(!_this.props.active);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    ExpansionPanel.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, classes = _a.classes;
        var modifiers = [
            this.props.active && classes.expansionPanelActive,
        ];
        var allChildren = React.Children.toArray(children);
        var header = allChildren.filter(function (child) { return child.type === ExpansionPanelHeader; });
        var body = allChildren.filter(function (child) { return child.type === ExpansionPanelBody; });
        var footer = allChildren.filter(function (child) { return child.type === ExpansionPanelFooter; });
        return (React.createElement("div", { className: classNames.apply(void 0, [classes.expansionPanel, className].concat(modifiers)) },
            header.length > 0 && (React.createElement("button", { className: classes.expansionPanelHeader, onClick: this.propagateToggle },
                React.createElement("div", { className: classes.expansionPanelHeaderTitle }, header),
                React.createElement(Icon, { name: 'arrow-down', className: classes.expansionPanelIcon }))),
            body.length > 0 && (React.createElement("div", { className: classes.expansionPanelBody }, body)),
            footer.length > 0 && (React.createElement("div", { className: classes.expansionPanelFooter }, footer))));
    };
    ExpansionPanel = __decorate([
        styled(styles)
    ], ExpansionPanel);
    return ExpansionPanel;
}(PureComponent));
export { ExpansionPanel };
//# sourceMappingURL=index.js.map