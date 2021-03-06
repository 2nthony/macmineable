import { useWebsocket } from '../use/websocket'
import { miningLogs } from '../store'
import { ticker } from '../util/ticker'
import { tryOnDestroy, useEventListener } from '@svelte-use/core'

export function wsMiningLog() {
  if (!import.meta.env.PROD) return

  const {
    message: onMiningLog,
    ping,
    reconnect,
  } = useWebsocket(`ws://${location.host}/mining-log`)

  onMiningLog((log) => {
    miningLogs.update((val) => {
      val.push(log)

      if (val.length >= 100) {
        val.shift()
      }

      return val
    })
  })

  const pingTicker = ticker(10, ping)
  useEventListener(document, 'visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      reconnect()
      pingTicker.startTicker()
    } else {
      pingTicker.stopTicker()
    }
  })

  tryOnDestroy(() => {
    pingTicker.stopTicker()
  })
}
