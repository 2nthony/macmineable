import { useState } from '../state'
import { useEmitter } from '../emitter'

export function getSessionState() {
  if (process.env.NODE_ENV === 'production') {
    const state = useState()
    const emitter = useEmitter()

    window.ipcRenderer.send('getSessionState')
    window.ipcRenderer.on('getSessionState', (_event, sessionStore) => {
      state.isMining = sessionStore.isMining
      state.hashrates = sessionStore.hashrates

      emitter.emit('getSessionState', sessionStore)
    })
  }
}
