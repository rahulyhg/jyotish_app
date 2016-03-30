'use strict';
// A "closer to real-life" app example
// using 3rd party middleware modules
// P.S. MWs calls be refactored in many files

// long stack trace (+clarify from co) if needed


if (process.env.TRACE) {
  require('./libs/trace');
}

var koa = require('koa');
var app = koa();

var config = require('config');
var mongoose = require('./libs/mongoose');

let port = config.connection.port;
let ipaddress = config.connection.ipaddress; 

 // console.log(process.env)

if(process.env.NODE_ENV == 'production'){
	port = '3000';
	ipaddress = 'localhost';
};

// keys for in-koa KeyGrip cookie signing (used in session, maybe other modules)
app.keys = config.keys;

var path = require('path');
var fs = require('fs');
var middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function(middleware) {
  app.use(require('./middlewares/' + middleware));
});

// ---------------------------------------

// can be split into files too
var Router = require('koa-router');
var router = new Router();

// router.get('/', this.body = this.render('index'));
router.get('/', require('./routes/frontpage').get);
router.post('/api/login', require('./routes/login').post);
// router.post('/logout', require('./routes/logout').post);
// router.register('/', require('./routes/login').post);
router.post('/mail/create/', require('./mail/api').post);
router.get('/mail/show/', require('./mail/api').get);

let pages = ['/mail','/advice','/auth','/profile','/users'];

pages.forEach(page=>router.get(page,require('./routes/app').get))

const User = require('./models/user');
const Mail = require('./models/mail');

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

// router.get('/fb', require('./auth/facebook').fb);
// router.get('/vk', require('./auth/vk').vk);
// router.get('api/login', require())

app.use(router.routes());

// var socket = require('./libs/socket');
var server = app.listen(port, ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), ipaddress, port);
          });
// socket(server);
