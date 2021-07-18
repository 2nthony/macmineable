// unmineable.com
export const coins = [
  fastCoin('Bitcoin', 'BTC', 'vsv5-arfz'),
  fastCoin('Ethereum', 'ETH', 'xngb-nrye'),
  fastCoin('TetherUS', 'USDT', 'sjf5-7uc0'),
  fastCoin('Dogecoin', 'DOGE', '8jjv-jipu'),
  fastCoin('Litecoin', 'LTC', 'ilzd-ytp8'),
  fastCoin('SHIBA', 'SHIB', 'c310-m2st'),
  fastCoin('Aave', 'AAVE', 'kfsq-tyh6'),
  fastCoin('Monero', 'XMR', '8jjv-jipu'),
  fastCoin('Uniswap', 'UNI', 'lsc2-g97z'),
  fastCoin('Sushi', 'SUSHI', 'li0t-fqk4'),
  fastCoin('MATIC(Polygon)', 'MATIC', '2qbc-16fe'),
]

export const referralCodeMap = coins.reduce((val, item) => {
  val[item[1]] = item[2]
  return val
}, {})

function fastCoin(name, symbol, referralCode) {
  return [
    name,
    symbol,
    referralCode,
    `https://www.unmineable.com/img/logos/${symbol}.png`,
  ]
}
