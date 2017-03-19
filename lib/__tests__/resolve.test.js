const directoryNamedResolve = require('../index.js')
const { resolve } = require('path')

const defaultOptions = {
  'basedir': resolve(__dirname, '../../'),
  'browser': true,
  'extensions': ['.js'],
  'moduleDirectory': ['node_modules'],
  'paths': []
}

describe('resolve', () => {
  it('should resolve exact files normally', () => {
    const id = './tests/file.js'
    const resolution = directoryNamedResolve(id, defaultOptions)
    const actual = resolve(defaultOptions.basedir, id)
    expect(resolution).toBe(actual)
  })

  it('should resolve index.js before directory name', () => {
    const id = './tests/test1'
    const resolution = directoryNamedResolve(id, defaultOptions)
    const actual = resolve(defaultOptions.basedir, id, 'index.js')
    expect(resolution).toBe(actual)
  })

  it('should resolve directory-named file in absence of index', () => {
    const id = './tests/test2'
    const resolution = directoryNamedResolve(id, defaultOptions)
    const actual = resolve(defaultOptions.basedir, id, 'test2.js')
    expect(resolution).toBe(actual)
  })
})
