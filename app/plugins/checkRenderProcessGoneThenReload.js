exports.apply = (api) => {
  api.win.webContents.on('render-process-gone', () => {
    // FIXME 只能依靠 setTimeout ?
    setTimeout(() => {
      if (api.win.webContents.isCrashed()) {
        api.win.reload()
      }
    }, 1000)
  })
}
