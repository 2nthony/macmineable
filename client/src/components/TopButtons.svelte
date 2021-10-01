<script>
  import IconMail from './icons/Mail.svelte'
  import IconGitHub from './icons/GitHub.svelte'
  import IconSettings from './icons/Settings.svelte'
  import { ipc } from '../ipc'
  import DrawerFormSettings from './DrawerFormSettings.svelte'
  import DarkModeSwitch from './DarkModeSwitch.svelte'

  let emailEl
  let drawerFormSettingsComp

  let buttons = [
    {
      component: IconMail,
      onClick: () => emailEl.click(),
    },
    {
      component: IconGitHub,
      onClick: () => {
        ipc.send('emitOpenURL', 'https://github.com/evillt/macmineable-release')
      },
    },
    {
      component: DarkModeSwitch,
    },
    {
      component: IconSettings,
      onClick: () => {
        drawerFormSettingsComp.show()
      },
    },
  ]
</script>

<div class="flex">
  {#each buttons as button, i (i)}
    <svelte:component
      this={button.component}
      class="w-4 ml-2 cursor-pointer"
      on:click={button.onClick}
    />
  {/each}
</div>

<a
  bind:this={emailEl}
  href="mailto:ijoec123@gmail.com?subject=[macMineable] Feedback"
  class="hidden">Feedback</a
>

<DrawerFormSettings bind:this={drawerFormSettingsComp} />
