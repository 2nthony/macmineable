<script>
  import './assets/index.css'
  import '@shoelace-style/shoelace/dist/themes/light.css'
  import '@shoelace-style/shoelace/dist/themes/dark.css'

  import { routes, Router } from './router'
  import { ipc } from './ipc'
  import { log } from './util/log'
  import * as store from './store'
  import { checkUpdate } from './helper/checkUpdate'
  import { prefersDark } from './helper/prefersDark'
  import { onMount } from 'svelte'

  ipc.listen('onPageReady', (data) => {
    log('onPageReady', data)
    store.cpuCores.set(data.cpuCores)
  })
  ipc.send('emitPageReady')

  onMount(() => {
    checkUpdate()
    prefersDark()
  })
</script>

<main class="p-6 h-screen">
  <Router {routes} />
</main>
