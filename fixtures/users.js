var oid = require('../libs/db/oid');

require('../models/user');

exports.User = [{
  _id:         oid('user-ls'),
  displayName: "Oleg",
  email:       "oleglustenko@gmail.com",
  password:    "123456"
}, {
  _id:         oid('user-oleg'),
  displayName: "Lustenko",
  email:       "lustenko@gmail.com",
  password:    "123456"
}];
