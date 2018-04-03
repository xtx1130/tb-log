'use strict'

const fs = require('fs')
const Benchmark = require('benchmark')
const log = require('../')

const suite = new Benchmark.Suite;

process.stdout.write = function write(...args){
  return args
}
suite.add('Console#Asynctest', () => log.warn('Benchmark test'))
.on('cycle', function(event) {
  fs.writeSync(1, String(event.target));
  fs.writeSync(1, '\n');
})
.run({async: true})