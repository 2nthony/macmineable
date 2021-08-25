<script>
  import { onMount } from 'svelte'
  import { listen } from 'svelte/internal'
  import * as router from 'svelte-spa-router'
  import '@shoelace-style/shoelace/dist/components/form/form'
  import '@shoelace-style/shoelace/dist/components/select/select'
  import '@shoelace-style/shoelace/dist/components/menu-item/menu-item'
  import '@shoelace-style/shoelace/dist/components/input/input'
  import '@shoelace-style/shoelace/dist/components/button/button'
  import 'vercel-toast/dist/vercel-toast.css'
  import { createToast } from 'vercel-toast'

  import { ipc } from '../ipc'
  import {
    coins,
    fetchCoins,
    getReferralCode,
    validateAddress,
  } from '../server/unmineable'
  import * as store from '../store'
  import { parseFormData, setFormData } from '../util/form'
  import { getStorage, setStorage } from '../util/storage'
  import TopButtons from '../components/TopButtons.svelte'
  import { log } from '../util/log'

  let supportedCoins = []
  fetchCoins().then((fetchedCoins) => (supportedCoins = fetchedCoins))

  let preparing
  store.preparing.subscribe((bool) => (preparing = bool))

  let formEl
  let selectCoinEl
  let inputAddressEl
  let inputReferralCodeEl

  function onStart(event) {
    log('page select-coin:', 'start')

    store.preparing.set(true)

    const formData = event.detail.formData
    store.form.update((value) => ({
      ...value,
      ...parseFormData(formData),
    }))

    const form = store.get(store.form)
    setStorage('form', form)
    setStorage(form.symbol, form.address)

    log('page select-coin:', 'validate address')
    validateAddress(form.symbol, form.address)
      .then((isExist) => {
        if (isExist) {
          ipc.listen('onMiningStarted', () => {
            store.preparing.set(false)
            store.isMining.set(true)
            router.push('/mining')
          })
          ipc.send('emitStartMining', JSON.stringify(form))
        } else {
          createToast(
            `Your address does't exist on unMineable, please register it first.`,
            {
              type: 'error',
              action: {
                text: 'Register',
                callback: (toast) => {
                  ipc.send(
                    'emitOpenURL',
                    `https://unmineable.com/coins/${form.symbol}/address`,
                  )

                  toast.destory()
                },
              },
              cancel: 'Cancel',
            },
          )
        }
      })
      .catch((error) => {
        store.preparing.set(false)
        createToast(error, {
          type: 'error',
          cancel: 'Cancel',
        })
      })
      .finally(() => {
        store.preparing.set(false)
      })
  }

  function onSelectCoinChange(event) {
    const selectedSymbol = event.target.value
    inputAddressEl.value = getStorage(selectedSymbol) || ''
    inputReferralCodeEl.value = getReferralCode(
      [...coins, ...supportedCoins],
      selectedSymbol,
    )
  }

  onMount(() => {
    listen(formEl, 'sl-submit', onStart)
    listen(selectCoinEl, 'sl-change', onSelectCoinChange)

    setFormData(formEl, getStorage('form'))
  })
</script>

<div class="flex justify-end">
  <TopButtons />
</div>

<sl-form bind:this={formEl}>
  <sl-select
    name="symbol"
    class="my-4"
    label="Select a coin or token"
    required
    bind:this={selectCoinEl}
  >
    {#each coins as coin (coin[1])}
      <sl-menu-item value={coin[1]}>
        <img slot="prefix" class="w-6 mr-2" src={coin[3]} alt={coin[1]} />
        {coin[0]}
      </sl-menu-item>
    {/each}

    {#if supportedCoins.length}
      {#each supportedCoins as coin (coin[1])}
        <sl-menu-item value={coin[1]}>
          <img slot="prefix" class="w-6 mr-2" src={coin[3]} alt={coin[1]} />
          {coin[0]}
        </sl-menu-item>
      {/each}
    {:else}
      <sl-menu-item disabled value="fetchingCoins"
        >Fetching coins...</sl-menu-item
      >
    {/if}
  </sl-select>

  <sl-input
    name="address"
    class="my-4"
    label="Enter your address"
    required
    bind:this={inputAddressEl}
  />

  <sl-input
    name="referralCode"
    class="my-4"
    label="Referral Code(Optional)"
    bind:this={inputReferralCodeEl}
  >
    <p slot="help-text" class="text-xs mt-2 text-gray-400">
      You can lower your fees to 0.75% with this valid referral code! Or you use
      your own one.
    </p>
  </sl-input>

  <sl-button
    type="primary"
    class="mt-10 w-full"
    submit
    loading={preparing}
    disabled={preparing}>Start</sl-button
  >
</sl-form>
