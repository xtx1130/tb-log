'use strict'

const fs = require('fs')
const Benchmark = require('benchmark')
const Log = require('../').Log

const suite = new Benchmark.Suite;
const log = new Log('test', false)

fs.writeSync = function write(...args){
  return args
}
suite.add('Console#Synctest', () => log.warn('Benchmark test'))
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({async: true})