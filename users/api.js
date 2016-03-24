'use strict';

const mongoose = require('mongoose');
const User = require('../models/user.js');

module.exports.post = function*(next) {
    let user = yield User.create({
        password: this.request.body.password,
        displayName: this.request.body.displayName,
        email: this.request.body.email,
        birthday: this.request.body.birthday
    });
    this.body = user.toObject();
};

module.exports.getId = function*(next) {
    this.body = this.userById.toObject();
}

module.exports.get = function*(next) {
    let users = yield User.find({}).lean();
    users = users.map(x => Object.keys(x).filter(y => {
        let field = ['displayName', 'email', 'gender', 'birthday', 'country', 'urlPic','aboutMe']
        if (~field.indexOf(y)) {
            return true
        };
        return false;
    }).reduce((a, b) => (a[b] = x[b], a), {}))
    this.body = users;
}
module.exports.put = function*(next) {
    let req = this.request.body;
    let user = yield User.findByIdAndUpdate(req.id, {
        $set: Object.keys(req).reduce((a, b) => (b == 'id' ? a : a[b] = req[b], a), {})
    }, (err, user) => {
        if (err) return console.err(err);
        // this.body = user
    });
}
