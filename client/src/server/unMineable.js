import { apiv4coin } from './unMineableCoins'

const referralCode = 'xngb-nrye'

const presetCoins = [
  fastCoin('Ethereum', 'ETH', 'xngb-nrye'),
  fastCoin('Dogecoin', 'DOGE', '8jjv-jipu'),
  fastCoin('SHIBA', 'SHIB', 'c310-m2st'),
]

export const unMineableCoins = presetCoins
  .concat(
    apiv4coin.data
      .filter((unCoin) => {
        return presetCoins.findIndex((coin) => coin[1] === unCoin.symbol) < 0
      })
      .map((supplyCoin) => {
        return fastCoin(supplyCoin.name, supplyCoin.symbol, referralCode)
      }),
  )
  .sort()

export function getReferralCode(coins, symbol) {
  return coins.find((coin) => coin[1] === symbol)[2]
}

export function validateAddress(symbol, address) {
  // return Promise.resolve(true)
  return fetch(`https://api.unminable.com/v4/address/${address}?coin=${symbol}`)
    .then((res) => res.json())
    .then((res) => !!res.success)
}

export function getBalance(symbol, address) {
  if (!symbol || !address) {
    return Promise.reject()
  }

  return fetch(
    `https://api.unminable.com/v3/stats/${address}?tz=8&coin=${symbol}`,
  )
    .then((res) => res.json())
    .then((res) => {
      return {
        pendingBalance: res.data.pending_balance,
        total24h: res.data.total_24h,
        totalPaid: res.data.total_paid,
      }
    })
}

function fastCoin(name, symbol, referralCode) {
  return [
    name,
    symbol,
    referralCode,
    `https://www.unmineable.com/img/logos/${symbol}.png`,
  ]
}
