<template>
  <div class="flex justify-end">
    <TopButtons />
  </div>

  <el-form
    label-position="top"
    :model="state.form"
    ref="mineForm"
    :rules="{
      type: [{ required: true, message: 'Select a coin or token' }],
      address: [{ required: true, message: 'Enter your address' }],
    }"
  >
    <el-form-item label="Select a coin or token" prop="type">
      <el-select
        v-model="state.form.type"
        style="width: 100%"
        filterable
        @change="onCoinChange"
      >
        <el-option
          v-for="coin in supportedCoins"
          :key="coin[1]"
          :label="coin[0]"
          :value="coin[1]"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img class="w-6 mr-2" :src="coin[3]" />
              <span>{{ coin[0] }}</span>
            </div>
            <span class="text-gray-400">{{ coin[1] }}</span>
          </div>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Enter your address" prop="address">
      <el-input v-model="state.form.address"></el-input>
    </el-form-item>
    <el-form-item label="Referral Code(Optional)">
      <el-input v-model="state.form.referralCode"></el-input>
      <div class="text-xs mt-2 text-gray-400">
        You can lower your fees to 0.75% with this valid referral code! Or you
        use your own one.
      </div>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="w-full"
        :disabled="state.preparing"
        @click="handleStart"
        >Start</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useState } from '../state'
import { getStorage, setStorage } from '../utils'
import { startMining } from '../utils/mining-scripts'
import { coins, fetchCoins, getReferralCode } from '../coins'
import TopButtons from '../components/TopButtons.vue'
import { createToast } from 'vercel-toast'
import 'vercel-toast/dist/vercel-toast.css'
import { useEmitter } from '../emitter'

export default {
  components: { TopButtons },
  setup() {
    const router = useRouter()
    const state = useState()
    const mineForm = ref()
    const supportedCoins = ref(coins)
    const emitter = useEmitter()

    function handleStart() {
      mineForm.value.validate((valid) => {
        if (!valid) return
        // check address is valid on unMineable
        fetch(
          `https://api.unminable.com/v4/address/${state.form.address}?coin=${state.form.type}`,
        )
          .then((res) => res.json())
          .then((res) => {
            if (res.success) {
              state.preparing = true
              startMining(state.form).then(() => {
                state.isMining = true
                state.preparing = false
                setStorage('form', state.form)
                setStorage(state.form.type, state.form.address)
                router.push('/mining')
              })
            } else {
              createToast('Your address is invalid, please valid first.', {
                type: 'error',
                action: {
                  text: 'Valid',
                  callback: (toast) => {
                    emitter.emit(
                      'openURL',
                      `https://unmineable.com/coins/${state.form.type}/address`,
                    )
                    toast.destory()
                  },
                },
                cancel: 'Close',
              })
            }
          })
      })
    }

    function onCoinChange(v) {
      state.form.address = getStorage(v) || ''
      state.form.referralCode = getReferralCode(supportedCoins.value, v)
    }

    fetchCoins().then((supplyCoins) => {
      supportedCoins.value = [...supportedCoins.value, ...supplyCoins]
    })

    return {
      supportedCoins,
      mineForm,
      state,
      handleStart,
      onCoinChange,
    }
  },
}
</script>
