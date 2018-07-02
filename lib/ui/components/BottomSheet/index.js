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
import { classNames } from 'core/utils/dom';
import './styles.scss';
import { Button } from '@material-ui/core';
import { Icon } from 'core/ui/components/Icon';
// ----------------------------------------------------------------------------- Implementation
var BottomSheet = /** @class */ (function (_super) {
    __extends(BottomSheet, _super);
    function BottomSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    BottomSheet.prototype.render = function () {
        var modifiers = [
            this.props.active && "c-bottom-sheet--active"
        ];
        return (React.createElement(Fragment, null,
            React.createElement("div", { className: classNames.apply(void 0, ['c-bottom-sheet', this.props.className].concat(modifiers)) },
                React.createElement("nav", { className: 'c-bottom-sheet__nav' },
                    React.createElement(Button, { onClick: this.props.onClose, className: 'c-bottom-sheet__nav-action c-bottom-sheet__nav-action--close', variant: 'flat' },
                        React.createElement(Icon, { name: 'close', className: 'c-bottom-sheet__nav-action-icon' }))),
                React.createElement("section", { className: 'c-bottom-sheet__content' }, this.props.children))));
    };
    return BottomSheet;
}(PureComponent));
export { BottomSheet };
//# sourceMappingURL=index.js.map