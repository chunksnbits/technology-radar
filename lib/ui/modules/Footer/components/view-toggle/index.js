// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Button } from '@material-ui/core';
import { Icon } from 'core/ui/components/Icon';
import { classNames } from 'core/utils/dom';
var viewToggleOptions = {
    list: {
        icon: 'radar',
        label: 'Show radar view'
    },
    radar: {
        icon: 'list',
        label: 'Show list view'
    }
};
// ----------------------------------------------------------------------------- Implementation
export var ViewToggle = function (_a) {
    var viewMode = _a.viewMode, className = _a.className, onClick = _a.onClick;
    return (React.createElement(Button, { className: classNames('c-view-toggle', className), onClick: onClick },
        React.createElement(Icon, { name: viewToggleOptions[viewMode].icon }),
        React.createElement("span", null, viewToggleOptions[viewMode].label)));
};
//# sourceMappingURL=index.js.map