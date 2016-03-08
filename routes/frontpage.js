exports.get = function*(next) {
  //console.log(this.isAuthenticated(), this.user);

  if (this.isAuthenticated()) {
    this.body = this.render('index');
  } else {
    this.body = this.render('index');
  }

};

