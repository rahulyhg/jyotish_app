'use strict';
// A "closer to real-life" app example
// using 3rd party middleware modules
// P.S. MWs calls be refactored in many files

// long stack trace (+clarify from co) if needed

if (process.env.TRACE) {
  require('./libs/trace');
}

const koa = require('koa');
const app = koa();

const config = require('config');
const mongoose = require('./libs/mongoose');
const Router = require('koa-router');

let port = config.connection.port;
let ipaddress = config.connection.ipaddress;

// console.log(process.env)

if (process.env.NODE_ENV == 'production') {
  port = '3000';
  ipaddress = 'localhost';
};

// keys for in-koa KeyGrip cookie signing (used in session, maybe other modules)
app.keys = config.keys;

const path = require('path');
const fs = require('fs');
const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function(middleware) {
    app.use(require('./middlewares/' + middleware));
  });

// ---------------------------------------

// can be split into files too

// temprary path REFACTORING
var userpath = './routes/rest-api/users/api';
var mailpath = './routes/rest-api/mail/api'


// router.post('/api/login', require(userpath).post);
// router.post('/api/logout', require(userpath).post);
router.register('/', require('./routes/frontpage').post);

router.post('/api/mail/create/', require(mailpath).post);
router.get('/api/mail/show/', require(mailpath).get);
router.delete('/api/mail/del/:id', require(mailpath).delete);

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

router.post('/auth/login/register/', require(userpath).post);
router.get('/auth/login/register/:userById', require(userpath).getId);
router.get('/auth/login/register/', require(userpath).get);
router.put('/auth/login/register/', require(userpath).put);

// router.get('/fb', require('./auth/facebook').fb);
// router.get('/vk', require('./auth/vk').vk);
// router.get('api/login', require())

app.use(router.routes());

var socket = require('./libs/socket');
var server = app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now()), ipaddress, port);
  });
socket(server);
