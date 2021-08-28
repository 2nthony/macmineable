import 'vercel-toast/dist/vercel-toast.css'
import { createToast } from 'vercel-toast'
import { log } from './util/log'

export const ipc = {
  hooks: {},
  send(name, ...args) {
    log(name)
    if (window[name]) {
      return window[name](...args)
    }
  },
  listen(name, fn) {
    this.hooks[name] = fn
  },
  invoke(name, ...args) {
    const fn = this.hooks[name] || (() => {})
    fn(...args)
  },
}

window.onPageReady = (data) => {
  ipc.invoke('onPageReady', data)
}
window.onMiningStarted = () => {
  ipc.invoke('onMiningStarted')
}
window.onMiningStartedError = (err) => {
  log('start error', err)
  createToast(`Error with \`${err}\`, please feedback me.`, {
    type: 'error',
    cancel: 'Cancel',
  })
  ipc.invoke('onMiningStartedError', err)
}
window.onMiningStopped = () => {
  ipc.invoke('onMiningStopped')
}
window.onMiningStoppedError = (err) => {
  ipc.invoke('onMiningStoppedError', err)
}
