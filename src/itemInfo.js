'use strict'

const figures = require('figures')

exports = module.exports = {
  warn: {
    name: 'warn',
    color: 'yellow',
    icon: figures('⚠'),
    level: 1
  },
  error: {
    name: 'error',
    color: 'red',
    icon: figures.cross,
    level: 0
  },
  success: {
    name: 'success',
    color: 'green',
    icon: figures.tick,
    level: 'none'
  },
  default: {
    name: 'default',
    color: 'blue',
    icon: figures('❯'),
    level: 2
  },
  start: {
    name: 'start',
    color: 'blue',
    icon: figures.bullet,
    level: 2
  },
  info: {
    name: 'info',
    color: 'blue',
    icon: figures('❯'),
    level: 2
  }
}