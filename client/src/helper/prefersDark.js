import { usePreferredDark } from '@svelte-use/core'

export function prefersDark() {
  const preferredDark = usePreferredDark()
  preferredDark.subscribe((isDark) => {
    toggleDarkTheme(isDark ? 'add' : 'remove')
  })
}

/**
 *  @param act {'add' | 'remove'}
 */
function toggleDarkTheme(act) {
  document.documentElement.classList[act]('dark', 'sl-theme-dark')
}
