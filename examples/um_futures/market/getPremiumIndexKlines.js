const { UMFutures } = require('../../../src')

const umFuturesClient = new UMFutures('', '', {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .getPremiumIndexKlines('BTCUSDT', '1m')
  .then((response) => console.log(response))
  .catch(console.error)
