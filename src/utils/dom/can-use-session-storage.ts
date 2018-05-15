
const SESSION_STORAGE_KEY = 'cnb--session-storage-available';

export function canUseSessionStorage(): boolean {
  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, 'test');
    if (sessionStorage.getItem(SESSION_STORAGE_KEY) === 'test') {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);

      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
}
