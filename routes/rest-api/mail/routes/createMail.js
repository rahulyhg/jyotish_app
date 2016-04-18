const Mail = require('./models/mail');
// const mongoose = require('./libs/mongoose');


module.exports= function*(next){
	let param = this.request.body;
	let options = Object.keys(this.request.body).reduce((a,b)=>(a[b]=param[b],a),{});
	console.log(options);
	let mail = yield Mail.create(options);
	this.body = mail.toObject();
});

