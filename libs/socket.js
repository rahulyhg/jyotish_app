'use strict'
const Cookies = require('cookies');
const config = require('config');
const mongoose = require('mongoose');
const co = require('co');
const User = require('../models/user');
const socketIO = require('socket.io');
const socketEmitter = require('socket.io-emitter');
// console.log(config.redis.redis_cli.password);
//@  redis turn_off
// var redisClient = require('redis').createClient(config.redis.redis_cli);


const socketRedis = require('socket.io-redis');
const sessionStore = require('./sessionStore');

// console.log(`redis client options:${config.redis.redis_cli}`)

//@  redis turn_off
// redisClient.auth(config.redis.password);


function socket(server) {
  var io = socketIO(server);
 
  //@  redis turn_off
  // io.adapter(socketRedis(redisClient));
 
   io.use(function(socket, next) {
    var handshakeData = socket.request;

    var cookies = new Cookies(handshakeData, {}, config.keys);

    var sid = 'koa:sess:' + cookies.get('koa.sid');

    co(function*() {

      var session = yield* sessionStore.get(sid, true);

      if (!session) {
        throw new Error("No session");
      }

      if (!session.passport && !session.passport.user) {
        throw new Error("Anonymous session not allowed");
      }

      // if needed: check if the user is allowed to join
      socket.user = yield User.findById(session.passport.user).exec();

      // if needed later: refresh socket.session on events
      socket.session = session;

      session.socketIds = session.socketIds ? session.socketIds.concat(socket.id) : [socket.id];

      console.log(session.socketIds);
      yield* sessionStore.save(sid, session);

      socket.on('disconnect', function() {
        co(function* clearSocketId() {
          var session = yield* sessionStore.get(sid, true);
          if (session) {
            session.socketIds.splice(session.socketIds.indexOf(socket.id), 1);
            yield* sessionStore.save(sid, session);
          }
        }).catch(function(err) {
          console.error("session clear error", err);
        });
      });

    }).then(function() {
      next();
    }).catch(function(err) {
      next(err);
    });

  });

  io.on('connection', function (socket) {
    let userName = socket.user.email;  
    io.emit('message', 'vasya', 'hello');

    socket.on('news', function(msg){    
    io.emit('news', {login:userName,message:msg});   
  });

    socket.on('userJoin', function(send){
      console.log(socket,userName);
    io.emit('userJoin', userName);
    });   
  });  
}

//@  redis turn_off
// socket.emitter = socketEmitter(redisClient);

module.exports = socket;
