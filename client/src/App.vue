<template>
  <div class="p-6 h-screen">
    <router-view></router-view>
  </div>

  <LayoutCollection />
</template>

<script>
import { onMounted } from 'vue'
import { useState } from './state'
import { getStorage } from './utils'
import { getSessionState } from './utils/getSessionState'
import { updateChecker } from './utils/updateChecker'
import { miningHashrates } from './utils/miningHashrates'
import { miningLog } from './utils/miningLog'
import { openURL } from './utils/openURL'
import { gtag } from './utils/gtag'
import LayoutCollection from './layouts/LayoutCollection.vue'

export default {
  components: { LayoutCollection },
  setup() {
    getSessionState()
    miningHashrates()
    miningLog()
    openURL()
    updateChecker()
    gtag()

    const state = useState()

    onMounted(() => {
      state.form = {
        ...state.form,
        ...getStorage('form'),
      }
    })
  },
}
</script>
