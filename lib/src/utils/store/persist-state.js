"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("core/utils/dom");
function persistState(key, data) {
    if (!dom_1.canUseSessionStorage()) {
        return;
    }
    try {
        var json = JSON.stringify(data);
        sessionStorage.setItem(key, json);
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.warn("SESSION_STORAGE_NOT_AVAILABLE: Failed to store application state with name '" + key + "'");
    }
}
exports.persistState = persistState;
//# sourceMappingURL=persist-state.js.map