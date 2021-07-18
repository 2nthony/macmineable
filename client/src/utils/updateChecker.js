import { createToast } from 'vercel-toast'
import 'vercel-toast/dist/vercel-toast.css'
import { useEmitter } from '../emitter'
import { compareVersion } from './compareVersion'

const url =
  'https://api.github.com/repos/evillt/macmineable-release/releases?per_page=1'

let updateCheckerInterval

export function updateChecker() {
  if (process.env.NODE_ENV === 'production') {
    const emitter = useEmitter()

    window.ipcRenderer.send('getAppVersion')
    window.ipcRenderer.on('getAppVersion', (_event, appVersion) => {
      fetch(url)
        .then((res) => res.json())
        .then(([release]) => {
          const version = release.name.startsWith('v')
            ? release.name.slice(1)
            : release.name

          if (compareVersion(version, appVersion)) {
            createToast('New version found!', {
              action: {
                text: 'Download',
                callback: () => {
                  emitter.emit('openURL', release.html_url)
                },
              },
              cancel: 'Ignore',
            })

            clearInterval(updateCheckerInterval)
          }
        })
    })
  }

  updateCheckerInterval = setInterval(updateChecker, 10 * 60 * 1000)
}
