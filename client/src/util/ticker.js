export function ticker(second, cb) {
  let ticker
  let count = 0
  const resetCount = () => {
    count = 0
  }

  startTicker()

  function startTicker() {
    if (ticker) return

    ticker = setInterval(() => {
      if (count >= second) {
        cb()
        resetCount()
      }

      count++
    }, 1000)
  }

  return {
    resetCount,
    startTicker,
    stopTicker: () => {
      ticker = clearInterval(ticker)
    },
  }
}
