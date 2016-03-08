var socket = require('../libs/socket');

exports.post = function*(next) {

  if (this.session.socketIds) {
    this.session.socketIds.forEach(function(socketId) {
      console.log("emit to", socketId);
      socket.emitter.to(socketId).emit('logout');
    });
  }


  this.logout();
  this.redirect('/');

};
