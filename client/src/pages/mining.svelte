<script>
  import '@shoelace-style/shoelace/dist/components/button/button'
  import '@shoelace-style/shoelace/dist/components/tooltip/tooltip'
  import { onMount, onDestroy } from 'svelte'
  import * as store from '../store'
  import { getBalance } from '../server/unMineable'
  import IconRefresh from '../components/icons/Refresh.svelte'
  import { ipc } from '../ipc'
  import * as router from 'svelte-spa-router'
  import IconFileList from '../components/icons/FileList.svelte'
  import HashratesChart from '../components/HashratesChart.svelte'
  import Drawer from '../components/Drawer.svelte'
  import TopButtons from '../components/TopButtons.svelte'
  import { log } from '../util/log'
  import { getHashrate } from '../util/mining'
  import Link from '../components/Link.svelte'

  let form
  store.form.subscribe((data) => (form = data))
  let isMining
  store.isMining.subscribe((val) => (isMining = val))
  let preparing
  store.preparing.subscribe((val) => (preparing = val))
  let miningLogs = []
  store.miningLogs.subscribe((logs) => {
    miningLogs = logs

    const log = logs[logs.length - 1]
    store.hashrates.update((val) => {
      const hs = getHashrate(log)
      if (hs) {
        val.push(hs)
      }

      if (val.length > 6) {
        val.shift()
      }

      return val
    })
  })

  let logDrawerEl

  let balance = {}
  let currentHashrate = null
  store.hashrates.subscribe((hrs) => {
    currentHashrate = hrs[hrs.length - 1]
  })
  let refreshingBalance = false

  function handleGetBalance() {
    log('page mining:', 'refreshing balance.')

    refreshingBalance = true
    getBalance(form.symbol, form.address)
      .then((data) => (balance = data))
      .finally(() => {
        refreshingBalance = false
      })
  }

  async function handleBackToSelectCoin() {
    log('page mining:', 'back to select coin')

    if (isMining) {
      ipc.listen('onMiningStopped', () => {
        router.pop()
      })
      ipc.send('emitStopMining')
    } else {
      router.pop()
    }
  }

  function handleStart() {
    log('page mining:', 'start')

    ipc.listen('onMiningStarted', () => {
      store.isMining.set(true)
    })
    ipc.send('emitStartMining', JSON.stringify(form))
  }

  function handleStop() {
    log('page mining:', 'stop')

    ipc.listen('onMiningStopped', () => {
      store.isMining.set(false)
      if (currentHashrate) {
        store.hashrates.update((val) => [...val, 0])
      }
    })
    ipc.send('emitStopMining')
  }

  onMount(() => {
    handleGetBalance()
  })
  onDestroy(() => {
    store.miningLogs.set([])
  })
</script>

<section class="flex flex-col justify-between h-full">
  <div>
    <div class="flex justify-between items-center">
      <div
        class="text-blue-400 text-sm flex cursor-pointer"
        on:click={handleBackToSelectCoin}
      >
        ← Back to set coin & address
      </div>
      <div>
        <TopButtons />
      </div>
    </div>

    <div>
      <div class="mt-6">
        <h5 class="mb-1">Address</h5>
        <div class="flex items-center justify-between">
          <sl-tooltip placement="top" content={form.address}>
            <p
              class="
                text-gray-500 text-xs
                m-0
                break-all
                overflow-ellipsis
                whitespace-nowrap
                overflow-hidden
                mr-8
              "
            >
              {form.address}
            </p>
          </sl-tooltip>

          <sl-button
            size="small"
            on:click={ipc.send(
              'emitOpenURL',
              `https://unmineable.com/coins/${form.symbol}/address/${form.address}`,
            )}>Stats</sl-button
          >
        </div>
      </div>

      <div class="mt-6">
        <div class="flex items-center">
          <h5>Balance</h5>
          <IconRefresh
            class={`w-3 ml-2 cursor-pointer ${
              refreshingBalance ? 'animate-spin' : ''
            }`}
            on:click={handleGetBalance}
          />
        </div>
        <div class="flex items-end my-2">
          <p class="text-4xl m-0 mr-2 font-semibold">
            {balance.pendingBalance || 0}
          </p>
          <span>{form.symbol || ''}</span>
        </div>
        <div class="flex flex-col">
          <p class="m-0 text-sm">
            <span class="text-gray-500">Last 24h Reward:</span>
            <span class="font-semibold">{balance.total24h || 0}</span>
          </p>
          <p class="m-0 text-sm">
            <span class="text-gray-500">Total Paid:</span>
            <span class="font-semibold">{balance.totalPaid || 0}</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <HashratesChart />

  <div>
    <div class="mb-4">
      <div class="text-gray-500">Hashrate</div>
      <div class="text-4xl flex items-center">
        {#if isMining && !currentHashrate}
          <span class="text-gray-600">Running...</span>
        {:else}
          <span>{currentHashrate || 0} h</span>
        {/if}
      </div>
    </div>
    <div class="flex justify-between items-end">
      <div class="flex flex-col">
        <sl-tooltip
          content="Please considering buy me a coffee, it's important to me 🙏"
          placement="top"
        >
          <Link
            url="https://2nthony.notion.site/Buy-2nthony-Coffee-d67a508cd58e4896bfb50c7112f93f51"
            class="text-xs text-gray-500 m-0 underline hover:text-indigo-500"
            >BuyMeACoffee 🙏</Link
          >
        </sl-tooltip>
      </div>
      <div class="flex items-center">
        <sl-tooltip content="Log" placement="top">
          <IconFileList
            class="w-6 mr-4 cursor-pointer"
            on:click={logDrawerEl.show}
          />
        </sl-tooltip>
        {#if !isMining}
          <sl-button type="primary" disabled={preparing} on:click={handleStart}
            >Start</sl-button
          >
        {:else}
          <sl-button type="danger" disabled={preparing} on:click={handleStop}
            >Stop</sl-button
          >
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- dialog: logs -->
<Drawer fullscreen bind:this={logDrawerEl} title="Logs">
  <pre
    class="h-full p-4 overflow-scroll select-text bg-gray-50 dark:bg-gray-900 text-xs rounded-md">
    {miningLogs.join('\n') || 'Pending logs...'}
  </pre>
</Drawer>
