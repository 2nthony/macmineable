export function getHashrate(log = '') {
  log = log.trim()
  if (log && /miner/.test(log)) {
    // [2021-06-13 19:25:39.756]  miner    speed 10s/60s/15m 353.6 n/a n/a H/s max 359.0 H/s
    const [, matched] = /speed(.*)max/.exec(log)
    const [, speedPer10Second] = matched.trim().split(' ')
    return Number(speedPer10Second)
  }
}
