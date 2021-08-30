import { log } from '../util/log'

/** @type {WebSocket} */
let ws

const onMessage = []

export function useWebsocket(url, protocol) {
  connect(url, protocol)

  return {
    message(fn) {
      onMessage.push(fn)
    },

    ping: () => {
      if (!ws) return
      ws.send('ping')
    },
    reconnect: () => {
      if (ws) return
      connect(url, protocol)
    },
  }
}

function invokeAll(fns, data) {
  if (!ws) {
    log('ws', 'ws is not available')
    return
  }

  fns.forEach((fn) => fn(data))
}

function connect(url, protocol) {
  ws = new WebSocket(url, protocol)

  ws.onmessage = (event) => {
    invokeAll(onMessage, event.data)
  }
  ws.onopen = () => {
    log('ws', 'opened.')
  }
  ws.onclose = () => {
    log('ws', 'closed.')
    ws = null
  }
}
