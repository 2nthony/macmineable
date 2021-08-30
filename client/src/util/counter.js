/**
 * 单位: 秒
 */
export function createCounter(triggerCount, cb) {
  let count = 0
  const resetCount = () => {
    count = 0
  }

  setInterval(() => {
    if (count >= triggerCount) {
      cb()
      resetCount()
    }

    count++
  }, 1000)

  return resetCount
}
