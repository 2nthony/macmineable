const { ipcMain, shell } = require('electron')

exports.apply = (api) => {
  ipcMain.on('openURL', (_event, url) => {
    shell.openExternal(url)
  })

  api.win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })
}
