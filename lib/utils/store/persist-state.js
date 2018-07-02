import { canUseSessionStorage } from 'core/utils/dom';
export function persistState(key, data) {
    if (!canUseSessionStorage()) {
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
//# sourceMappingURL=persist-state.js.map