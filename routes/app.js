exports.get = function*(next){
	this.body = this.render('index');
}