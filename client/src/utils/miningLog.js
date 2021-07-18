import { useEmitter } from '../emitter'

export function miningLog() {
  if (process.env.NODE_ENV === 'production') {
    const emitter = useEmitter()

    window.ipcRenderer.on('miningLog', (_event, log) => {
      emitter.emit('miningLog', log)
    })
  }
}
