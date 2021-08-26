<script>
  import '@shoelace-style/shoelace/dist/components/button/button'

  import _isEqual from 'lodash.isequal'
  import Drawer from './Drawer.svelte'
  import FormSettings from './FormSettings.svelte'
  import { parseFormData } from '../util/form'
  import * as store from '../store'
  import { ipc } from '../ipc'

  let form
  store.form.subscribe((val) => (form = val))
  let isMining
  store.isMining.subscribe((val) => (isMining = val))

  let drawerComp
  let formSettingsComp

  let saving = false
  let isChanged = false

  export function show() {
    drawerComp.show()
  }

  function handleSave() {
    const formData = formSettingsComp.getFormData()
    const data = parseFormData(formData, (v) => {
      v.cpuUsage = Number(v.cpuUsage)
      return v
    })
    store.form.update((val) => ({ ...val, ...data }))

    if (isMining) {
      ipc.listen('onMiningStopped', () => {
        ipc.listen('onMiningStarted', () => {
          saving = false
          drawerComp.hide()
        })
        ipc.send('emitStartMining', JSON.stringify(form))
      })
      saving = true
      ipc.send('emitStopMining')
    } else {
      drawerComp.hide()
    }
  }

  function resetFormData() {
    formSettingsComp.setFormData(form)
    isChanged = false
  }

  function onFormChange(event) {
    const data = event.detail
    isChanged = !_isEqual(form, data)
  }
</script>

<Drawer
  bind:this={drawerComp}
  fullscreen
  title="Settings"
  on:show={resetFormData}
  on:after-hide={resetFormData}
>
  <FormSettings bind:this={formSettingsComp} on:change={onFormChange} />

  <sl-button
    slot="footer"
    type="primary"
    class="ml-4"
    on:click={handleSave}
    disabled={saving || !isChanged}>Save & Restart</sl-button
  >
</Drawer>
