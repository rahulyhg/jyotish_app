// import 'bootstrap/dist/css/bootstrap-min.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material'
// import mailJob from './Components/mail/mail.service/mail.api'
import 'bootstrap/dist/css/bootstrap.css';

import routing from './app.config.js';

import mail from './Components/mail/mail';
import users from './Components/users/users';

angular.module('app', [uirouter, ngMaterial,
		mail, users])
	.config(routing)