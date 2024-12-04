'use strict'

const { Console } = require('console')

const { CMStream } = require('../../../src')
const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

const callbacks = {
  open: () => logger.debug('Connected with Websocket server'),
  close: () => logger.debug('Disconnected with Websocket server'),
  message: (data) => logger.info(data)
}

const websocketStreamClient = new CMStream({ logger, callbacks })

websocketStreamClient.allBookTickersStream()

setTimeout(() => websocketStreamClient.disconnect(), 6000)
