import { onDestroy } from 'svelte'
import { listen } from 'svelte/internal'
import { useWebsocket } from '../use/websocket'
import { miningLogs } from '../store'
import { ticker } from '../util/ticker'

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

  const unlisten = listen(
    document,
    'visibilitychange',
    () => {
      if (document.visibilityState === 'visible') {
        reconnect()
        pingTicker.startTicker()
      } else {
        pingTicker.stopTicker()
      }
    },
    false,
  )

  onDestroy(() => {
    unlisten()
    pingTicker.stopTicker()
  })
}
