<template>
  <section class="flex flex-col justify-between h-full">
    <div>
      <div class="flex justify-between">
        <div
          class="text-blue-400 text-sm flex cursor-pointer"
          @click="backToSelectCoin"
        >
          <ri-arrow-left-line class="w-4 inline" fill="currentColor" />Back to
          set coin & address
        </div>
        <div>
          <TopButtons />
        </div>
      </div>

      <div>
        <div class="mt-8">
          <h5 class="mb-1">Address</h5>
          <div class="flex items-center justify-between">
            <el-tooltip placement="top" :content="state.form.address">
              <p
                class="
                  text-gray-500 text-xs
                  m-0
                  break-all
                  overflow-ellipsis
                  whitespace-nowrap
                  overflow-hidden
                  mr-8
                "
              >
                {{ state.form.address }}
              </p>
            </el-tooltip>
            <a rel="noopener" :href="statsUrl" target="_blank">
              <el-button size="small">Stats</el-button>
            </a>
          </div>
        </div>

        <div class="mt-6">
          <div class="flex items-center">
            <h5>Balance</h5>
            <ri-refresh-line
              class="w-3 ml-2 cursor-pointer"
              :class="{ 'animate-spin': refreshingBalance }"
              @click="refreshBalance"
            />
          </div>
          <div class="flex items-end my-2">
            <p class="text-4xl m-0 mr-2 font-semibold">
              {{ balance.pendingBalance }}
            </p>
            <span>{{ state.form.type }}</span>
          </div>
          <div class="flex flex-col">
            <p class="m-0 text-gray-500 text-sm">
              Last 24h Reward:
              <span class="text-black font-semibold">{{
                balance.total24h
              }}</span>
            </p>
            <p class="m-0 text-gray-500 text-sm">
              Total Paid:
              <span class="text-black font-semibold">{{
                balance.totalPaid
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <HashrateChart />

    <div class="">
      <div class="mb-4">
        <div class="text-gray-500">Current Hashrate</div>
        <div class="text-4xl flex items-center">
          <span class="text-gray-600" v-if="state.isMining && !hashrate"
            >Calculating...</span
          >
          <span v-else>{{ hashrate || 0 }}h</span>
        </div>
      </div>
      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <el-tooltip
            effect="dark"
            content="Please considering buy me a coffee, it's important to me 🙏"
            placement="top"
          >
            <a
              target="_blank"
              href="https://aotunote.com/buymeacoffee"
              class="text-xs text-gray-500 m-0"
              >BuyMeACoffee 🙏</a
            >
          </el-tooltip>
        </div>
        <div class="flex items-center">
          <el-tooltip content="Log" placement="top">
            <ri-file-list-2-line
              class="w-6 mr-4 cursor-pointer"
              fill="currentColor"
              @click="handleShowLog"
            />
          </el-tooltip>
          <el-button
            v-if="state.isMining"
            type="danger"
            :disabled="state.preparing"
            @click="handleStop"
            >Stop</el-button
          >
          <el-button
            v-else
            type="primary"
            :disabled="state.preparing"
            @click="handleStart"
            >Start</el-button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  RiArrowLeftLine,
  RiRefreshLine,
  RiFileList2Line,
} from 'vue-remix-icons'
import { useState } from '../state'
import { startMining, stopMining } from '../utils/mining-scripts'
import TopButtons from '../components/TopButtons.vue'
import HashrateChart from '../components/HashrateChart.vue'
import { useEmitter } from '../emitter'

export default {
  components: {
    RiArrowLeftLine,
    RiRefreshLine,
    RiFileList2Line,
    TopButtons,
    HashrateChart,
  },

  setup() {
    const router = useRouter()
    const state = useState()
    const hashrate = computed(() => {
      return [...state.hashrates].pop()
    })
    const refreshingBalance = ref(false)
    const balance = ref({
      pendingBalance: 0,
      total24h: 0,
      totalPaid: 0,
    })
    const emitter = useEmitter()

    function handleStart() {
      startMining(state.form).then(() => {
        state.isMining = true
      })
    }

    function handleStop() {
      stopMining().then(() => {
        state.isMining = false
      })
    }

    function backToSelectCoin() {
      if (state.isMining) {
        stopMining().then(() => {
          state.isMining = false
          router.push('/select-coin')
        })
      } else {
        router.push('/select-coin')
      }
    }

    const statsUrl = `https://unmineable.com/coins/${state.form.type}/address/${state.form.address}`

    emitter.on('miningError', handleStop)

    function refreshBalance() {
      if (!state.form.address) return
      if (refreshingBalance.value) return
      refreshingBalance.value = true
      fetch(
        `https://api.unminable.com/v3/stats/${state.form.address}?tz=8&coin=${state.form.type}`,
      )
        .then((res) => res.json())
        .then((res) => {
          balance.value = {
            pendingBalance: res.data.pending_balance,
            total24h: res.data.total_24h,
            totalPaid: res.data.total_paid,
          }
        })
        .finally(() => {
          refreshingBalance.value = false
        })
    }

    onMounted(refreshBalance)

    function handleShowLog() {
      emitter.emit('openLogDialog')
    }

    return {
      state,
      hashrate,
      balance,
      refreshingBalance,
      statsUrl,
      handleStart,
      handleStop,
      backToSelectCoin,
      refreshBalance,
      handleShowLog,
    }
  },
}
</script>
