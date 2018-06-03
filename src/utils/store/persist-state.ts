import { canUseSessionStorage } from 'utils/dom';

export function persistState<T>(key: string, data: T): void {
  if (!canUseSessionStorage()) {
    return;
  }

  try {
    const json = JSON.stringify(data);
    sessionStorage.setItem(key, json);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.warn(`SESSION_STORAGE_NOT_AVAILABLE: Failed to store application state with name '${ key }'`);
  }
}
