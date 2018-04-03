'use strict'

const log = require('../')
const Log = require('../').Log

let logT = new Log('',false)

describe('Test for log async stdout', () => {
  it('Test case should be show correctly', () => {
    expect(log.warn('test case') === 1).toBe(true)
    expect(log.start('test case') === 2).toBe(true)
    expect(log.default('test case') === 2).toBe(true)
  })
})

describe('Test for log sync stdout', () => {
  it('Test case should be show correctly', () => {
    expect(logT.error('test case') === 0).toBe(true)
    expect(logT.info('test case') === 2).toBe(true)
    expect(logT.success('test case') === 'none').toBe(true)
  })
})
describe('Test for clear tty', () => {
  it('Test case should clear tty', () => {
    expect(log.clear()).toBe(undefined)
  })
})
