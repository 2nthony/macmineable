import { createToast } from 'vercel-toast'
import 'vercel-toast/dist/vercel-toast.css'
import { ipc } from '../ipc'
import { compareVersion } from '../util/compareVersion'
import pkg from '../../../package.json'
import { ticker } from '../util/ticker'
import { now, tryOnDestroy, useEventListener } from '@svelte-use/core'

const appVersion = pkg.version

const url = `https://api.github.com/repos/evillt/macmineable-release/releases?_=${now()}&per_page=1`
let toast

export function checkUpdate() {
  if (!import.meta.env.PROD) return
  check()

  const checkUpdateTicker = ticker(1800, check)

  function check() {
    fetch(url)
      .then((res) => res.json())
      .then(([release]) => {
        const version = release.name.startsWith('v')
          ? release.name.slice(1)
          : release.name

        if (compareVersion(version, appVersion)) {
          checkUpdateTicker.stopTicker()
          toast = createToast('New release avaliable!', {
            action: {
              text: 'Download',
              callback: () => {
                ipc.send('emitOpenURL', release.html_url)
              },
            },
            cancel: 'Ignore',
          })
        }
      })
  }

  useEventListener(document, 'visibilitychange', () => {
    if (toast) return
    if (document.visibilityState === 'visible') {
      checkUpdateTicker.startTicker()
    } else {
      checkUpdateTicker.stopTicker()
    }
  })

  tryOnDestroy(() => {
    checkUpdateTicker.stopTicker()
  })
}
