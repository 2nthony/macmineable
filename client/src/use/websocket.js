import { log } from '../util/log'

export function useWebsocket(url, protocol) {
  /** @type {WebSocket} */
  let ws

  const onMessage = []

  connect(url, protocol)

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
