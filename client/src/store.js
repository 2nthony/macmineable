import { writable } from '@svelte-use/shared'

export const form = writable({
  symbol: '',
  address: '',
  referralCode: '',
  cpuUsage: 25,
})

export const preparing = writable(false)

export const isMining = writable(false)

export const hashrates = writable([0, 0])

// calculate step on `FormSettings.svelte`
export const cpuCores = writable(100)

export const miningLogs = writable([])
