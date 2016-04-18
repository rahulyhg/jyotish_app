import angular from 'angular';
import uirouter from 'angular-ui-router'

import auth from './Components/auth';
import rounting from './auth.config';

export default angular.module('auth', [uirouter])
	.component('auth', auth)
	.config(routing)
	.name;