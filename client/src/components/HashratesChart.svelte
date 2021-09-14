<script>
  import { tryOnMount } from '@svelte-use/core'
  import c3 from 'c3'
  import 'c3/c3.css'
  import { hashrates } from '../store'

  let el
  let chart

  $: loadChart($hashrates)

  function loadChart(hashrates) {
    if (chart) {
      chart.load({
        columns: [['data1', ...hashrates]],
      })
    }
  }

  tryOnMount(() => {
    chart = c3.generate({
      bindto: el,
      data: {
        columns: [['data1', ...$hashrates]],
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
  })
</script>

<div bind:this={el} class="h-32 hashrates-chart" />

<style global>
  .hashrates-chart .c3-tooltip-container table.c3-tooltip tbody tr:first-child {
    display: none;
  }
  .dark .hashrates-chart .c3-tooltip-container table.c3-tooltip tr {
    color: #333;
  }
</style>
