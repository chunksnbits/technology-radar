"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
require("./styles.scss");
var dom_1 = require("core/utils/dom");
// ----------------------------------------------------------------------------- Implementation
exports.GroupIndicator = function (props) {
    var modifiers = [
        props.focused && 'c-group-indicator--focused',
        props.large && 'c-group-indicator--large',
    ];
    return (React.createElement("span", { className: dom_1.classNames.apply(void 0, ['c-group-indicator', props.className].concat(modifiers)), style: {
            borderColor: props.color,
        }, onClick: props.onClick, onMouseOver: props.onMouseOver, onMouseOut: props.onMouseOut }));
};
//# sourceMappingURL=index.js.map