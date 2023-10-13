const { CMFutures } = require('../../../src')

const cmFuturesClient = new CMFutures('', '', {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getFundingRate('BTCUSD_PERP')
  .then((response) => console.log(response))
  .catch(console.error)
