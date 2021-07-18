import { useEmitter } from '../emitter'

export function openURL() {
  if (process.env.NODE_ENV === 'production') {
    const emitter = useEmitter()

    emitter.on('openURL', (url) => {
      window.ipcRenderer.send('openURL', url)
    })
  }
}
