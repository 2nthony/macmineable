export function compareVersion(newVersion, currentVersion) {
  if (newVersion && currentVersion) {
    const nv = newVersion.split('.')
    const cv = currentVersion.split('.')

    for (let i = 0; i <= nv.length; i++) {
      const [n, c] = [Number(nv[i] || 0), Number(cv[i] || 0)]

      if (n > c) return true
      else if (n < c) return false
    }
  }

  return false
}
