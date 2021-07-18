const { parentPort } = require('worker_threads')
const { matchLog } = require('../utils')
const {
  startMining,
  getMiningProcess,
  stopMining,
} = require('../utils/miningScripts')

parentPort.on('message', (message) => {
  const { action } = message

  if (action === 'startMining') {
    if (getMiningProcess()) {
      return
    }

    startMining(message.form).then((miningProcess) => {
      parentPort.postMessage({ type: 'miningStarted' })

      miningProcess.stdout.on('data', (data) => {
        parentPort.postMessage({ type: 'miningLog', data })

        if (matchLog(data, 'error')) {
          parentPort.postMessage({ type: 'miningError' })
        }
      })

      miningProcess.stderr.on('data', () => {
        parentPort.postMessage({ type: 'miningError' })
      })
    })
  }

  if (action === 'stopMining') {
    stopMining().then((flag) => {
      if (flag) {
        parentPort.postMessage({ type: 'miningStopped' })
      }
    })
  }

  if (action === 'exit') {
    stopMining().then((flag) => {
      if (flag) {
        parentPort.postMessage({ type: 'exitReady' })
      }
    })
  }
})
