const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const CoinMarketCap = require('coinmarketcap-api')
 
const apiKey = '4f4782f4-4fb7-4881-b1a5-e11c6ffce450'
const client = new CoinMarketCap(apiKey)
 
client.getIdMap({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)


// client.getTickers().then(console.log).catch(console.error)
// client.getGlobal().then(console.log).catch(console.error)

/* Example in Node.js ES6 using request-promise */

// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     'start': '1',
//     'limit': '5000',
//     'convert': 'USD'
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
//   },
//   json: true,
//   gzip: true
// };

// rp(requestOptions).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });
