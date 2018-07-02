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
import * as React from 'react';
import { Fragment, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { classNames, canUseDOM } from 'core/utils/dom';
import './styles.scss';
import { Button } from '@material-ui/core';
import { Icon } from 'core/ui/components/Icon';
// ----------------------------------------------------------------------------- Implementation
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootClassName = 'c-modal';
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Modal.prototype.render = function () {
        // tslint:disable-next-line:no-console
        if (this.props.position !== 'parent' && (!canUseDOM() || document.getElementById('g-modal') === null)) {
            return null;
        }
        if (this.props.position === 'parent') {
            return this.renderDialog(this.props);
        }
        return createPortal(this.renderDialog(this.props), document.getElementById('g-modal'));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    Modal.prototype.renderDialog = function (props) {
        var modifiers = [
            typeof this.props.type === 'string' && "c-modal--" + this.props.type,
            this.props.open && "c-modal--opened"
        ];
        return (React.createElement(Fragment, null,
            this.isShowBackdrop() && React.createElement("div", { className: 'c-modal__backdrop', onClick: this.props.onClose }),
            React.createElement("div", { className: classNames.apply(void 0, [this.rootClassName, props.className].concat(modifiers)) },
                React.createElement("dialog", { className: 'c-modal__dialog', open: Boolean(props.open) },
                    React.createElement("nav", { className: 'c-modal__nav' },
                        React.createElement(Button, { onClick: this.props.onClose, className: 'c-modal__nav-action c-modal__nav-action--close', variant: 'flat' },
                            React.createElement(Icon, { name: 'close', className: 'c-modal__nav-action-icon' }))),
                    React.createElement("section", { className: 'c-modal__content' }, props.children)))));
    };
    Modal.prototype.isShowBackdrop = function () {
        return this.props.open && Boolean(this.props.onCloseOutside);
    };
    return Modal;
}(PureComponent));
export { Modal };
//# sourceMappingURL=index.js.map