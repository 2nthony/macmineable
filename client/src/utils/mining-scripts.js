import { useEmitter } from '../emitter'

const emitter = useEmitter()

export function startMining(value) {
  if (process.env.NODE_ENV !== 'production') {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    window.ipcRenderer.send('startMining', { ...value })
    window.ipcRenderer.on('miningStarted', () => {
      emitter.emit('miningStarted')
      resolve()
    })
  })
}

export function stopMining() {
  if (process.env.NODE_ENV !== 'production') {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    window.ipcRenderer.send('stopMining')
    window.ipcRenderer.on('miningStopped', () => {
      emitter.emit('miningStopped')
      resolve()
    })
  })
}
