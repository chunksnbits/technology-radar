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
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, Children, cloneElement } from 'react';
import * as React from 'react';
import { classNames } from 'core/utils/dom';
import './styles.scss';
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
        var modifiers = [];
        if (Children.count(this.props.children) !== 1) {
            throw new Error("INVALID_PROPS. Expected element 'FormGroup' to have exactly one child.");
        }
        var child = Children.only(this.props.children);
        var name = child.props.name || this.id;
        return (React.createElement("div", { className: classNames.apply(void 0, ['c-form-group', this.props.className].concat(modifiers)) },
            this.props.label &&
                React.createElement("label", { htmlFor: name, className: 'c-form-group__label' }, this.props.label),
            React.createElement("span", { className: 'c-form-group__input' }, cloneElement(child, { className: 'c-form-group__input-element', name: name }))));
    };
    return FormGroup;
}(PureComponent));
export { FormGroup };
//# sourceMappingURL=index.js.map