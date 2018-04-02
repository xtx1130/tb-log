'use strict'

const fs = require('fs')

function write(str) {
  fs.writeSync(1, str)
}
exports = module.exports = {
  write
}