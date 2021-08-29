import { log } from '../util/log'

/** @type {WebSocket} */
let ws

export function useWebsocket(url, protocol) {
  const onMessage = []

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

  return {
    message(fn) {
      onMessage.push(fn)
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
