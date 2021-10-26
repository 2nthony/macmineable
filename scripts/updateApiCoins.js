const https = require('https')
const fs = require('fs-extra')
const path = require('path')

updateApiCoins()

async function updateApiCoins() {
  return new Promise((resolve) => {
    https.get(`https://api.unminable.com/v4/coin`, (res) => {
      let chunk = ''

      res.on('data', (str) => (chunk += str))
      res.on('end', () => {
        const data = JSON.parse(chunk)
        data.data = data.data.map((item) => {
          // only these is needed
          const { symbol, name } = item
          return {
            symbol,
            name,
          }
        })

        resolve(
          fs.outputFile(
            path.join(__dirname, '..', 'client/src/server/unMineableCoins.js'),
            resolveOutputFileString(data),
            'utf-8',
          ),
        )
      })
    })
  })
}

function resolveOutputFileString(data) {
  return `
// https://api.unminable.com/v4/coin
// Use a js module instead ajax
// Updated on: ${new Date().toLocaleString()}

export const apiv4coin = ${JSON.stringify(data, null, 2)}
  `.trim()
}
