<script>
  import './assets/index.css'
  import './assets/vars.css'
  import '@shoelace-style/shoelace/dist/themes/light.css'
  import '@shoelace-style/shoelace/dist/themes/dark.css'

  import { routes, Router } from './router'
  import { ipc } from './ipc'
  import { log } from './util/log'
  import { cpuCores } from './store'
  import { checkUpdate } from './helper/checkUpdate'
  import { wsMiningLog } from './helper/wsMiningLog'
  import TopButtons from './components/TopButtons.svelte'

  ipc.listen('onPageReady', (data) => {
    log('onPageReady', data)
    $cpuCores = data.cpuCores
  })
  ipc.send('emitPageReady')

  checkUpdate()
  wsMiningLog()
</script>

<main class="h-screen p-6">
  <div class="flex justify-end">
    <TopButtons />
  </div>

  <Router {routes} />
</main>
