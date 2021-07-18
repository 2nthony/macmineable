const { ipcMain } = require('electron')
const { Worker } = require('worker_threads')
const { resolveApp } = require('../utils')

exports.apply = (api) => {
  const worker = new Worker(resolveApp('workers/miner.js'))

  worker.on('message', (message) => {
    const { type } = message

    if (type === 'miningLog') {
      api.emitter.emit('miningLog', message.data)
    }
    if (type === 'miningError') {
      api.emitter.emit('miningError')
    }
    if (type === 'miningStarted') {
      api.win.webContents.send('miningStarted')
      api.emitter.emit('miningStarted')
    }
    if (type === 'miningStopped') {
      api.win.webContents.send('miningStopped')
      api.emitter.emit('miningStopped')
      api.emitter.emit('pushHashrate', 0)
    }

    if (type === 'exitReady') {
      worker.terminate().then(() => {
        api.app.quit()
      })
    }
  })
  worker.on('error', () => {
    api.emitter.emit('miningError')
  })

  ipcMain.on('startMining', (_event, form) => {
    worker.postMessage({ action: 'startMining', form })
  })
  ipcMain.on('stopMining', (_event) => {
    worker.postMessage({ action: 'stopMining' })
  })

  api.emitter.on('exit', () => {
    worker.postMessage({ action: 'exit' })
    api.emitter.all.clear()
  })
}
