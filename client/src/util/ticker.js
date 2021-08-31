export function ticker(second, cb) {
  let ticker
  let count = 0
  const resetCount = () => {
    count = 0
  }

  function startTicker() {
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
    stopTicker: () => clearInterval(ticker),
  }
}
