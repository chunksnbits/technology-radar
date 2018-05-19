
// ----------------------------------------------------------------------------- Dependencies
import { canUseSessionStorage } from 'utils/dom';

// ----------------------------------------------------------------------------- Implementation
export function restoreState<T>(key: string): T {
  if (!canUseSessionStorage()) {
    return null;
  }

  try {
    const state = sessionStorage.getItem(key);

    if (!Boolean(state)) {
      return null;
    }

    return JSON.parse(state) as T;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.warn(`SESSION_STORAGE_NOT_AVAILABLE: Failed to restore application state. '${ key }'`);
  }

  return null;
}
