const Router = require('koa-router');
var router = module.exports = new Router();

let pages = ['/mail', '/advice', '/auth', '/profile', '/users', '/mail/letters'];
pages.forEach(page => router.get(page + '/*', require('./routes/app').get))
pages.forEach(page => router.get(page, require('./routes/app').get))

// router.get('/', this.body = this.render('index'));
router.get('/', require('./routes/frontpage').get);