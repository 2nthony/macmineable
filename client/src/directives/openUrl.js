import { useEventListener } from '@svelte-use/core'
import { ipc } from '../ipc'

/**
 * @param node {HTMLElement}
 */
export function openUrl(node) {
  useEventListener(node, 'click', () => {
    const targetUrl = node.getAttribute('href')
    if (!targetUrl) return
    ipc.send('emitOpenURL', targetUrl)
  })
}
