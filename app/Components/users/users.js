import angular from 'angular';
import uirouter from 'angular-ui-router';

import usersLists from './users-list/users-list';

import routing from './users.config'
import UserService from './user.service/user.service'


export default angular.module('module.users', [uirouter, usersLists])
	.config(routing)
	.name