const { exec } = require('child_process')
const os = require('os')
const { resolveApp } = require('.')

const isM1 = os.arch().trim() === 'arm64'

let miningProcess = null

exports.getMiningProcess = () => miningProcess

exports.startMining = ({ type, address, cpuUsage, referralCode }) => {
  return new Promise((resolve) => {
    // means already on mining
    if (miningProcess) {
      return resolve(miningProcess)
    }

    const params = []

    // mining server
    params.push('--url=rx.unmineable.com:3333')
    // algorithm
    params.push('--algo=rx')
    // keep alive
    params.push('--keepalive')
    // user
    params.push(`--user=${resolveUser({ type, address, referralCode })}`)
    // pass
    params.push(`--pass=x`)
    // no-color
    params.push('--no-color')

    // cpu max threads hint
    if (cpuUsage) {
      params.push(`--cpu-max-threads-hint=${cpuUsage}`)
    }

    const minerPath = isM1
      ? resolveApp('miner/xmrig-m1')
      : resolveApp('miner/xmrig')
    const command = `${minerPath} ${params.join(' ')}`

    miningProcess = exec(command)

    return resolve(miningProcess)
  })
}

exports.stopMining = () => {
  return new Promise((resolve) => {
    if (miningProcess) {
      const flag = miningProcess.kill()
      if (flag) {
        miningProcess = null
      }
      return resolve(flag)
    }
    return resolve(true)
  })
}

function resolveUser({ type, address, referralCode }) {
  let user = `${type}:${address}.macMineable`
  if (referralCode) user += `#${referralCode}`
  return user
}
