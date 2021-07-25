const { matchLog } = require('../utils')

const hashrates = [0, 0]

exports.apply = (api) => {
  api.emitter.on('miningLog', (log) => {
    const hashrate = this.getHashrate(log)
    if (hashrate) {
      hashrates.push(hashrate)
      if (hashrates.length > 10) {
        hashrates.splice(0, 1)
      }

      api.win.webContents.send('miningHashrates', hashrates)
      api.emitter.emit('miningHashrates', hashrates)
    }
  })

  api.emitter.on('pushHashrate', (hashrate) => {
    if (hashrates.every((hr) => hr === 0)) return
    hashrates.push(hashrate)
    api.win.webContents.send('miningHashrates', hashrates)
    api.emitter.emit('miningHashrates', hashrates)
  })
}

exports.getHashrate = (log = '') => {
  if (matchLog(log, 'miner')) {
    // [2021-06-13 19:25:39.756]  miner    speed 10s/60s/15m 353.6 n/a n/a H/s max 359.0 H/s
    const matchedMiningSpeed = /speed(.*)max/.exec(log)
    if (matchedMiningSpeed) {
      const [, matched] = matchedMiningSpeed
      const [, speedPer10Second] = matched.trim().split(' ')
      return Number(speedPer10Second)
    }
  }
}
