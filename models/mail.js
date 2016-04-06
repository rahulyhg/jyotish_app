const mongoose = require('mongoose');
const crypto = require('crypto');
//const _ = require('lodash');
const config = require('config');

var mailsSchema = new mongoose.Schema({
  nameSender:   {
    type:     String,
    required: "Имя пользователя отсутствует."
  },
  from:         {
    type:     String,    
    required: "E-mail пользователя не должен быть пустым.",
    validate: [
      {
        validator: function checkEmail(value) {
          return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
        },
        msg:       'Укажите, пожалуйста, корректный email.'
      }
    ]
  },
  to:         {
    type:     String,    
    required: "E-mail пользователя не должен быть пустым.",
    validate: [
      {
        validator: function checkEmail(value) {
          return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
        },
        msg:       'Укажите, пожалуйста, корректный email.'
      }
    ]
  },
  Theme:  {
    type: String
  },
  textLetter:          {   
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  unicode: {
    type:String
  },
  inBox: {
    type: String,
    required: true,
    default: 'Sent' 
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  } 
});

// userSchema.virtual('mailText')
//   .set(function(mailText) {
//     if (mailText !== undefined) {
//       if (mailText.length == 0) {
//         this.invalidate('mailText', 'Пароль должен быть минимум 4 символа.');
//       }
//     }
//     this._plainPassword = password;

//     this.salt = crypto.randomBytes(config.crypto.hash.length).toString('base64');
//     this.passwordHash = crypto.pbkdf2Sync(password, this.salt, config.crypto.hash.iterations, config.crypto.hash.length);
//   })
//   .get(function() {
//     return this._plainPassword;
//   });

// userSchema.methods.checkPassword = function(password) {
//   if (!password) return false; // empty password means no login by password
//   if (!this.passwordHash) return false; // this user does not have password (the line below would hang!)

//   return crypto.pbkdf2Sync(password, this.salt, config.crypto.hash.iterations, config.crypto.hash.length) == this.passwordHash;
// };

module.exports = mongoose.model('mailCollection', mailsSchema);

