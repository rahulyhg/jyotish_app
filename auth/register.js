'use strict'

const mongoose = require('./libs/mongoose');
const Router = require('koa-router');
const User = require('../..models/user');

var router = new Router();

router.param('userById', function*(id, next) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      this.throw(404);
    }

    this.userById = yield User.findById(id);

    if (!this.userById) {
      this.throw(404);
    }
    yield* next;
  })
  .post('/auth/login/register/', function*(next) {
    let user = yield User.create({
      email: this.request.body.email
    });
    this.body = user.toObject();
  })
  .get('/auth/login/register/:userById', function*(next) {
    this.body = this.userById.toObject();
  })
  .get('/auth/login/register/', function*(next) {
    let users = yield User.find({}).lean();
    this.body = users;
  });