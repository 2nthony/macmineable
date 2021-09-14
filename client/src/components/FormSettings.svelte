<script>
  import { tryOnMount } from '@svelte-use/core'
  import { listen } from 'svelte/internal'
  import '@shoelace-style/shoelace/dist/components/form/form'
  import '@shoelace-style/shoelace/dist/components/range/range'

  import { form, cpuCores } from '../store'
  import * as formUtils from '../util/form'
  import { useDispatch } from '../use/dispatch'

  const { dispatch } = useDispatch()

  $: step = 100 / $cpuCores

  let tweakForm = {
    cpuUsage: $form.cpuUsage,
  }

  let formEl

  export function getFormData() {
    return formEl.getFormData()
  }
  export function setFormData(data) {
    formUtils.setFormData(formEl, data)
    tweakForm = { ...tweakForm, ...data }
  }

  tryOnMount(() => {
    formEl.childNodes.forEach((el) => {
      if (el.name) {
        listen(el, 'sl-change', (event) => {
          dispatch('change', { ...$form, [el.name]: event.target.value })
          tweakForm[el.name] = event.target.value
        })
      }
    })
  })
</script>

<sl-form bind:this={formEl} class="p-2">
  <sl-range
    name="cpuUsage"
    label={`CPU Usage (${tweakForm.cpuUsage}%)`}
    min={step}
    max="100"
    {step}
    value={tweakForm.cpuUsage}
  />
</sl-form>
