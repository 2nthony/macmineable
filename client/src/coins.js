// unmineable.com
export const coins = [
  fastCoin('Bitcoin', 'BTC', 'vsv5-arfz'),
  fastCoin('Ethereum', 'ETH', 'xngb-nrye'),
  fastCoin('TetherUS', 'USDT', 'sjf5-7uc0'),
  fastCoin('Dogecoin', 'DOGE', '8jjv-jipu'),
  fastCoin('Litecoin', 'LTC', 'ilzd-ytp8'),
  fastCoin('SHIBA', 'SHIB', 'c310-m2st'),
  fastCoin('Aave', 'AAVE', 'kfsq-tyh6'),
  fastCoin('Uniswap', 'UNI', 'lsc2-g97z'),
  fastCoin('Sushi', 'SUSHI', 'li0t-fqk4'),
  fastCoin('MATIC(Polygon)', 'MATIC', '2qbc-16fe'),
]

export function getReferralCode(coins, symbol) {
  return coins.find((coin) => coin[1] === symbol)[2]
}

export function fetchCoins() {
  return fetch('https://api.unminable.com/v4/coin')
    .then((res) => res.json())
    .then((res) => {
      const data = res.data
      return data
        .filter((unCoin) => {
          return coins.findIndex((coin) => coin[1] === unCoin.symbol) < 0
        })
        .map((supplyCoin) => {
          return fastCoin(supplyCoin.name, supplyCoin.symbol, 'xngb-nrye')
        })
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
