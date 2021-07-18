import { onMounted } from 'vue'
import { useEmitter } from '../emitter'
import { useState } from '../state'

export function miningHashrates() {
  if (process.env.NODE_ENV === 'production') {
    const emitter = useEmitter()
    const state = useState()

    window.ipcRenderer.on('miningHashrates', (_event, hashrates) => {
      emitter.emit('miningHashrates', hashrates)
      state.hashrates = hashrates
    })

    window.ipcRenderer.on('getMiningHashrates', (_event, hashrates) => {
      emitter.emit('miningHashrates', hashrates)
      state.hashrates = hashrates
    })

    onMounted(() => {
      window.ipcRenderer.send('getMiningHashrates')
    })
  }
}
