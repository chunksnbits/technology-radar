// ----------------------------------------------------------------------------- Dependencies
import { canUseSessionStorage } from 'core/utils/dom';
// ----------------------------------------------------------------------------- Implementation
export function restoreState(key) {
    if (!canUseSessionStorage()) {
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
//# sourceMappingURL=restore-state.js.map