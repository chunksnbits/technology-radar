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
import { PureComponent, Children, cloneElement } from 'react';
import * as React from 'react';
import { classNames, styled } from 'core/utils';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var FormGroup = /** @class */ (function (_super) {
    __extends(FormGroup, _super);
    function FormGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "form-group-" + Math.floor(Math.random() * 1000);
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    FormGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, classes = _a.classes, label = _a.label;
        if (Children.count(children) !== 1) {
            throw new Error("INVALID_PROPS. Expected element 'FormGroup' to have exactly one child.");
        }
        var child = Children.only(children);
        var name = child.props.name || this.id;
        return (React.createElement("div", { className: classNames(classes.root, className) },
            label &&
                React.createElement("label", { htmlFor: name, className: classes.formGroupLabel }, label),
            React.createElement("span", { className: classes.formGroupInput }, cloneElement(child, { className: 'c-form-group__input-element', name: name }))));
    };
    FormGroup = __decorate([
        styled(styles)
    ], FormGroup);
    return FormGroup;
}(PureComponent));
export { FormGroup };
//# sourceMappingURL=index.js.map