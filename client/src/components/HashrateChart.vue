<template>
  <div ref="bindto" class="hashrate-chart h-full"></div>
</template>

<script>
import { ref } from '@vue/reactivity'
import c3 from 'c3'
import 'c3/c3.css'
import { watch, onMounted } from '@vue/runtime-core'
import { useState } from '../state'
import { useEmitter } from '../emitter'

export default {
  setup() {
    const bindto = ref(null)
    const state = useState()
    const emitter = useEmitter()

    let chart

    onMounted(() => {
      chart = c3.generate({
        bindto: bindto.value,
        data: {
          columns: [['data1', ...state.hashrates]],
          type: 'area-spline',
          names: {
            data1: 'Hashrate',
          },
          colors: {
            data1: '#0070F3',
          },
        },
        transition: {
          duration: null,
        },
        point: {
          show: false,
        },
        axis: {
          x: {
            show: false,
          },
          y: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
      })

      emitter.on('initState', ({ currentHashrates }) => {
        loadChart(currentHashrates)
      })
    })

    watch(() => [...state.hashrates], loadChart)

    function loadChart(hashrates) {
      if (chart) {
        chart.load({
          columns: [['data1', ...hashrates]],
        })
      }
    }

    return {
      bindto,
    }
  },
}
</script>

<style>
.hashrate-chart .c3-tooltip-container table.c3-tooltip tbody tr:first-child {
  display: none;
}
</style>
