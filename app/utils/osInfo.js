const os = require('os')

const cpuCores = os.cpus().length

exports.osInfo = {
  cpuCores,
  singleCorePercent: 100 / cpuCores,
}
