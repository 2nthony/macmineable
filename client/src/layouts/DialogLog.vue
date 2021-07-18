<template>
  <el-dialog
    v-model="dialogVisible"
    fullscreen
    title="Log"
    :modal="false"
    custom-class="dialog-log flex flex-col justify-between"
  >
    <pre class="h-full overflow-scroll select-text">{{
      logs || 'No logs'
    }}</pre>
    <template #footer>
      <el-button @click="dialogVisible = false">Close</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useEmitter } from '../emitter'

export default {
  setup() {
    const emitter = useEmitter()
    const dialogVisible = ref(false)
    const logs = ref('')

    emitter.on('miningLog', (miningLog) => (logs.value += miningLog))

    emitter.on('openLogDialog', () => {
      dialogVisible.value = true
    })

    return {
      dialogVisible,
      logs,
    }
  },
}
</script>

<style>
.dialog-log .el-dialog__body {
  @apply h-80 flex-1;
}
</style>
