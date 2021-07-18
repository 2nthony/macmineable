<template>
  <DialogSetting />
  <DialogLog />
</template>

<script>
import DialogLog from './DialogLog.vue'
import DialogSetting from './DialogSetting.vue'
export default {
  components: { DialogSetting, DialogLog },
}
</script>
