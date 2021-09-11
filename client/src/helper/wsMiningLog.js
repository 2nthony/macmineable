import { onDestroy } from 'svelte'
import { useWebsocket } from '../use/websocket'
import { miningLogs } from '../store'
import { ticker } from '../util/ticker'
import { useEventListener } from '@svelte-use/core'

export function wsMiningLog() {
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

  onDestroy(() => {
    pingTicker.stopTicker()
  })
}
