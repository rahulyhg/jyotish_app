const mongoose = require('./libs/mongoose');
const User = require('./models/user');

const Router = require('koa-router');
let router = module.exports = new Router();

router.param('userById', function*(id, next) {
    if (!mongooseose.Types.ObjectId.isValid(id)) {
      this.throw(404);
    }

    this.userById = yield User.findById(id);

    if (!this.userById) {
      this.throw(404);
    }
    yield * next;
  });

router.post('/auth/login/register/', require('./users/api').post);
router.get('/auth/login/register/:userById', require('./users/api').getId);
router.get('/auth/login/register/', require('./users/api').get);
router.put('/auth/login/register/', require('./users/api').put);
