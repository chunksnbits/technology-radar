// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Button } from '@material-ui/core';
import { Icon } from 'core/ui/components/Icon';
import { classNames } from 'core/utils/dom';
// ----------------------------------------------------------------------------- Implementation
export var EditModeToggle = function (_a) {
    var className = _a.className, show = _a.show, onClick = _a.onClick;
    return show && (React.createElement(Button, { variant: 'raised', className: classNames('c-edit-mode-toggle', className), onClick: onClick, color: 'inherit' },
        React.createElement(Icon, { name: 'add' }),
        React.createElement("span", null, 'Create your own')));
};
//# sourceMappingURL=index.js.map