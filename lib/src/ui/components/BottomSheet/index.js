"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var react_1 = require("react");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
var core_1 = require("@material-ui/core");
var Icon_1 = require("core/ui/components/Icon");
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
        return (React.createElement(react_1.Fragment, null,
            React.createElement("div", { className: dom_1.classNames.apply(void 0, ['c-bottom-sheet', this.props.className].concat(modifiers)) },
                React.createElement("nav", { className: 'c-bottom-sheet__nav' },
                    React.createElement(core_1.Button, { onClick: this.props.onClose, className: 'c-bottom-sheet__nav-action c-bottom-sheet__nav-action--close', variant: 'flat' },
                        React.createElement(Icon_1.Icon, { name: 'close', className: 'c-bottom-sheet__nav-action-icon' }))),
                React.createElement("section", { className: 'c-bottom-sheet__content' }, this.props.children))));
    };
    return BottomSheet;
}(react_1.PureComponent));
exports.BottomSheet = BottomSheet;
//# sourceMappingURL=index.js.map