const https = require('https')
const fs = require('fs-extra')
const path = require('path')

updateApiCoins()

async function updateApiCoins() {
  return new Promise((resolve) => {
    https.get(`https://api.unminable.com/v4/coin`, (res) => {
      let data = ''

      res.on('data', (str) => (data += str))
      res.on('end', () => {
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

export const apiv4coin = ${JSON.stringify(JSON.parse(data), null, 2)}
  `.trim()
}
