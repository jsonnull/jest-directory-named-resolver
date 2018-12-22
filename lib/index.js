const resolve = require('resolve')
const path = require('path')

function directoryNamedResolve (id, options) {
  const { basedir, extensions, moduleDirectory, paths } = options

  const resolveOpts = {
    basedir,
    extensions,
    moduleDirectory,
    paths,
    preserveSymlinks: false,
  }

  /* Attempt regular index.js first */
  try {
    return resolve.sync(id, resolveOpts)
  } catch (e) {
    const parsed = path.parse(id)
    const directoryNamedId = id + path.sep + parsed.name
    return resolve.sync(directoryNamedId, resolveOpts)
  }
}

module.exports = directoryNamedResolve
