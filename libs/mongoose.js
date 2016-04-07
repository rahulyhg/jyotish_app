/**
 * This file must be required at least ONCE.
 * After it's done, one can use require('mongoose')
 *
 * In web-app: this is done at init phase
 * In tests: in mocha.opts
 * In gulpfile: in beginning
 */
'use strict'
var mongoose = require('mongoose');
var config = require('config');

if (process.env.MONGOOSE_DEBUG) {
  mongoose.set('debug', true);
}

mongoose.connect(config.mongoose.uri, config.mongoose.options);

// console.log(`mongoose URI:${config.mongoose.uri}, mongoose options:${config.mongoose.options}`);

module.exports = mongoose;
