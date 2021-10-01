<script>
  import { tryOnMount } from '@svelte-use/core'
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
    unMineableCoins,
    getReferralCode,
    validateAddress,
  } from '../server/unMineable'
  import { form, preparing, isMining } from '../store'
  import { parseFormData, setFormData } from '../util/form'
  import { getStorage, setStorage } from '../util/storage'
  import TopButtons from '../components/TopButtons.svelte'
  import { log } from '../util/log'

  let formEl
  let selectCoinEl
  let inputAddressEl
  let inputReferralCodeEl

  function onStart(event) {
    log('page select-coin:', 'start')

    $preparing = true

    log('page select-coin:', 'validating address')

    const formData = event.detail.formData
    const data = parseFormData(formData)
    validateAddress(data.symbol, data.address)
      .then((isExist) => {
        if (isExist) {
          $form = { ...$form, ...data }

          setStorage('form', $form)
          setStorage($form.symbol, $form.address)

          ipc.listen('onMiningStarted', () => {
            $preparing = false
            $isMining = true
            router.push('/mining')
          })
          ipc.send('emitStartMining', JSON.stringify($form))
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
                    `https://unmineable.com/coins/${$form.symbol}/address`,
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
        $preparing = false
        createToast(error, {
          type: 'error',
          cancel: 'Cancel',
        })
      })
      .finally(() => {
        $preparing = false
      })
  }

  function onSelectCoinChange(event) {
    const selectedSymbol = event.target.value
    inputAddressEl.value = getStorage(selectedSymbol) || ''
    inputReferralCodeEl.value = getReferralCode(unMineableCoins, selectedSymbol)
  }

  tryOnMount(() => {
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
    {#each unMineableCoins as coin (coin[1])}
      <sl-menu-item value={coin[1]}>
        <img slot="prefix" class="w-6 mr-2" src={coin[3]} alt={coin[1]} />
        {coin[0]}
      </sl-menu-item>
    {/each}
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
    <p slot="help-text" class="mt-2 text-xs text-gray-400">
      You can lower your fees to 0.75% with this valid referral code! Or you use
      your own one.
    </p>
  </sl-input>

  <sl-button
    type="primary"
    class="w-full mt-4"
    submit
    loading={$preparing}
    disabled={$preparing}>Start</sl-button
  >
</sl-form>
