const { app, BrowserWindow } = require('electron')
const path = require('path')
const { applyPlugins } = require('./plugins')
const mitt = require('mitt')

const emitter = mitt()

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.setResizable(false)
  win.loadURL(`file:///${path.join(__dirname, '..', 'dist/index.html')}`)

  return win
}

app.whenReady().then(() => {
  let win = createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length < 2) {
      win = createWindow()
    }
  })

  const api = { emitter, win, app }
  applyPlugins(api)
})

app.on('window-all-closed', () => {
  emitter.emit('exit')
})
