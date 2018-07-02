"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var dom_1 = require("core/utils/dom");
// ----------------------------------------------------------------------------- Implementation
function restoreState(key) {
    if (!dom_1.canUseSessionStorage()) {
        return null;
    }
    try {
        var state = sessionStorage.getItem(key);
        if (!Boolean(state)) {
            return null;
        }
        return JSON.parse(state);
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.warn("SESSION_STORAGE_NOT_AVAILABLE: Failed to restore application state. '" + key + "'");
    }
    return null;
}
exports.restoreState = restoreState;
//# sourceMappingURL=restore-state.js.map