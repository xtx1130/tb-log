'use strict'

const chalk = require('chalk')
const writeSync = require('./src/writeSync')
const date = require('./src/date')
const pad = require('./src/pad')
const info = require('./src/itemInfo')

const output = Symbol.for('private#output')

class Log {
  constructor(name, isAsync) {
    this.name = name || 'noname'
    this.isAsync = isAsync === undefined ? true : false
    this.stream = this.isAsync ? process.stdout : writeSync
  }
  warn(str){
    this[output](str, info.warn)
    return info.warn.level
  }
  error(str){
    this[output](str, info.error)
    return info.error.level
  }
  success(str) {
    this[output](str, info.success)
    return info.success.level
  }
  default(str) {
    this[output](str, info.default)
    return info.default.level
  }
  info(str) {
    this[output](str, info.info)
    return info.info.level
  }
  start(str) {
    this[output](str, info.start)
    return info.start.level
  }
  clear () {
    this.stream.write('\x1b[2J\x1b[0f')
  }
  [output](str, info) {
    let baseInfo = pad(`[${this.name} ${info.name}]:`)
    this.stream.write(chalk[info.color](`${info.icon} ${date()} ${baseInfo}${str}\n`))
  }
}

exports = module.exports = new Log('tb')
module.exports.Log = Log