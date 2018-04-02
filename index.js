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
  }
  error(str){
    this[output](str, info.error)
  }
  success(str) {
    this[output](str, info.success)
  }
  default(str) {
    this[output](str, info.default)
  }
  info(str) {
    this[output](str, info.info)
  }
  start(str) {
    this[output](str, info.start)
  }
  clear () {
    this.stream.write('\x1b[2J\x1b[0f')
  }
  [output](str, info) {
    let baseInfo = pad(`[${this.name} ${info.name}]:`)
    console.log(baseInfo)
    this.stream.write(chalk[info.color](`${info.icon} ${date()} ${baseInfo}${str}\n`))
  }
}

exports = module.exports = new Log('tb')
module.exports.Log = Log