const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const co = require('co');


passport.serializeUser(function(user, done) {
  done(null, user.id); // uses _id as idField
});

passport.deserializeUser(function(id, done) {
  User.findById(id, done); // callback version checks id validity automatically
});

// done(null, user)
// OR
// done(null, false, { message: <error message> })  <- 3rd arg format is from built-in messages of strategies
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {


    co(function*() {

      if(!email || !password) this.throw(404);

      yield function(callback){
        setTimeout(callback,100)
      };

      email = email.toLowerCase();

    var user = yield User.findOne({ email: email }).exec();

      if (!user || !user.checkPassword(password)) {
        this.throw(404)
      }  
     // function (err, user) {
     //  if (err) {
     //    return done(err);
     //  }

     //  if (!user || !user.checkPassword(password)) {
     //    // don't say whether the user exists
     //    return done(null, false, { message: 'Нет такого пользователя или пароль неверен.' });
     //  }
     //  return done(null, user);
    }).then(function(user){
      done(null, user);
    }, function(err) {
      if(err) {
        done(null, false, "Пользователь не найден")
      } else {
        done(err);
      }

    });
  })
);

var passportInitialize = passport.initialize();

module.exports = function*(next) {
  Object.defineProperty(this, 'user', {
    get: function() {
      return this.req.user;
    }
  });

  yield passportInitialize.call(this, next);

};
