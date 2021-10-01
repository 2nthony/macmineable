<script>
  import { useLocalStorage, usePreferredDark } from '@svelte-use/core'
  import IconMac from './icons/Mac.svelte'
  import IconSun from './icons/Sun.svelte'
  import IconMoon from './icons/Moon.svelte'

  let className = ''
  export { className as class }

  const preferredColor = useLocalStorage('macMineable-color-scheme', 'auto')
  const preferredDark = usePreferredDark()

  const colorSchemes = ['auto', 'light', 'dark']

  $: {
    if ($preferredColor === 'auto') {
      toggleDarkTheme($preferredDark ? 'add' : 'remove')
    } else {
      toggleDarkTheme($preferredColor === 'dark' ? 'add' : 'remove')
    }
  }

  function handleSwtich() {
    const currentColorSchemeIndex = colorSchemes.indexOf($preferredColor)
    const nextColorScheme =
      colorSchemes[currentColorSchemeIndex + 1] || colorSchemes[0]

    $preferredColor = nextColorScheme
  }

  /**
   *  @param act {'add' | 'remove'}
   */
  function toggleDarkTheme(act) {
    document.documentElement.classList[act]('dark', 'sl-theme-dark')
  }
</script>

<button aria-label="Toggle Theme" on:click={handleSwtich}>
  {#if $preferredColor === 'auto'}
    <IconMac class={className} />
  {:else if $preferredColor === 'light'}
    <IconSun class={className} />
  {:else}
    <IconMoon class={className} />
  {/if}
</button>
