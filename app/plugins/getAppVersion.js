const { ipcMain, app } = require('electron')

exports.apply = () => {
  ipcMain.on('getAppVersion', (event) => {
    event.reply('getAppVersion', app.getVersion())
  })
}
