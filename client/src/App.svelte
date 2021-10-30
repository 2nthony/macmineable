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
  import { common } from './helper/common'
  import PromotionBanner from './components/PromotionBanner.svelte'

  ipc.listen('onPageReady', (data) => {
    log('onPageReady', data)
    $cpuCores = data.cpuCores
  })
  ipc.send('emitPageReady')

  checkUpdate()
  wsMiningLog()
  common()
</script>

<main class="flex flex-col justify-between h-screen">
  <div class="p-6">
    <Router {routes} />
  </div>

  <PromotionBanner />
</main>
