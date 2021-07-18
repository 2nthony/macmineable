<template>
  <el-dialog
    v-model="dialogVisible"
    fullscreen
    title="Setting"
    :modal="false"
    custom-class="dialog-setting flex flex-col justify-between"
    @open="onOpen"
    @closed="onClosed"
  >
    <section class="flex flex-col justify-between h-full">
      <el-form label-position="top" class="h-full">
        <el-form-item :label="`CPU Usage (${tweakForm.cpuUsage}%)`">
          <el-slider
            show-stops
            :step="singleCorePercent"
            v-model="tweakForm.cpuUsage"
            :min="singleCorePercent"
          ></el-slider>
        </el-form-item>
      </el-form>
    </section>

    <template #footer>
      <el-button @click="dialogVisible = false">Close</el-button>
      <el-button
        type="primary"
        :disabled="saving || !isChanged"
        @click="handleSave"
        >Save</el-button
      >
    </template>
  </el-dialog>
</template>

<script>
import _isEqual from 'lodash.isequal'
import { useState } from '../state'
import { computed, ref } from '@vue/runtime-core'
import { startMining, stopMining } from '../utils/mining-scripts'
import { useEmitter } from '../emitter'

export default {
  setup() {
    const emitter = useEmitter()
    const dialogVisible = ref(false)
    const state = useState()
    const saving = ref(false)
    const tweakForm = ref({})
    const singleCorePercent = ref(state.osInfo.singleCorePercent || 50)

    const isChanged = computed(() => !_isEqual(tweakForm.value, state.form))

    function handleSave() {
      state.form = Object.assign(state.form, tweakForm.value)

      if (state.isMining) {
        saving.value = true
        stopMining().then(() => {
          startMining(state.form).then(() => {
            saving.value = false
            dialogVisible.value = false
          })
        })
      } else {
        dialogVisible.value = false
      }
    }

    function onOpen() {
      tweakForm.value = { ...state.form }
    }

    function onClosed() {
      tweakForm.value = Object.assign(tweakForm.value, state.form)
    }

    emitter.on('openSettingDialog', () => {
      dialogVisible.value = true
    })
    emitter.on('closeSettingDialog', () => {
      dialogVisible.value = false
    })

    return {
      dialogVisible,
      state,
      saving,
      tweakForm,
      singleCorePercent,
      isChanged,
      handleSave,
      onOpen,
      onClosed,
    }
  },
}
</script>

<style scoped>
.el-slider {
  @apply mx-2;
}
</style>

<style>
.dialog-setting .el-dialog__body {
  @apply h-80 flex-1;
}
</style>
