const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .changeInitialLeverage('BNBUSD_PERP', 20)
  .then((response) => console.log(response))
  .catch(console.error)
