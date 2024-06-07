function getItem(storage: Storage, key: string) {
  const jsonStr = storage.getItem(key);
  if (!jsonStr) return null;
  return JSON.parse(jsonStr);
}

function setItem(storage: Storage, key: string, value: any) {
  const str = value === undefined ? null : value;
  storage.setItem(key, JSON.stringify(str));
}

function removeItem(storage: Storage, key: string) {
  storage.removeItem(key);
}

export function getLocalItem(key: string) {
  return getItem(localStorage, key);
}

export function setLocalItem(key: string, value: any) {
  setItem(localStorage, key, value);
}

export function removeLocalItem(key: string) {
  removeItem(localStorage, key);
}

export function getSessionItem(key: string) {
  return getItem(sessionStorage, key);
}

export function setSessionItem(key: string, value: any) {
  setItem(sessionStorage, key, value);
}

export function removeSessionItem(key: string) {
  removeItem(sessionStorage, key);
}
