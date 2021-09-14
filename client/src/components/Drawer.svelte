<script>
  import { tryOnMount } from '@svelte-use/core'
  import { listen } from 'svelte/internal'
  import '@shoelace-style/shoelace/dist/components/drawer/drawer'
  import '@shoelace-style/shoelace/dist/components/button/button'
  import { useDispatch } from '../use/dispatch'

  const { dispatch } = useDispatch()

  export let title = 'Drawer'
  export let fullscreen = false

  $: style = fullscreen ? '--size: 100vw;' : ''

  let drawerEl
  let closeEl

  export function show() {
    drawerEl.show()
  }
  export function hide() {
    drawerEl.hide()
  }

  tryOnMount(() => {
    listen(closeEl, 'click', () => {
      drawerEl.hide()
    })
    listen(drawerEl, 'sl-show', () => {
      dispatch('show')
    })
    listen(drawerEl, 'sl-after-hide', () => {
      dispatch('after-hide')
    })
  })
</script>

<sl-drawer
  bind:this={drawerEl}
  {style}
  no-header
  class="flex flex-col justify-between"
>
  <header>
    <h2 class="text-2xl mt-0 mb-8 font-normal">{title}</h2>
  </header>

  <div class="h-96 flex-1 overflow-scroll">
    <slot />
  </div>

  <div slot="footer">
    <sl-button bind:this={closeEl}>Close</sl-button>
    <slot name="footer" />
  </div>
</sl-drawer>
