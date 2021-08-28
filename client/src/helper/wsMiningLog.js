import { useWebsocket } from '../use/websocket'
import { miningLogs } from '../store'

export function wsMiningLog() {
  const { message: onMiningLog } = useWebsocket(
    `ws://${location.host}/wsMiningLog`,
  )

  onMiningLog((log) => {
    miningLogs.update((val) => {
      val.push(log)

      if (val.length >= 100) {
        val.shift()
      }

      return val
    })
  })
}
