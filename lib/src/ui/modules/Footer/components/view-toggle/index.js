"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var core_1 = require("@material-ui/core");
var Icon_1 = require("core/ui/components/Icon");
var dom_1 = require("core/utils/dom");
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
exports.ViewToggle = function (_a) {
    var viewMode = _a.viewMode, className = _a.className, onClick = _a.onClick;
    return (React.createElement(core_1.Button, { className: dom_1.classNames('c-view-toggle', className), onClick: onClick },
        React.createElement(Icon_1.Icon, { name: viewToggleOptions[viewMode].icon }),
        React.createElement("span", null, viewToggleOptions[viewMode].label)));
};
//# sourceMappingURL=index.js.map