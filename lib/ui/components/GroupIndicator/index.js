// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import './styles.scss';
import { classNames } from 'core/utils/dom';
// ----------------------------------------------------------------------------- Implementation
export var GroupIndicator = function (props) {
    var modifiers = [
        props.focused && 'c-group-indicator--focused',
        props.large && 'c-group-indicator--large',
    ];
    return (React.createElement("span", { className: classNames.apply(void 0, ['c-group-indicator', props.className].concat(modifiers)), style: {
            borderColor: props.color,
        }, onClick: props.onClick, onMouseOver: props.onMouseOver, onMouseOut: props.onMouseOut }));
};
//# sourceMappingURL=index.js.map