import { createToast } from 'vercel-toast'
import 'vercel-toast/dist/vercel-toast.css'
import { ipc } from '../ipc'
import { compareVersion } from '../util/compareVersion'
import pkg from '../../../package.json'

const appVersion = pkg.version

const url =
  'https://api.github.com/repos/evillt/macmineable-release/releases?per_page=1'
let toast

export function checkUpdate() {
  if (import.meta.env.PROD) {
    if (toast) return

    fetch(url)
      .then((res) => res.json())
      .then(([release]) => {
        const version = release.name.startsWith('v')
          ? release.name.slice(1)
          : release.name

        if (compareVersion(version, appVersion)) {
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
}
