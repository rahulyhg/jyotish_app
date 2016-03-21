'use strict';
const Mail = require('../models/mail');

exports.post = function*(next){
	let param = this.request.body;
	let options = Object.keys(this.request.body).reduce((a,b)=>(a[b]=param[b],a),{});
	console.log(options);
	let mail = yield Mail.create(options);
	this.body = mail.toObject();
}

exports.get = function*(next){
	let mails = yield Mail.find({}).lean();
	this.body = mails;
};