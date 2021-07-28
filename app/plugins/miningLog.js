exports.apply = (api) => {
  api.emitter.on('miningLog', (log) => {
    console.log(log)
    api.win?.webContents?.send('miningLog', log)
  })
}
