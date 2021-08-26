export function setStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}

export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
