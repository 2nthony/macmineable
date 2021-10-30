import { useEventListener } from '@svelte-use/core'

export function common() {
  useEventListener(document, 'contextmenu', (e) => e.preventDefault())
}
