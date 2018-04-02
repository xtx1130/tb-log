'use strict'

const log = require('../')

const Log = require('../').Log

let logT = new Log('xtx')
logT.warn('1111')
logT.info('1111')
log.success('1111')
log.error('1111')
log.default('1111')
log.start('1111')