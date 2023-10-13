const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .changeInitialLeverage('BNBUSDT', 'CROSSED')
  .then((response) => console.log(response))
  .catch(console.error)
