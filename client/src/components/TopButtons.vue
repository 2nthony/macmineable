<template>
  <section class="flex">
    <component
      v-for="(button, idx) in buttons"
      :key="idx"
      :is="button.component"
      fill="currentColor"
      class="w-4 ml-2 cursor-pointer"
      @click="button.onClick"
    />
  </section>

  <a
    ref="emailFeedbackEl"
    href="mailto:ijoec123@gmail.com?subject=[macMineable] Feedback"
  ></a>
</template>

<script>
import { ref } from '@vue/reactivity'
import { RiMailFill, RiGithubFill, RiSettings4Fill } from 'vue-remix-icons'
import { useEmitter } from '../emitter'

export default {
  setup() {
    const emailFeedbackEl = ref(null)
    const emitter = useEmitter()

    const buttons = [
      {
        component: RiMailFill,
        onClick: () => {
          emailFeedbackEl.value.click()
        },
      },
      {
        component: RiGithubFill,
        onClick: () => {
          emitter.emit(
            'openURL',
            'https://github.com/evillt/macmineable-release',
          )
        },
      },
      {
        component: RiSettings4Fill,
        onClick: () => emitter.emit('openSettingDialog'),
      },
    ]

    return {
      buttons,
      emailFeedbackEl,
    }
  },
}
</script>
