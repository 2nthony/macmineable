import { reactive } from 'vue'

const state = reactive({
  form: {
    type: '',
    address: '',
    referralCode: '',
    cpuUsage: 50,
  },

  preparing: false,
  isMining: false,
  hashrates: [0, 0],
  osInfo: window.osInfo || {},
})

export function useState() {
  return state
}
