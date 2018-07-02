"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SESSION_STORAGE_KEY = 'cnb--session-storage-available';
function canUseSessionStorage() {
    try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'test');
        if (sessionStorage.getItem(SESSION_STORAGE_KEY) === 'test') {
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
}
exports.canUseSessionStorage = canUseSessionStorage;
//# sourceMappingURL=can-use-session-storage.js.map