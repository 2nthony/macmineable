import { onDestroy } from 'svelte'
import { listen } from 'svelte/internal'
import { useWebsocket } from '../use/websocket'
import { miningLogs } from '../store'
import { createCounter } from '../util/counter'

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

  // TODO this may be reason of unresponsive
  createCounter(10, ping)

  const unlisten = listen(
    document,
    'visibilitychange',
    () => {
      const visible = document.visibilityState === 'visible'
      if (visible) {
        reconnect()
      }
    },
    false,
  )

  onDestroy(unlisten)
}
