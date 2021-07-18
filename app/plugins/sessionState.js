const { ipcMain } = require('electron')

const session = {
  isMining: false,
  hashrates: [0, 0],
}

exports.apply = (api) => {
  ipcMain.on('getSessionState', (event) => {
    event.reply('getSessionState', session)
  })

  // isMining
  api.emitter.on('miningStarted', () => {
    session.isMining = true
  })
  api.emitter.on('miningStopped', () => {
    session.isMining = false
  })
  api.emitter.on('miningError', () => {
    session.isMining = false
  })

  // hashrates
  api.emitter.on('miningHashrates', (hashrates) => {
    session.hashrates = hashrates
  })
}
