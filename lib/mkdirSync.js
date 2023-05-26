var path = require('path')
var fs   = require('fs')

var mkdirSync = function(dirpath, options) {
  if (!options || (typeof options !== 'object'))
    options = {}

  try {
    fs.mkdirSync(dirpath, options)
  }
  catch(error) {
    if ((error.code === 'ENOENT') && options.recursive)
      mkdirSyncRecursivePolyfill(dirpath)
    else if (error.code !== 'EEXIST')
      throw error
  }
}

// sequentially make each directory in recursive path
var mkdirSyncRecursivePolyfill = function(dirpath) {
  var parts

  parts = dirpath.split(path.sep)
  parts = parts.filter(function(part) {return !!part})
  if (dirpath.indexOf(path.sep) === 0) {
    parts.unshift(path.sep)
  }

  for (var i = 1; i <= parts.length; i++) {
    mkdirSyncNextRecursiveLevel(path.join.apply(null, parts.slice(0, i)))
  }
}

// make next directory in recursive path
var mkdirSyncNextRecursiveLevel = function(dirpath) {
  if  (path.sep === dirpath) return
  if ((path.sep === path.win32.sep) && ((dirpath.substr(-1) === ':') || (dirpath.substr(-2) === ':\\') || (dirpath.substr(-2) === ':.'))) return

  try {
    fs.mkdirSync(dirpath)
  }
  catch (error) {
    if (error.code !== 'EEXIST')
      throw error
  }
}

module.exports = mkdirSync
