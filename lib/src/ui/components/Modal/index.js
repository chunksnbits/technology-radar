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
import { Fragment, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@material-ui/core';
import { styled, classNames, canUseDOM } from 'utils';
import { Icon } from '../Icon';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var MODAL_ID = 'modal-anchor';
export function ModalRoot() {
    return React.createElement("div", { id: MODAL_ID });
}
// ----------------------------------------------------------------------------- Implementation
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Modal.prototype.render = function () {
        var container = document.getElementById(MODAL_ID);
        // tslint:disable-next-line:no-console
        if (this.props.position !== 'parent' && (!canUseDOM() || container === null)) {
            return null;
        }
        if (this.props.position === 'parent') {
            return this.renderDialog(this.props);
        }
        return createPortal(this.renderDialog(this.props), container);
    };
    // ----------------------------------------------------------------------------- Helpers methods
    Modal.prototype.renderDialog = function (props) {
        var classes = props.classes, open = props.open, onClose = props.onClose, type = props.type, children = props.children;
        var modifiers = [
            typeof type === 'string' && "c-modal--" + type,
            open && classes.modalOpened,
        ];
        return (React.createElement(Fragment, null,
            this.isShowBackdrop() && React.createElement("div", { className: classes.modalBackdrop, onClick: onClose }),
            React.createElement("div", { className: classNames.apply(void 0, [classes.root, props.className].concat(modifiers)) },
                React.createElement("dialog", { className: classes.modalDialog, open: Boolean(props.open) },
                    React.createElement("nav", { className: classes.modalNav },
                        React.createElement(Button, { onClick: onClose, className: classNames(classes.modalNavAction, classes.modalNavActionClose), variant: 'flat' },
                            React.createElement(Icon, { name: 'close', className: classes.modalNavActionIcon }))),
                    React.createElement("section", { className: classes.modalContent }, children)))));
    };
    Modal.prototype.isShowBackdrop = function () {
        return this.props.open && Boolean(this.props.onCloseOutside);
    };
    Modal = __decorate([
        styled(styles)
    ], Modal);
    return Modal;
}(PureComponent));
export { Modal };
//# sourceMappingURL=index.js.map