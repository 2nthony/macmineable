const { ipcRenderer } = require('electron')
const { osInfo } = require('./utils/osInfo')

window.ipcRenderer = ipcRenderer
window.osInfo = osInfo
