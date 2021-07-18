const path = require('path')

exports.matchLog = (log = '', condition) => {
  if (condition === 'all') return log
  return log.indexOf(condition) >= 0
}

exports.resolveApp = (...p) => {
  return path.join(__dirname, '..', ...p)
}
