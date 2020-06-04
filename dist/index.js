
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./root.cjs.production.min.js')
} else {
  module.exports = require('./root.cjs.development.js')
}
