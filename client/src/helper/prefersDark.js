// Use listen just I am lazy
import { listen } from 'svelte/internal'

export function prefersDark() {
  const media =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

  if (media && media.matches) {
    toggleDarkTheme()
  }

  listen(media, 'change', toggleDarkTheme)
}

function toggleDarkTheme() {
  document.documentElement.classList.toggle('dark')
  document.documentElement.classList.toggle('sl-theme-dark')
}
